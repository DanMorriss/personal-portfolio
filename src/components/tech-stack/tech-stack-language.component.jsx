import Image from "react-bootstrap/Image";
import Tippy from "@tippyjs/react";

import "./tech-stack.styles.css";

const TechStackLanguage = ({ framework, logo }) => {
  return (
    <Tippy content={framework} animation="scale">
      <Image src={logo} alt={`${framework} logo`} />
    </Tippy>
  );
};

export default TechStackLanguage;
