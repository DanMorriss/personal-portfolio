import Image from "react-bootstrap/Image";
import { ParallaxLayer } from "@react-spring/parallax";

import "./tech-stack.styles.scss";

import dan_image from "../../public/images/danmorriss-image.jpg";
import html_logo from "../../public/images/html-logo.png";
import css_logo from "../../public/images/css-logo.png";
import javascript_logo from "../../public/images/javascript-logo.png";
import python_logo from "../../public/images/python-logo.png";
import react_logo from "../../public/images/react-logo.png";
import django_logo from "../../public/images/django-logo.png";
import rest_logo from "../../public/images/rest-logo.png";
import postgresql_logo from "../../public/images/postgresql-logo.png";
import bootstrap_logo from "../../public/images/bootstrap-logo.png";
import git_logo from "../../public/images/git-logo.png";

const TechStack = () => {
  return (
    <>
      <div className="tech-stack-container">
        <div className="tech-stack-images">
          <div className="techStackImage">
            <ParallaxLayer offset={1} speed={0.5}>
              <Image src={html_logo} alt="html logo" className="html-logo" />
            </ParallaxLayer>
          </div>

          <div className="techStackImage">
            <ParallaxLayer offset={1.5} speed={0.2}>
              <Image src={css_logo} alt="css logo" className="css-logo" />
            </ParallaxLayer>
          </div>

          <div className="techStackImage">
            <ParallaxLayer offset={1.2} speed={0.7}>
              <Image
                src={javascript_logo}
                alt="javascript logo"
                className="javascript-logo"
              />
            </ParallaxLayer>
          </div>

          <div className="techStackImage">
            <ParallaxLayer offset={1.7} speed={0.9}>
              <Image
                src={python_logo}
                alt="python logo"
                className="python-logo"
              />
            </ParallaxLayer>
          </div>

          <div className="techStackImage react-logo">
            <ParallaxLayer offset={1} speed={0.3}>
              <Image src={react_logo} alt="react logo" className="react-logo" />
            </ParallaxLayer>
          </div>

          <div className="techStackImage django-logo">
            <ParallaxLayer offset={1.5} speed={0.1}>
              <Image
                src={django_logo}
                alt="django logo"
                className="django-logo"
              />
            </ParallaxLayer>
          </div>

          <div className="techStackImage rest-logo">
            <ParallaxLayer offset={1.1} speed={0.6}>
              <Image
                src={rest_logo}
                alt="django rest framework logo"
                className="rest-logo"
              />
            </ParallaxLayer>
          </div>

          <div className="techStackImage postgresql-logo">
            <ParallaxLayer offset={1.5} speed={0.4}>
              <Image
                src={postgresql_logo}
                alt="postgresql logo"
                className="postgresql-logo"
              />
            </ParallaxLayer>
          </div>

          <div className="techStackImage bootstrap-logo">
            <ParallaxLayer offset={1.8} speed={0.8}>
              <Image
                src={bootstrap_logo}
                alt="bootstrap logo"
                className="bootstrap-logo"
              />
            </ParallaxLayer>
          </div>

          <div className="techStackImage git-logo">
            <ParallaxLayer offset={1.2} speed={1}>
              <Image src={git_logo} alt="git logo" className="git-logo" />
            </ParallaxLayer>
          </div>
        </div>
      </div>

      <ParallaxLayer sticky={{ start: 0.7, end: 1.2 }}>
        <div className="about-container">
          <div className="about-card">
            <Image src={dan_image} roundedCircle className="dan-image" />
            <div>
              <p>
                Hey, I'm Dan, a full-stack developer with 2 years experience
                building dynamic, scalable websites. I enjoy using React for the
                frontend and Django REST Framework for the backend.
              </p>
              <p>
                Prior to my venture into tech, I was a touring musician and
                teacher building websites on the side for bands. My background
                enhances my development process with creativity and
                adaptability, bridging the worlds of artistry and technology.
              </p>
            </div>
          </div>
        </div>
      </ParallaxLayer>
    </>
  );
};

export default TechStack;
