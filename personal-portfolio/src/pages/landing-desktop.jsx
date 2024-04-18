import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Image from "react-bootstrap/Image";

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
              <ParallaxLayer offset={1} speed={0.5}>
                <Image
                  src={python_logo}
                  alt="python logo"
                  className="python-logo"
                />
              </ParallaxLayer>
            </div>
            <div className="techStackImage">
              <ParallaxLayer offset={1.5} speed={0.2}>
                <Image
                  src={django_logo}
                  alt="django logo"
                  className="django-logo"
                />
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
                <Image src={html_logo} alt="html logo" className="html-logo" />
              </ParallaxLayer>
            </div>
            <div className="techStackImage react-logo">
              <ParallaxLayer offset={1} speed={0.3}>
                <Image
                  src={react_logo}
                  alt="react logo"
                  className="react-logo"
                />
              </ParallaxLayer>
            </div>
            <div className="techStackImage django-logo">
              <ParallaxLayer offset={1.5} speed={0.1}>
                <Image src={css_logo} alt="css logo" className="css-logo" />
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
                <Image src={git_logo} alt="git logo" className="git-logo" />
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
        <ParallaxLayer sticky={{ start: 0.7, end: 1.2 }}>
          <div className="about-container">
            <div className="about-card">
              <div>
                <Image src={dan_image} roundedCircle className="dan-image" />
                <div className="links-container">
                  <a
                    href="https://github.com/danmorriss"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-brands fa-github"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/morrissdaniel/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                </div>
              </div>

              <div>
                <p>
                  Hey, I'm Dan, a full-stack developer with 2 years experience
                  building dynamic, scalable websites. I enjoy using React for
                  the frontend and Django REST Framework for the backend.
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

        {/* Projects Section */}
        {/* Highlights */}

        <ParallaxLayer offset={3} speed={3.7}>
          <Image
            src={highlights_mobile}
            alt="mobile view of the highlights site"
            className="mobile-mockup"
          />
        </ParallaxLayer>

        <ParallaxLayer offset={3} speed={0.9}>
          <Image
            src={highlights_tablet}
            alt="tablet view of the highlights site"
            className="tablet-mockup"
          />
        </ParallaxLayer>

        <ParallaxLayer offset={3} speed={1.3}>
          <Image
            src={highlights_laptop}
            alt="laptop view of the highlights site"
            className="laptop-mockup"
          />
        </ParallaxLayer>

        <ParallaxLayer offset={3} speed={2.7}>
          <Image
            src={highlights_desktop}
            alt="desktop view of the highlights site"
            className="desktop-mockup"
          />
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: 2.5, end: 3 }}>
          <div className="project-description">
            <h1>Highlights</h1>
            <h2>Social Network</h2>
            <p>
              A photo sharing social media platform. Inspired by the principles
              of the Five Minute Journal, the platform provides users with a
              space to share the highlights of their day and connect with other.
            </p>
            <div className="project-tech-stack">
              <Image src={javascript_logo} alt="javascript logo" />
              <Image src={react_logo} alt="react logo" className="logo-small" />
              <Image src={rest_logo} alt="django rest framework logo" />
              <Image src={bootstrap_logo} alt="bootstrap logo" />
              <Image src={cloudinary_logo} alt="cloudinary logo" />
              <Image src={heroku_logo} alt="heroku logo" />
            </div>
          </div>
        </ParallaxLayer>

        {/* Nick's Barbershop */}

        <ParallaxLayer offset={4.7} speed={3.7}>
          <Image
            src={barbershop_mobile}
            alt="mobile view of the barbershop site"
            className="mobile-mockup"
          />
        </ParallaxLayer>

        <ParallaxLayer offset={4.7} speed={0.9}>
          <Image
            src={barbershop_tablet}
            alt="tablet view of the barbershop site"
            className="tablet-mockup"
          />
        </ParallaxLayer>

        <ParallaxLayer offset={4.7} speed={1.3}>
          <Image
            src={barbershop_laptop}
            alt="laptop view of the barbershop site"
            className="laptop-mockup"
          />
        </ParallaxLayer>

        <ParallaxLayer offset={4.7} speed={2.7}>
          <Image
            src={barbershop_desktop}
            alt="desktop view of the barbershop site"
            className="desktop-mockup"
          />
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: 4.1, end: 4.4 }}>
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
              <Image src={python_logo} alt="python logo" />
              <Image src={django_logo} alt="django logo" />
              <Image src={postgresql_logo} alt="postgresql logo" />
              <Image src={bootstrap_logo} alt="bootstrap logo" />
              <Image src={heroku_logo} alt="heroku logo" />
              <Image src={cloudinary_logo} alt="cloudinary logo" />
            </div>
          </div>
        </ParallaxLayer>

        {/* Retro Mashup Mayhem */}

        <ParallaxLayer offset={6.2} speed={0.3}>
          <Image
            src={retro_mashup_mayhem_laptop}
            alt="laptop view of retro mashup mayhem"
            className="retro-laptop-mockup"
          />
        </ParallaxLayer>

        <ParallaxLayer offset={6.2} speed={0.6}>
          <Image
            src={retro_mashup_mayhem_desktop}
            alt="desktop view of retro mashup mayhem"
            className="retro-desktop-mockup"
          />
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: 5.7, end: 6 }}>
          <div className="project-description">
            <h1>Retro Mashup Mayhem</h1>
            <h2>Classic Inspired Platform Game</h2>
            <p>
              The pixel art style, synthesized sound effects, and challenging
              game-play harken back to the golden age of arcade games. Engaging
              game mechanics, a quest for lost heroes and a trophy collection
              offer players an authentic and thrilling experience.
            </p>
            <div className="project-tech-stack">
              <Image src={html_logo} alt="html logo" />
              <Image src={css_logo} alt="css logo" />
              <Image src={javascript_logo} alt="javascript logo" />
              <Image src={kaboom_logo} alt="kaboom logo" />
            </div>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default LandingDesktop;
