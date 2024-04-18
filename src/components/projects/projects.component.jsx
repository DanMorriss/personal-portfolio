import "./projects.styles.scss";

import Image from "react-bootstrap/Image";

import highlights_mobile from "../../public/images/projects/highlights-mobile.png";
import highlights_tablet from "../../public/images/projects/highlights-tablet.png";
import highlights_laptop from "../../public/images/projects/highlights-laptop.png";
import { ParallaxLayer } from "@react-spring/parallax";

const Projects = () => {
  return (
    <div className="projects-container">
      <ParallaxLayer sticky={{ start: 2, end: 3 }}>
        <div className="project-description">
          <h1>Highlights</h1>
          <h2>React, Django REST Framework, Heroku</h2>
          <p>
            A social media platform designed to cultivate gratitude and
            positivity in everyday life. Inspired by the principles of the Five
            Minute Journal, the platform provides users with a space to share
            the highlights of their day and connect with others in a supportive
            online community.
          </p>
        </div>
      </ParallaxLayer>
      <ParallaxLayer>
        <Image
          src={highlights_mobile}
          alt="mobile view of the highlights site"
        />
      </ParallaxLayer>
      <ParallaxLayer>
        <Image
          src={highlights_tablet}
          alt="tablet view of the highlights site"
        />
      </ParallaxLayer>
      <ParallaxLayer>
        <Image
          src={highlights_laptop}
          alt="laptop view of the highlights site"
        />
      </ParallaxLayer>
    </div>
  );
};

export default Projects;
