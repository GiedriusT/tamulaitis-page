import React, { createRef, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { Project } from '../../../types';
import * as S from './ProjectListItem.styles';
import placeholderImage from './project-placeholder.jpg';

const SWITCH_BACK_TO_THUMBNAIL_DELAY = 1000;

interface ProjectListItemProps {
  project?: Project
}

const ProjectListItem: React.FC<ProjectListItemProps> = ({ project }) => {
  const [doRenderVideo, setDoRenderVideo] = useState(false);
  const [key, setKey] = useState(uuidv4());
  const itemVideoRef = createRef<HTMLVideoElement>();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;

      itemVideoRef.current?.play();
      return;
    }

    setDoRenderVideo(true);
    setKey(uuidv4());
  };

  const handleVideoEnded = () => {
    itemVideoRef.current?.play();
  };

  const switchBackToThumbnail = () => {
    setDoRenderVideo(false);
  };

  const handleMouseLeave = () => {
    itemVideoRef.current?.pause();
    
    timeoutRef.current = setTimeout(() => {
      switchBackToThumbnail();
      timeoutRef.current = null;
    }, SWITCH_BACK_TO_THUMBNAIL_DELAY);
  };

  const renderInternalContainer = () => (
    <S.ProjectListItemIternalContainer onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {project && <S.ProjectListItemImage src={project.thumb || placeholderImage} />}
      {project && doRenderVideo && (
        <S.ProjectListItemVideo onEnded={handleVideoEnded} ref={itemVideoRef} key={key} controls={false} autoPlay={true} muted={true} loop={false}>
          <source src={project.video} type="video/mp4" />
          Sorry, your browser doesn't support videos.
        </S.ProjectListItemVideo>
      )}
      {project && !doRenderVideo && <S.ProjectListItemImage src={project.thumb || placeholderImage} />}
      <S.ProjectListItemSubtitle $loading={!project}>{project ? project.subtitle : 'Loading...'}</S.ProjectListItemSubtitle>
      <S.ProjectListItemTitle $loading={!project}>{project ? project.title : 'Loading...'}</S.ProjectListItemTitle>
    </S.ProjectListItemIternalContainer>
  );

  return (
    <S.ProjectListItemContainer>
      {project ? (
        <Link to={`/project/${project.slug}`}>
          {renderInternalContainer()}
        </Link>
      ) : renderInternalContainer()}
    </S.ProjectListItemContainer>
  );
};

export default ProjectListItem;
