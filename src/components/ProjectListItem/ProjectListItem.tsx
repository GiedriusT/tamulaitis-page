import React, {
  createRef, useEffect, useRef, useState,
} from 'react';
import { Transition, type TransitionStatus } from 'react-transition-group';
import { v4 as uuidv4 } from 'uuid';
import type { Project } from '../../types';
import { isHoverableDevice } from '../../theme/utils';
import S from './ProjectListItem.module.scss';
import { getProjectCanonicalUrl, getProjectThumbUrl, getProjectVideoUrl } from '../../utils/projects';
import { getProjectPageTitle } from '../../utils/metadata';

const BACK_TO_IMAGE_FADE_DURATION = 700;

const transitionStatusStyles: { [key in TransitionStatus]: React.CSSProperties } = {
  entering: { opacity: 0 },
  entered: { opacity: 0 },
  exiting: { opacity: 1, transition: `opacity ${BACK_TO_IMAGE_FADE_DURATION / 1000}s ease-out` },
  exited: { opacity: 1 },
  unmounted: { display: 'none' },
};

type ProjectListItemProps = {
  project: Project
};

function ProjectListItem({ project }: ProjectListItemProps) {
  const [hoverState, setHoverState] = useState(false);
  const wasInViewport = useRef(false);
  const [doRenderVideo, setDoRenderVideo] = useState(false);
  const [videoKey, setVideoKey] = useState(uuidv4());
  const elementRef = useRef<HTMLDivElement>(null);
  const videoRef = createRef<HTMLVideoElement>();
  const fadeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  // This is needed for react-transition-group, without it warning is thrown
  // in React.StrictMode
  const transitionRef = useRef<HTMLImageElement | null>(null);
  const countRef = useRef(videoRef);
  countRef.current = videoRef;

  const thumbUrl = getProjectThumbUrl(project.slug);
  const videoUrl = getProjectVideoUrl(project.slug);

  const switchToVideo = () => {
    if (hoverState) return;

    setHoverState(true);
    setDoRenderVideo(true);
    setVideoKey(uuidv4());
    setTimeout(() => {
      if (!countRef.current.current) return;

      countRef.current.current.defaultMuted = true;
      countRef.current.current.muted = true;
      countRef.current.current.playsInline = true;
      countRef.current.current.play();
    }, 50);
  };

  const switchBackToImage = () => {
    videoRef.current?.pause();
    setHoverState(false);
    fadeTimeoutRef.current = setTimeout(() => {
      setDoRenderVideo(false);
      fadeTimeoutRef.current = null;
    }, BACK_TO_IMAGE_FADE_DURATION);
  };

  const resumeVideo = () => {
    setHoverState(true);
    videoRef.current?.play();
  };

  const handleMouseEnter = () => {
    if (fadeTimeoutRef.current) {
      clearTimeout(fadeTimeoutRef.current);
      fadeTimeoutRef.current = null;

      resumeVideo();
      return;
    }

    switchToVideo();
  };

  const handleMouseLeave = () => {
    switchBackToImage();
  };

  useEffect(() => {
    if (isHoverableDevice()) return undefined;

    const handleMobilePositionChange = () => {
      if (!elementRef.current) return;

      const rect = elementRef.current.getBoundingClientRect();
      const isInViewport = rect.y >= 0 && rect.y + rect.height <= window.innerHeight;

      if (isInViewport && !wasInViewport.current) handleMouseEnter();
      else if (!isInViewport && wasInViewport.current) handleMouseLeave();

      if (isInViewport !== wasInViewport.current) wasInViewport.current = isInViewport;
    };

    window.addEventListener('resize', handleMobilePositionChange);
    window.addEventListener('scroll', handleMobilePositionChange);

    return () => {
      window.removeEventListener('resize', handleMobilePositionChange);
      window.removeEventListener('scroll', handleMobilePositionChange);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const renderInternalContainer = () => (
    <div className={S.projectListItemIternalContainer} ref={elementRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {thumbUrl && <img className={S.projectListItemBackgroundImage} src={thumbUrl} alt={getProjectPageTitle(project)} />}
      {videoUrl && doRenderVideo && (
        <video className={S.projectListItemVideo} ref={videoRef} key={videoKey} controls={false} autoPlay={false} muted loop>
          <source src={videoUrl} type="video/mp4" />
        </video>
      )}
      {thumbUrl && (
      <Transition in={hoverState} timeout={{ enter: 0, exit: BACK_TO_IMAGE_FADE_DURATION }} nodeRef={transitionRef}>
        {(status) => <img className={S.projectListItemImage} style={transitionStatusStyles[status]} ref={transitionRef} src={thumbUrl} alt="" />}
      </Transition>
      )}
      {project.isComingSoon && (
        <div className={S.projectListItemComingSoon}>
          Coming soon
        </div>
      )}
      <p className={S.projectListItemSubtitle}>{project.subtitle}</p>
      <h3 className={S.projectListItemTitle}>{project.title}</h3>
    </div>
  );

  return (
    <div className={S.projectListItemContainer}>
      {project && !project.isComingSoon ? (
        <a href={getProjectCanonicalUrl(project, true)}>
          {renderInternalContainer()}
        </a>
      ) : renderInternalContainer()}
    </div>
  );
}

export default ProjectListItem;
