import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Image from "react-bootstrap/Image";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";

import "./landing-mobile.styles.css";

import DanCV from "../public/DanMorrissFullStackDeveloperCV.pdf";

import dan_image from "../public/images/danmorriss-image.jpg";
import html_logo from "../public/images/html-logo.png";
import css_logo from "../public/images/css-logo.png";
import javascript_logo from "../public/images/javascript-logo.png";
import python_logo from "../public/images/python-logo.png";
import react_logo from "../public/images/react-logo.png";
import django_logo from "../public/images/django-logo.png";
import rest_logo from "../public/images/rest-logo.png";
import postgresql_logo from "../public/images/postgresql-logo.png";
import bootstrap_logo from "../public/images/bootstrap-logo.png";
import git_logo from "../public/images/git-logo.png";
import cloudinary_logo from "../public/images/cloudinary-logo.png";
import heroku_logo from "../public/images/heroku-logo.png";
import kaboom_logo from "../public/images/kaboom-logo.png";
import highlights_mobile from "../public/images/projects/highlights-mobile.png";
import highlights_tablet from "../public/images/projects/highlights-tablet.png";
import highlights_laptop from "../public/images/projects/highlights-laptop.png";
import highlights_desktop from "../public/images/projects/highlights-desktop.png";
import barbershop_mobile from "../public/images/projects/barbershop-mobile.png";
import barbershop_tablet from "../public/images/projects/barbershop-tablet.png";
import barbershop_laptop from "../public/images/projects/barbershop-laptop.png";
import barbershop_desktop from "../public/images/projects/barbershop-desktop.png";
import retro_mashup_mayhem_laptop from "../public/images/projects/retro-mashup-mayhem-laptop.png";
import retro_mashup_mayhem_desktop from "../public/images/projects/retro-mashup-mayhem-desktop.png";
import mentool_mobile from "../public/images/projects/mentool-mobile.png";
import mentool_tablet from "../public/images/projects/mentool-tablet.png";
import mentool_laptop from "../public/images/projects/mentool-laptop.png";
import mentool_desktop from "../public/images/projects/mentool-desktop.png";
import { Button } from "react-bootstrap";

