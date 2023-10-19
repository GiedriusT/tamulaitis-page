import React, { createRef, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Transition } from 'react-transition-group';
import { v4 as uuidv4 } from 'uuid';
import { Project } from '../../../types';
import { isHoverableDevice } from '../../../theme/utils';
import * as S from './ProjectListItem.styles';
import { getProjectMedia } from '../../../projects/utils';

type ProjectListItemProps = {
  project: Project
};

const ProjectListItem: React.FC<ProjectListItemProps> = ({ project }) => {
  const [hoverState, setHoverState] = useState(false);
  const wasInTheMiddle = useRef(false);
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

  const projectMedia = getProjectMedia(project.slug);
  const thumbUrl = projectMedia.thumbUrl;
  const videoUrl = projectMedia.videoUrl;

  const switchToVideo = () => {
    if (hoverState)
      return;

    setHoverState(true);
    setDoRenderVideo(true);
    setVideoKey(uuidv4());
    setTimeout(() => {
      if (!countRef.current.current)
        return;

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
    }, S.BACK_TO_IMAGE_FADE_DURATION);
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

  const handleMobilePositionChange = () => {
    if (!elementRef.current)
      return;

    const middle = window.innerHeight * 0.35;
    const rect = elementRef.current.getBoundingClientRect();
    const isInTheMiddle = rect.y < middle && rect.y + rect.height > middle;

    if (isInTheMiddle && !wasInTheMiddle.current)
      handleMouseEnter();
    else if (!isInTheMiddle && wasInTheMiddle.current)
      handleMouseLeave();

    if (isInTheMiddle !== wasInTheMiddle.current)
      wasInTheMiddle.current = isInTheMiddle;
  };

  useEffect(() => {
    if (isHoverableDevice)
      return;

    window.addEventListener('resize', handleMobilePositionChange);
    window.addEventListener('scroll', handleMobilePositionChange);

    return () => {
      window.removeEventListener('resize', handleMobilePositionChange);
      window.removeEventListener('scroll', handleMobilePositionChange);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const renderInternalContainer = () => (
    <S.ProjectListItemIternalContainer ref={elementRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {project && (
        <>
          {thumbUrl && <S.ProjectListItemBackgroundImage src={thumbUrl} />}
          {videoUrl && doRenderVideo && (
            <S.ProjectListItemVideo ref={videoRef} key={videoKey} controls={false} autoPlay={false} muted={true} loop={true}>
              <source src={videoUrl} type="video/mp4" />
              Sorry, your browser doesn't support videos.
            </S.ProjectListItemVideo>
          )}
          {thumbUrl && <Transition in={hoverState} timeout={{ enter: 0, exit: S.BACK_TO_IMAGE_FADE_DURATION }} nodeRef={transitionRef}>
            {status => <S.ProjectListItemImage ref={transitionRef} src={thumbUrl} $status={status} />}
          </Transition>}
          {project.isComingSoon && (
            <S.ProjectListItemComingSoon>
              Coming soon
            </S.ProjectListItemComingSoon>
          )}
        </>
      )}
      <S.ProjectListItemSubtitle $loading={!project}>{project ? project.subtitle : 'Loading...'}</S.ProjectListItemSubtitle>
      <S.ProjectListItemTitle $loading={!project}>{project ? project.title : 'Loading...'}</S.ProjectListItemTitle>
    </S.ProjectListItemIternalContainer>
  );

  return (
    <S.ProjectListItemContainer>
      {project && !project.isComingSoon ? (
        <Link to={`/project/${project.slug}`}>
          {renderInternalContainer()}
        </Link>
      ) : renderInternalContainer()}
    </S.ProjectListItemContainer>
  );
};

export default ProjectListItem;
