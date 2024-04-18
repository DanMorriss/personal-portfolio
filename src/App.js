import "./app.styles.scss";
import LandingDesktop from "./pages/landing-desktop";

function App() {
  return (
    <div className="App">
      <LandingDesktop />
      {/* <Parallax pages={3}>
        <ParallaxLayer offset={0} speed={0.5}>
          {" "}
          <Hero />
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={1.5}>
          {" "}
          <TechStack />
        </ParallaxLayer>
        <ParallaxLayer offset={2.1} speed={2.5}>
          {" "}
          <Projects />
        </ParallaxLayer>
      </Parallax>*/}
    </div>
  );
}

export default App;
