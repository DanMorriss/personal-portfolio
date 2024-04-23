import "./app.styles.scss";
import LandingDesktop from "./pages/landing-desktop";
import LandingMobile from "./pages/landing-mobile";

function App() {
  return (
    <div className="App">
      <LandingMobile className="landing-mobile" />
      <LandingDesktop className="landing-desktop" />
    </div>
  );
}

export default App;
