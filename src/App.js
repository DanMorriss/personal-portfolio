import "./app.styles.scss";
import LandingDesktop from "./pages/landing-desktop";
import LandingMobile from "./pages/landing-mobile";

function App() {
  return (
    <div className="App">
      <LandingDesktop className="d-none d-md-block" />
      {/* <LandingMobile className="d-md-none" /> */}
    </div>
  );
}

export default App;
