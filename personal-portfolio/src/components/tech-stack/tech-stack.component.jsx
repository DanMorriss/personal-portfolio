import Image from "react-bootstrap/Image";

import "./tech-stack.styles.scss";
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
    <div className="tech-stack-container">
      <div className="tech-stack-images">
        <div className="techStackImage">
          <Image src={html_logo} alt="html logo" />
        </div>
        <div className="techStackImage">
          <Image src={css_logo} alt="css logo" />
        </div>
        <div className="techStackImage">
          <Image src={javascript_logo} alt="javascript logo" />
        </div>
        <div className="techStackImage">
          <Image src={python_logo} alt="python logo" />
        </div>
        <div className="techStackImage">
          <Image src={react_logo} alt="react logo" />
        </div>
        <div className="techStackImage">
          <Image src={django_logo} alt="django logo" />
        </div>
        <div className="techStackImage">
          <Image src={rest_logo} alt="django res framework logo" />
        </div>
        <div className="techStackImage">
          <Image src={postgresql_logo} alt="postgresql logo" />
        </div>
        <div className="techStackImage">
          <Image src={bootstrap_logo} alt="bootstrap logo" />
        </div>
        <div className="techStackImage">
          <Image src={git_logo} alt="git logo" />
        </div>
      </div>
    </div>
  );
};

export default TechStack;
