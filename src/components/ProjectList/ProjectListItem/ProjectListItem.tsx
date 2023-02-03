import React, { createRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { Project } from '../../../types';
import { ProjectListItemContainer, ProjectListItemIternalContainer, ProjectListItemSubtitle, ProjectListItemImage, ProjectListItemTitle, ProjectListItemVideo } from './ProjectListItem.styles';
import placeholderImage from './project-placeholder.jpg';

interface ProjectListItemProps {
  project?: Project
}

const ProjectListItem: React.FC<ProjectListItemProps> = ({ project }) => {
  const [doRenderVideo, setDoRenderVideo] = useState(false);
  const [key, setKey] = useState(uuidv4());
  const [waitingForVideoToFinish, setWaitingForVideoToFinish] = useState(false);
  const itemVideoRef = createRef<HTMLVideoElement>();

  const handleMouseEnter = () => {
    if (waitingForVideoToFinish) {
      setWaitingForVideoToFinish(false);
      if (itemVideoRef.current)
        itemVideoRef.current.playbackRate = 1;
      return;
    }

    setDoRenderVideo(true);
    setKey(uuidv4());
  };

  const handleMouseLeave = () => {
    setWaitingForVideoToFinish(true);
    if (itemVideoRef.current)
      itemVideoRef.current.playbackRate = 10;
  };

  const handleVideoEnded = () => {
    if (!waitingForVideoToFinish) {
      itemVideoRef.current?.play();
      return;
    }

    setDoRenderVideo(false);
    setWaitingForVideoToFinish(false);
  };

  const renderInternalContainer = () => (
    <ProjectListItemIternalContainer onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {project && <ProjectListItemImage src={project.thumb || placeholderImage} />}
      {project && doRenderVideo && (
        <ProjectListItemVideo onEnded={handleVideoEnded} ref={itemVideoRef} key={key} controls={false} autoPlay={true} muted={true} loop={false}>
          <source src={project.video} type="video/mp4" />
          Sorry, your browser doesn't support videos.
        </ProjectListItemVideo>
      )}
      {project && !doRenderVideo && <ProjectListItemImage src={project.thumb || placeholderImage} />}
      <ProjectListItemSubtitle $loading={!project}>{project ? project.subtitle : 'Loading...'}</ProjectListItemSubtitle>
      <ProjectListItemTitle $loading={!project}>{project ? project.title : 'Loading...'}</ProjectListItemTitle>
    </ProjectListItemIternalContainer>
  );

  return (
    <ProjectListItemContainer>
      {project ? (
        <Link to={`/project/${project.slug}`}>
          {renderInternalContainer()}
        </Link>
      ) : renderInternalContainer()}
    </ProjectListItemContainer>
  );
};

export default ProjectListItem;
