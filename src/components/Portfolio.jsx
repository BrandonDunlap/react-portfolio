import React from 'react';
import Project from './Project';
import challenge1 from '../assets/Challenge 1 Image.png';
import challenge2 from '../assets/Challenge 2 Image.png';
import challenge4 from '../assets/Challenge 4 Image.png';
import challenge5 from '../assets/Challenge 5 Image.png';
import dynamicReadme from '../assets/Dynamic ReadME.png';

function Portfolio() {
  const projects = [
    {
      title: 'Project 1',
      image: challenge1,
      link: 'https://brandondunlap.github.io/bootcamp-challenge-1/'
    },
    {
      title: 'Project 2',
      image: challenge2,
      link: 'https://brandondunlap.github.io/bootcamp-challenge-2/'
    },
    {
      title: 'Project 3',
      image: challenge4,
      link: 'https://brandondunlap.github.io/bootcamp-challenge-4/'
    },
    {
      title: 'Project 4',
      image: challenge5,
      link: 'https://github.com/BrandonDunlap/bootcamp-challenge-5'
    },
    {
      title: 'Project 5',
      image: dynamicReadme,
      link: 'https://github.com/BrandonDunlap/dynamic-readme'
    },
    {
      title: 'Project 6',
      image: dynamicReadme, // Replace with the correct image if you have it
      link: 'https://github.com/BrandonDunlap/DontForget-note-taker-app?tab=readme-ov-file#screenshots'
    },
  ];

  return (
    <section className="portfolio">
      <h2>Portfolio</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            image={project.image}
            link={project.link} 
          />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
