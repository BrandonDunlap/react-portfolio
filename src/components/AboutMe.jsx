import React from 'react';

function AboutMe() {
  return (
    <section className="about-me">
      <h2>About Me</h2>
      <img src="/src/assets/profilePicture.jpg" alt="Brandon Dunlap" className="about-me-photo" />
      <p>
        Hello, my name is Brandon. I am an aspiring Full-Stack Developer with an extensive Scrum and Agile background of over 5 years. 
        I currently work as a Technology Analyst at State Farm where I assist with solving complex problems that do not have a clearly defined solution. 
        I use my analytical skills to help narrow down the possibilities and find out exactly what is causing the issue. 
        My strong Agile background helps me focus on outcomes that present value to the customer or the stakeholder. 
        I will bring this strong foundation along with me in my coding journey so that I may become a Full-Stack developer that exceeds expectations and is always looking to improve.
      </p>
    </section>
  );
}

export default AboutMe;
