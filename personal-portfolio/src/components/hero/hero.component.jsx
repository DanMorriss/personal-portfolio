import "./hero.styles.scss";
import { ParallaxLayer } from "@react-spring/parallax";

const Hero = () => {
  return (
    <div className="hero-section">
      <ParallaxLayer offset={0.2} speed={0.4}>
        <h1>Dan Morriss</h1>
      </ParallaxLayer>
      <ParallaxLayer offset={0.5} speed={1.5}>
        <h2>{"< Full Stack Developer />"}</h2>
      </ParallaxLayer>
    </div>
  );
};
export default Hero;