function LandingMobile() {
  return (
    <div className="landing-mobile">
      <Parallax pages={12}>
        {/* Hero Section */}
        <div className="hero-section-sm">
          <ParallaxLayer offset={0.2} speed={0.5}>
            <h1>Dan Morriss</h1>
          </ParallaxLayer>
          <ParallaxLayer offset={0.5} speed={1.5}>
            <h2>
              <span className="poppins">{"<"}</span> Full Stack Developer{" "}
              <span className="poppins">{"/>"}</span>
            </h2>
          </ParallaxLayer>
        </div>

        {/* Tech Stack Images */}
        <div className="techStackImage-sm">
          <ParallaxLayer offset={0.99} speed={1.1}>
            <Image
              src={python_logo}
              alt="python logo"
              className="python-logo techStackImage-sm"
            />
          </ParallaxLayer>
        </div>
        <div className="techStackImage-sm">
          <ParallaxLayer offset={0.99} speed={0.5}>
            <Image
              src={django_logo}
              alt="django logo"
              className="django-logo techStackImage-sm"
            />
          </ParallaxLayer>
        </div>
        <div className="techStackImage-sm">
          <ParallaxLayer offset={0.99} speed={1.4}>
            <Image
              src={html_logo}
              alt="html logo"
              className="html-logo techStackImage-sm"
            />
          </ParallaxLayer>
        </div>
        <div className="techStackImage-sm">
          <ParallaxLayer offset={0.99} speed={0.8}>
            <Image
              src={javascript_logo}
              alt="javascript logo"
              className="javascript-logo techStackImage-sm"
            />
          </ParallaxLayer>
        </div>
        <div className="techStackImage-sm">
          <ParallaxLayer offset={0.99} speed={0.2}>
            <Image
              src={react_logo}
              alt="react logo"
              className="react-logo techStackImage-sm"
            />
          </ParallaxLayer>
        </div>
        <div className="techStackImage-sm">
          <ParallaxLayer offset={0.99} speed={0.3}>
            <Image
              src={css_logo}
              alt="css logo"
              className="css-logo techStackImage-sm"
            />
          </ParallaxLayer>
        </div>
        <div className="techStackImage-sm">
          <ParallaxLayer offset={0.99} speed={0.1}>
            <Image
              src={rest_logo}
              alt="django rest framework logo"
              className="rest-logo techStackImage-sm"
            />
          </ParallaxLayer>
        </div>
        <div className="techStackImage-sm">
          <ParallaxLayer offset={0.99} speed={0.6}>
            <Image
              src={git_logo}
              alt="git logo"
              className="git-logo techStackImage-sm"
            />
          </ParallaxLayer>
        </div>
        <div className="techStackImage-sm">
          <ParallaxLayer offset={0.99} speed={0.7}>
            <Image
              src={bootstrap_logo}
              alt="bootstrap logo"
              className="bootstrap-logo techStackImage-sm"
            />
          </ParallaxLayer>
        </div>
        <div className="techStackImage-sm">
          <ParallaxLayer offset={0.99} speed={0.3}>
            <Image
              src={postgresql_logo}
              alt="postgresql logo"
              className="postgresql-logo techStackImage-sm"
            />
          </ParallaxLayer>
        </div>

        {/* About Section */}

        <ParallaxLayer offset={1} speed={1}>
          <div className="about-container-sm">
            <Image
              src={dan_image}
              roundedCircle
              className="dan-image-sm mb-3 "
              alt="avatar image of Dan"
            />

            <div className="links-container-sm mb-3">
              <a
                href="https://github.com/danmorriss"
                target="_blank"
                rel="noreferrer"
                aria-label="github link"
              >
                <i className="fa-brands fa-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/morrissdaniel/"
                target="_blank"
                rel="noreferrer"
                aria-label="linkedin link"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>

              <div className="contact-buttons-sm mt-3 ">
                <Button
                  className="contact-button-sm"
                  href="mailto:danielmorriss1@gmail.com"
                >
                  CONTACT <i class="fa-solid fa-arrow-right"></i>
                </Button>
                <Button className="cv-button-sm" href={DanCV} target="_blank">
                  <i class="fa-solid fa-file-arrow-down"></i> CV
                </Button>
              </div>
            </div>

            <div className="about-text-sm">
              <p>
                Hey, I'm Dan, a Full Stack Developer with a passion for
                problem-solving and continuous learning. My journey into the
                world of tech began after years as a touring musician and
                teacher, where I honed my skills in web development by crafting
                websites for bands and local businesses.
              </p>
              <p>
                In 2023, I further solidified my expertise by completing a
                diploma in Full Stack Software Development with The Code
                Institute. This comprehensive program equipped me with the
                technical skills to build dynamic, scalable websites while
                leveraging my background in creativity and adaptability.
              </p>
            </div>

            {/* <div className="tech-stack-images-sm">
              <div className="tech-stack-images-sub-container-sm">
                <div className="techStackImage-sm">
                  <Image
                    src={html_logo}
                    alt="html logo"
                    className="html-logo"
                  />
                </div>
                <div className="techStackImage-sm">
                  <Image src={css_logo} alt="css logo" className="css-logo" />
                </div>
                <div className="techStackImage-sm">
                  <Image
                    src={javascript_logo}
                    alt="javascript logo"
                    className="javascript-logo"
                  />
                </div>
                <div className="techStackImage-sm">
                  <Image
                    src={python_logo}
                    alt="python logo"
                    className="python-logo"
                  />
                </div>
                <div className="techStackImage-sm">
                  <Image
                    src={react_logo}
                    alt="react logo"
                    className="react-logo"
                  />
                </div>
              </div>
              <div className="tech-stack-images-sub-container-sm">
                <div className="techStackImage-sm">
                  <Image
                    src={django_logo}
                    alt="django logo"
                    className="django-logo"
                  />
                </div>
                <div className="techStackImage-sm">
                  <Image
                    src={rest_logo}
                    alt="django rest framework logo"
                    className="rest-logo"
                  />
                </div>
                <div className="techStackImage-sm">
                  <Image src={git_logo} alt="git logo" className="git-logo" />
                </div>
                <div className="techStackImage-sm">
                  <Image
                    src={bootstrap_logo}
                    alt="bootstrap logo"
                    className="bootstrap-logo"
                  />
                </div>
                <div className="techStackImage-sm">
                  <Image
                    src={postgresql_logo}
                    alt="postgresql logo"
                    className="postgresql-logo"
                  />
                </div>
              </div>
            </div> */}
          </div>
        </ParallaxLayer>

        {/* PROJECTS */}
        {/* Highlights */}
        <ParallaxLayer sticky={{ start: 3, end: 4.2 }}>
          <div className="project-title-sm">
            <h1>Highlights</h1>
            <h2>Social Network</h2>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={3.3} speed={0.3}>
          <div className="project-description-sm">
            <p>
              A photo sharing social media platform. Inspired by the principles
              of the Five Minute Journal, the platform provides users with a
              space to share the highlights of their day and connect with other.
            </p>
            <div className="project-tech-stack-sm">
              <Image src={javascript_logo} alt="javascript logo" />

              <Image src={react_logo} alt="react logo" className="logo-small" />

              <Image src={rest_logo} alt="django rest framework logo" />

              <Image src={postgresql_logo} alt="postgresql logo" />

              <Image src={bootstrap_logo} alt="bootstrap logo" />

              <Image src={cloudinary_logo} alt="cloudinary logo" />

              <Image src={heroku_logo} alt="heroku logo" />
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={4} speed={0.1}>
          <Image
            src={highlights_mobile}
            alt="mobile view of the highlights site"
            className="mobile-mockup-sm"
          />
        </ParallaxLayer>

        {/* <Image
          src={highlights_tablet}
          alt="tablet view of the highlights site"
          className="tablet-mockup-sm"
        />

        <Image
          src={highlights_laptop}
          alt="laptop view of the highlights site"
          className="laptop-mockup-sm"
        />

        <Image
          src={highlights_desktop}
          alt="desktop view of the highlights site"
          className="desktop-mockup-sm"
        /> */}

        {/* Nick's Barbershop */}

        <ParallaxLayer sticky={{ start: 5, end: 6.2 }}>
          <div className="project-title-sm">
            <h1>Nick's Barbershop</h1>
            <h2>Website & Booking System</h2>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={5.5} speed={0.3}>
          <div className="project-description-sm">
            <p>
              A website with a booking system that allows customers to book,
              edit and cancel appointments with email conformation. Including an
              admin panel for barbers to manage appointments and contact
              customers.
            </p>
            <div className="project-tech-stack-sm">
              <Tippy content="Python" animation="scale">
                <Image src={python_logo} alt="python logo" />
              </Tippy>
              <Tippy content="Django" animation="scale">
                <Image src={django_logo} alt="django logo" />
              </Tippy>
              <Tippy content="PostgreSQL" animation="scale">
                <Image src={postgresql_logo} alt="postgresql logo" />
              </Tippy>
              <Tippy content="Bootstrap" animation="scale">
                <Image src={bootstrap_logo} alt="bootstrap logo" />
              </Tippy>
              <Tippy content="Cloudinary" animation="scale">
                <Image src={heroku_logo} alt="heroku logo" />
              </Tippy>
              <Tippy content="Heroku" animation="scale">
                <Image src={cloudinary_logo} alt="cloudinary logo" />
              </Tippy>
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={6.1} speed={0.1}>
          <Image
            src={barbershop_mobile}
            alt="mobile view of the barbershop site"
            className="mobile-mockup-sm"
          />
        </ParallaxLayer>
        {/* <ParallaxLayer offset={5.5} speed={1}>
          <Image
            src={barbershop_tablet}
            alt="tablet view of the barbershop site"
            className="tablet-mockup-sm"
          />
        </ParallaxLayer>
        <ParallaxLayer offset={5.7} speed={1}>
          <Image
            src={barbershop_laptop}
            alt="laptop view of the barbershop site"
            className="laptop-mockup-sm"
          />
        </ParallaxLayer>
        <ParallaxLayer offset={5.9} speed={1}>
          <Image
            src={barbershop_desktop}
            alt="desktop view of the barbershop site"
            className="desktop-mockup-sm"
          />
        </ParallaxLayer> */}

        {/* Retro Mashup Mayhem */}
        <ParallaxLayer sticky={{ start: 7.2, end: 8 }}>
          <div className="project-title-sm">
            <h1>Retro Mashup Mayhem</h1>
            <h2>Classic Platform Game</h2>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={7.7} speed={1}>
          <div className="project-description-sm">
            <p>
              The pixel art style, synthesized sound effects, and challenging
              game-play harken back to the golden age of arcade games. Engaging
              game mechanics, a quest for lost heroes and a trophy collection
              offer players an authentic and thrilling experience.
            </p>
            <div className="project-tech-stack-sm">
              <Tippy content="HTML" animation="scale">
                <Image src={html_logo} alt="html logo" />
              </Tippy>
              <Tippy content="CSS" animation="scale">
                <Image src={css_logo} alt="css logo" />
              </Tippy>
              <Tippy content="JavaScript" animation="scale">
                <Image src={javascript_logo} alt="javascript logo" />
              </Tippy>
              <Tippy content="Kaboom.js" animation="scale">
                <Image src={kaboom_logo} alt="kaboom logo" />
              </Tippy>
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={8.1} speed={0.1}>
          <Image
            src={retro_mashup_mayhem_laptop}
            alt="laptop view of retro mashup mayhem"
            className="retro-laptop-mockup-sm"
          />
        </ParallaxLayer>
        {/* <ParallaxLayer offset={7.5} speed={1}>
          <Image
            src={retro_mashup_mayhem_desktop}
            alt="desktop view of retro mashup mayhem"
            className="retro-desktop-mockup-sm"
          />
        </ParallaxLayer> */}

        {/* MenTool */}
        <ParallaxLayer sticky={{ start: 9, end: 10 }}>
          <div className="project-title-sm">
            <h1>MenTool</h1>
            <h2>Mood Tracking App</h2>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={9.2} speed={1}>
          <div className="project-description-sm">
            <p>
              A mood tracking app built with Python and Django as part of a
              hackathon at Soda Social. The app is designed to support men's
              mental health and allows users to track their mood and get support
              when they register low moods.
            </p>
            <div className="project-tech-stack-sm">
              <Tippy content="Python" animation="scale">
                <Image src={python_logo} alt="python logo" />
              </Tippy>
              <Tippy content="Django" animation="scale">
                <Image src={django_logo} alt="django logo" />
              </Tippy>
              <Tippy content="PostgreSQL" animation="scale">
                <Image src={postgresql_logo} alt="postgresql logo" />
              </Tippy>
              <Tippy content="Bootstrap" animation="scale">
                <Image src={bootstrap_logo} alt="bootstrap logo" />
              </Tippy>
              <Tippy content="Cloudinary" animation="scale">
                <Image src={heroku_logo} alt="heroku logo" />
              </Tippy>
              <Tippy content="Heroku" animation="scale">
                <Image src={cloudinary_logo} alt="cloudinary logo" />
              </Tippy>
            </div>
          </div>
        </ParallaxLayer>
        {/* <ParallaxLayer offset={9} speed={1}>
          <Image
            src={mentool_mobile}
            alt="mobile view of the mentool app"
            className="mobile-mockup-sm"
          />
        </ParallaxLayer> */}
        <ParallaxLayer offset={9.9} speed={0.1}>
          <Image
            src={mentool_tablet}
            alt="tablet view of the mentool app"
            className="tablet-mockup-sm"
          />
        </ParallaxLayer>
        {/* <ParallaxLayer offset={9.7} speed={1}>
          <Image
            src={mentool_laptop}
            alt="laptop view of the mentool app"
            className="laptop-mockup-sm"
          />
        </ParallaxLayer>
        <ParallaxLayer offset={9.8} speed={1}>
          <Image
            src={mentool_desktop}
            alt="desktop view of the mentool app"
            className="desktop-mockup-sm"
          />
        </ParallaxLayer> */}
      </Parallax>
    </div>
  );
}

export default LandingMobile;
