import Image from "react-bootstrap/Image";
import Tippy from "@tippyjs/react";
import dan_image from "../../public/images/DanMorrissAvatar.jpg";
import Button from "react-bootstrap/Button";

import "./about-dan.styles.css";

import DanMorrissCV from "../../public/DanMorrissFullStackDeveloperCV.pdf";

const AboutDan = () => {
  return (
    <div className="about-container">
      <div className="about-card">
        <div className="avatar-and-links-container">
          <Image
            src={dan_image}
            roundedCircle
            className="dan-image"
            alt="avatar image of Dan"
          />
          <div className="links-container">
            <Tippy content="Github">
              <a
                href="https://github.com/danmorriss"
                target="_blank"
                rel="noreferrer"
                aria-label="github link"
              >
                <i className="fa-brands fa-github flicker-1"></i>
              </a>
            </Tippy>
            <Tippy content="LinkedIn">
              <a
                href="https://www.linkedin.com/in/morrissdaniel/"
                target="_blank"
                rel="noreferrer"
                aria-label="linkedin link"
              >
                <i className="fa-brands fa-linkedin flicker-3"></i>
              </a>
            </Tippy>
          </div>
        </div>

        <div>
          <p>
            Hey, I'm Dan, a Full Stack Developer with a passion for
            problem-solving and continuous learning. My journey into the world
            of tech began after years as a touring musician and teacher, where I
            honed my skills in web development by crafting websites for bands
            and local businesses.
          </p>
          <p>
            In 2023, I further solidified my expertise by completing a diploma
            in Full Stack Software Development with The Code Institute. This
            comprehensive program equipped me with the technical skills to build
            dynamic, scalable websites while leveraging my background in
            creativity and adaptability.
          </p>
          <div className="d-flex">
            <Button
              className="contact-button"
              href="mailto:danielmorriss1@gmail.com"
            >
              CONTACT ME HERE <i className="fa-solid fa-arrow-right"></i>
            </Button>
            <Button className="cv-button" href={DanMorrissCV} target="_blank">
              <i className="fa-solid fa-file-arrow-down"></i> DOWNLOAD CV
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutDan;
