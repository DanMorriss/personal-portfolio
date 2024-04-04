import React from "react";

import Hero from "./components/hero/hero.component";
import Projects from "./components/projects/projects.component";
import TechStack from "./components/tech-stack/tech-stack.component";

function App() {
  return (
    <div className="App">
      <Hero />
      <TechStack />
      <Projects />
    </div>
  );
}

export default App;
