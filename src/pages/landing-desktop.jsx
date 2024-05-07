import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Image from "react-bootstrap/Image";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";

import AboutDan from "../components/about-dan/about-dan.component";
import ProjectDescription from "../components/projects/project-description.component";

import "./landing-desktop.styles.css";

import DanCV from "../public/DanMorrissFullStackDeveloperCV.pdf";
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
import TechStackLanguage from "../components/tech-stack/tech-stack-language.component";

function LandingDesktop() {
  return (
    <div className="landing-desktop">
      <Parallax pages={12}>
        {/* Hero Section */}
        <div className="hero-section">
          <ParallaxLayer offset={0.2} speed={0.4}>
            <h1 className="tracking-in-expand">Dan Morriss</h1>
          </ParallaxLayer>
          <ParallaxLayer offset={0.5} speed={1.5}>
            <h2 className="text-focus-in">
              <span className="poppins">{"<"}</span> Full Stack Developer{" "}
              <span className="poppins">{"/>"}</span>
            </h2>
          </ParallaxLayer>
        </div>

        {/* About Section */}
        <div className="about-container">
          <div className="tech-stack-images">
            {/* Tech Stack Images */}
            <div className="techStackImage">
              <ParallaxLayer offset={1.9} speed={1.1}>
                <Image
                  src={python_logo}
                  alt="python logo"
                  className="python-logo"
                />
              </ParallaxLayer>
            </div>
            <div className="techStackImage">
              <ParallaxLayer offset={2} speed={0.2}>
                <Image
                  src={django_logo}
                  alt="django logo"
                  className="django-logo"
                />
              </ParallaxLayer>
            </div>
            <div className="techStackImage">
              <ParallaxLayer offset={2} speed={1.4}>
                <Image src={html_logo} alt="html logo" className="html-logo" />
              </ParallaxLayer>
            </div>
            <div className="techStackImage">
              <ParallaxLayer offset={1.9} speed={0.8}>
                <Image
                  src={javascript_logo}
                  alt="javascript logo"
                  className="javascript-logo"
                />
              </ParallaxLayer>
            </div>
            <div className="techStackImage">
              <ParallaxLayer offset={2} speed={0.2}>
                <Image
                  src={react_logo}
                  alt="react logo"
                  className="react-logo"
                />
              </ParallaxLayer>
            </div>
            <div className="techStackImage">
              <ParallaxLayer offset={2.4} speed={0.6}>
                <Image src={css_logo} alt="css logo" className="css-logo" />
              </ParallaxLayer>
            </div>
            <div className="techStackImage">
              <ParallaxLayer offset={2} speed={0.1}>
                <Image
                  src={rest_logo}
                  alt="django rest framework logo"
                  className="rest-logo"
                />
              </ParallaxLayer>
            </div>
            <div className="techStackImage">
              <ParallaxLayer offset={2.2} speed={1.6}>
                <Image src={git_logo} alt="git logo" className="git-logo" />
              </ParallaxLayer>
            </div>
            <div className="techStackImage">
              <ParallaxLayer offset={2} speed={0.7}>
                <Image
                  src={bootstrap_logo}
                  alt="bootstrap logo"
                  className="bootstrap-logo"
                />
              </ParallaxLayer>
            </div>
            <div className="techStackImage">
              <ParallaxLayer offset={1.9} speed={0.2}>
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
          <AboutDan />
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
            <a
              href="https://pp5-highlights-a86c2f8f4016.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
              className="project-title-link"
            >
              <h1 className="project-title flicker-1">Highlights</h1>
            </a>
            <h2>Social Network</h2>
            <p>
              A photo sharing social media platform. Inspired by the principles
              of the Five Minute Journal, the platform provides users with a
              space to share the highlights of their day and connect with other.
            </p>
            <div className="project-tech-stack">
              <TechStackLanguage
                framework="JavaScript"
                logo={javascript_logo}
              />
              <TechStackLanguage framework="React" logo={react_logo} />
              <TechStackLanguage framework="Python" logo={python_logo} />
              <TechStackLanguage
                framework="Django REST Framework"
                logo={rest_logo}
              />
              <TechStackLanguage
                framework="PostgreSQL"
                logo={postgresql_logo}
              />
              <TechStackLanguage framework="Bootstrap" logo={bootstrap_logo} />
              <TechStackLanguage
                framework="Cloudinary"
                logo={cloudinary_logo}
              />
              <TechStackLanguage framework="Heroku" logo={heroku_logo} />
              <TechStackLanguage framework="Git" logo={git_logo} />
              <TechStackLanguage framework="HTML" logo={html_logo} />
              <TechStackLanguage framework="CSS" logo={css_logo} />
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
            <a
              href="https://niallsbarbershop-e4e7dc2878db.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
              className="project-title-link"
            >
              <h1 className="project-title flicker-1">Nick's Barbershop</h1>
            </a>
            <h2>Website & Booking System</h2>
            <p>
              A website with a booking system that allows customers to book,
              edit and cancel appointments with email conformation. Including an
              admin panel for barbers to manage appointments and contact
              customers.
            </p>
            <div className="project-tech-stack">
              <TechStackLanguage framework="Python" logo={python_logo} />
              <TechStackLanguage framework="Django" logo={django_logo} />
              <TechStackLanguage
                framework="PostgreSQL"
                logo={postgresql_logo}
              />
              <TechStackLanguage framework="HTML" logo={html_logo} />
              <TechStackLanguage framework="CSS" logo={css_logo} />
              <TechStackLanguage framework="Bootstrap" logo={bootstrap_logo} />
              <TechStackLanguage framework="Git" logo={git_logo} />
              <TechStackLanguage framework="Heroku" logo={heroku_logo} />
              <TechStackLanguage
                framework="Cloudinary"
                logo={cloudinary_logo}
              />
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
            <a
              href="https://retro-mashup-mayhem.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="project-title-link"
            >
              <h1 className="project-title flicker-1">Retro Mashup Mayhem</h1>
            </a>
            <h2>Classic Platform Game</h2>
            <p>
              The pixel art style, synthesized sound effects, and challenging
              game-play harken back to the golden age of arcade games. Engaging
              game mechanics, a quest for lost heroes and a trophy collection
              offer players an authentic and thrilling experience.
            </p>
            <div className="project-tech-stack">
              <TechStackLanguage framework="HTML" logo={html_logo} />
              <TechStackLanguage framework="CSS" logo={css_logo} />
              <TechStackLanguage
                framework="JavaScript"
                logo={javascript_logo}
              />
              <TechStackLanguage framework="Kaboom.js" logo={kaboom_logo} />
              <TechStackLanguage framework="Git" logo={git_logo} />
            </div>
          </div>
        </ParallaxLayer>

        {/* MenTool */}

        <ParallaxLayer offset={9.5} speed={0.4}>
          <Image
            src={mentool_mobile}
            alt="mobile view of the mentool app"
            className="mobile-mockup"
          />
        </ParallaxLayer>

        <ParallaxLayer offset={9.5} speed={1}>
          <Image
            src={mentool_tablet}
            alt="tablet view of the mentool app"
            className="tablet-mockup"
          />
        </ParallaxLayer>

        <ParallaxLayer offset={9.5} speed={1.5}>
          <Image
            src={mentool_laptop}
            alt="laptop view of the mentool app"
            className="laptop-mockup"
          />
        </ParallaxLayer>

        <ParallaxLayer offset={9.5} speed={0.2}>
          <Image
            src={mentool_desktop}
            alt="desktop view of the mentool app"
            className="desktop-mockup"
          />
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: 9, end: 10 }}>
          <div className="project-description">
            <a
              href="https://mentool-2af96fd6f7e7.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
              className="project-title-link"
            >
              <h1 className="project-title flicker-1">MenTool</h1>
            </a>
            <h2>Mood Tracking App</h2>
            <p>
              A mood tracking app built with Python and Django as part of a
              hackathon at Soda Social. The app is designed to support men's
              mental health and allows users to track their mood and get support
              when they register low moods.
            </p>
            <div className="project-tech-stack">
              <TechStackLanguage framework="HTML" logo={html_logo} />
              <TechStackLanguage framework="CSS" logo={css_logo} />
              <TechStackLanguage framework="Python" logo={python_logo} />
              <TechStackLanguage framework="Django" logo={django_logo} />
              <TechStackLanguage
                framework="PostgreSQL"
                logo={postgresql_logo}
              />
              <TechStackLanguage framework="Bootstrap" logo={bootstrap_logo} />
              <TechStackLanguage framework="Git" logo={git_logo} />
              <TechStackLanguage framework="Heroku" logo={heroku_logo} />
              <TechStackLanguage
                framework="Cloudinary"
                logo={cloudinary_logo}
              />
            </div>
          </div>
        </ParallaxLayer>

        {/* Footer */}
        <ParallaxLayer offset={11}>
          <div className="footer">
            <div className="footer-buttons-line">
              <Tippy content="email me">
                <a
                  className="contact-button-footer"
                  href="mailto:danielmorriss1@gmail.com"
                  aria-label="email me link"
                >
                  <i className="fa-solid fa-envelope flicker-1"></i>
                </a>
              </Tippy>
              <Tippy content="download my CV">
                <a
                  className="contact-button-footer"
                  href={DanCV}
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    fill="currentColor"
                    class="bi bi-file-earmark-person-fill flicker-2"
                    viewBox="0 0 16 16"
                  >
                    <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0M9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0m2 5.755V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-.245S4 12 8 12s5 1.755 5 1.755" />
                  </svg>
                </a>
              </Tippy>
            </div>
            <div className="footer-buttons-line-sm">
              <Tippy content="github">
                <a
                  href="https://github.com/danmorriss"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="github link"
                  className="github-link-footer"
                >
                  <i className="fa-brands fa-github flicker-3"></i>
                </a>
              </Tippy>
              <Tippy content="linkedin">
                <a
                  href="https://www.linkedin.com/in/morrissdaniel/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="linkedin link"
                  className="linkedin-link-footer"
                >
                  <i className="fa-brands fa-linkedin flicker-4"></i>
                </a>
              </Tippy>
            </div>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default LandingDesktop;
