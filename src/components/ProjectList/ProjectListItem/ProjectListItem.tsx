import React, { createRef, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Transition } from 'react-transition-group';
import { v4 as uuidv4 } from 'uuid';
import { Project } from '../../../types';
import * as S from './ProjectListItem.styles';
import { getProjectMedia } from '../../../projects/utils';

interface ProjectListItemProps {
  project: Project
}

const ProjectListItem: React.FC<ProjectListItemProps> = ({ project }) => {
  const [hoverState, setHoverState] = useState(false);
  const [doRenderVideo, setDoRenderVideo] = useState(false);
  const [videoKey, setVideoKey] = useState(uuidv4());
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
    setHoverState(true);
    setDoRenderVideo(true);
    setVideoKey(uuidv4());
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

  const renderInternalContainer = () => (
    <S.ProjectListItemIternalContainer onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {project && (
        <>
          {thumbUrl && <S.ProjectListItemBackgroundImage src={thumbUrl} />}
          {videoUrl && doRenderVideo && (
            <S.ProjectListItemVideo ref={videoRef} key={videoKey} controls={false} autoPlay={true} muted={true} loop={true}>
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
