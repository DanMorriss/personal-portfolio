import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Image from "react-bootstrap/Image";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";

import Hero from "../components/hero/hero.component";
import "./landing-desktop.styles.css";

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

function LandingDesktop() {
  return (
    <div className="App">
      <Parallax pages={8}>
        <Hero />
        {/* About Section */}
        <div className="about-container">
          <div className="tech-stack-images">
            {/* Tech Stack Images */}
            <div className="techStackImage">
              <ParallaxLayer offset={2} speed={1}>
                <Image
                  src={python_logo}
                  alt="python logo"
                  className="python-logo"
                />
              </ParallaxLayer>
            </div>
            <div className="techStackImage">
              <ParallaxLayer offset={2.5} speed={0.9}>
                <Image
                  src={django_logo}
                  alt="django logo"
                  className="django-logo"
                />
              </ParallaxLayer>
            </div>
            <div className="techStackImage">
              <ParallaxLayer offset={2.2} speed={1.5}>
                <Image
                  src={javascript_logo}
                  alt="javascript logo"
                  className="javascript-logo"
                />
              </ParallaxLayer>
            </div>
            <div className="techStackImage">
              <ParallaxLayer offset={2} speed={0.8}>
                <Image src={html_logo} alt="html logo" className="html-logo" />
              </ParallaxLayer>
            </div>
            <div className="techStackImage react-logo">
              <ParallaxLayer offset={2.1} speed={1.7}>
                <Image
                  src={react_logo}
                  alt="react logo"
                  className="react-logo"
                />
              </ParallaxLayer>
            </div>
            <div className="techStackImage django-logo">
              <ParallaxLayer offset={2.5} speed={0.6}>
                <Image src={css_logo} alt="css logo" className="css-logo" />
              </ParallaxLayer>
            </div>
            <div className="techStackImage rest-logo">
              <ParallaxLayer offset={2.1} speed={0.1}>
                <Image
                  src={rest_logo}
                  alt="django rest framework logo"
                  className="rest-logo"
                />
              </ParallaxLayer>
            </div>
            <div className="techStackImage postgresql-logo">
              <ParallaxLayer offset={2.4} speed={1.6}>
                <Image src={git_logo} alt="git logo" className="git-logo" />
              </ParallaxLayer>
            </div>
            <div className="techStackImage bootstrap-logo">
              <ParallaxLayer offset={2.2} speed={0.7}>
                <Image
                  src={bootstrap_logo}
                  alt="bootstrap logo"
                  className="bootstrap-logo"
                />
              </ParallaxLayer>
            </div>
            <div className="techStackImage git-logo">
              <ParallaxLayer offset={2.1} speed={0.2}>
                <Image
                  src={postgresql_logo}
                  alt="postgresql logo"
                  className="postgresql-logo"
                />
              </ParallaxLayer>
            </div>
          </div>
        </div>

        {/* About Card */}
        <ParallaxLayer sticky={{ start: 1, end: 2 }}>
          <div className="about-container">
            <div className="about-card">
              <div>
                <Image
                  src={dan_image}
                  roundedCircle
                  className="dan-image"
                  alt="avatar image of Dan"
                />
                <div className="links-container">
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
                </div>
              </div>

              <div>
                <p>
                  Hey, I'm Dan, a Full Stack Developer with a passion for
                  problem-solving and continuous learning. My journey into the
                  world of tech began after years as a touring musician and
                  teacher, where I honed my skills in web development by
                  crafting websites for bands and local businesses.
                </p>
                <p>
                  In 2023, I further solidified my expertise by completing a
                  diploma in Full Stack Software Development with The Code
                  Institute. This comprehensive program equipped me with the
                  technical prowess to build dynamic, scalable websites while
                  leveraging my background in creativity and adaptability.
                </p>
              </div>
            </div>
          </div>
        </ParallaxLayer>

        {/* Projects Section */}
        {/* Highlights */}

        <ParallaxLayer offset={3.5} speed={0.4}>
          <Image
            src={highlights_mobile}
            alt="mobile view of the highlights site"
            className="mobile-mockup"
          />
        </ParallaxLayer>

        <ParallaxLayer offset={3.5} speed={1}>
          <Image
            src={highlights_tablet}
            alt="tablet view of the highlights site"
            className="tablet-mockup"
          />
        </ParallaxLayer>

        <ParallaxLayer offset={3.5} speed={1.5}>
          <Image
            src={highlights_laptop}
            alt="laptop view of the highlights site"
            className="laptop-mockup"
          />
        </ParallaxLayer>

        <ParallaxLayer offset={3.5} speed={0.2}>
          <Image
            src={highlights_desktop}
            alt="desktop view of the highlights site"
            className="desktop-mockup"
          />
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: 3, end: 4 }}>
          <div className="project-description">
            <h1>Highlights</h1>
            <h2>Social Network</h2>
            <p>
              A photo sharing social media platform. Inspired by the principles
              of the Five Minute Journal, the platform provides users with a
              space to share the highlights of their day and connect with other.
            </p>
            <div className="project-tech-stack">
              <Tippy content="JavaScript" animation="scale">
                <Image src={javascript_logo} alt="javascript logo" />
              </Tippy>
              <Tippy content="React" animation="scale">
                <Image
                  src={react_logo}
                  alt="react logo"
                  className="logo-small"
                />
              </Tippy>
              <Tippy content="Django REST Framework" animation="scale">
                <Image src={rest_logo} alt="django rest framework logo" />
              </Tippy>
              <Tippy content="PostgreSQL" animation="scale">
                <Image src={postgresql_logo} alt="postgresql logo" />
              </Tippy>
              <Tippy content="Bootstrap" animation="scale">
                <Image src={bootstrap_logo} alt="bootstrap logo" />
              </Tippy>
              <Tippy content="Cloudinary" animation="scale">
                <Image src={cloudinary_logo} alt="cloudinary logo" />
              </Tippy>
              <Tippy content="Heroku" animation="scale">
                <Image src={heroku_logo} alt="heroku logo" />
              </Tippy>
            </div>
          </div>
        </ParallaxLayer>

        {/* Nick's Barbershop */}

        <ParallaxLayer offset={5.5} speed={0.4}>
          <Image
            src={barbershop_mobile}
            alt="mobile view of the barbershop site"
            className="mobile-mockup"
          />
        </ParallaxLayer>

        <ParallaxLayer offset={5.5} speed={1}>
          <Image
            src={barbershop_tablet}
            alt="tablet view of the barbershop site"
            className="tablet-mockup"
          />
        </ParallaxLayer>

        <ParallaxLayer offset={5.5} speed={1.5}>
          <Image
            src={barbershop_laptop}
            alt="laptop view of the barbershop site"
            className="laptop-mockup"
          />
        </ParallaxLayer>

        <ParallaxLayer offset={5.5} speed={0.2}>
          <Image
            src={barbershop_desktop}
            alt="desktop view of the barbershop site"
            className="desktop-mockup"
          />
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: 5, end: 6 }}>
          <div className="project-description">
            <h1>Nick's Barbershop</h1>
            <h2>Website & Booking System</h2>
            <p>
              A website with a booking system that allows customers to book,
              edit and cancel appointments with email conformation. Including an
              admin panel for barbers to manage appointments and contact
              customers.
            </p>
            <div className="project-tech-stack">
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

        {/* Retro Mashup Mayhem */}

        <ParallaxLayer offset={7.5} speed={0.3}>
          <Image
            src={retro_mashup_mayhem_laptop}
            alt="laptop view of retro mashup mayhem"
            className="retro-laptop-mockup"
          />
        </ParallaxLayer>

        <ParallaxLayer offset={7.5} speed={0.6}>
          <Image
            src={retro_mashup_mayhem_desktop}
            alt="desktop view of retro mashup mayhem"
            className="retro-desktop-mockup"
          />
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: 7, end: 8 }}>
          <div className="project-description">
            <h1>Retro Mashup Mayhem</h1>
            <h2>Classic Platform Game</h2>
            <p>
              The pixel art style, synthesized sound effects, and challenging
              game-play harken back to the golden age of arcade games. Engaging
              game mechanics, a quest for lost heroes and a trophy collection
              offer players an authentic and thrilling experience.
            </p>
            <div className="project-tech-stack">
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
      </Parallax>
    </div>
  );
}

export default LandingDesktop;
