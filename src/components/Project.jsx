import React from 'react';

function Project({ title, image, link }) {
  return (
    <div className="project-card">
      <img src={image} alt={title} className="project-image" />
      <h3 className="project-title">{title}</h3>
      <div className="project-links">
        <a href={link} target="_blank" rel="noopener noreferrer">View</a>
      </div>
    </div>
  );
}

export default Project;
