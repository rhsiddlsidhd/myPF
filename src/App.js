import { useEffect, useRef} from "react";
import "./App.css";
import Header from "./Layout/Header";
import {  useInView } from "framer-motion";

import IntroSection from "./components/sections/IntroSection";
import AboutMe from "./components/sections/AboutMe";

function App() {
  const container = useRef(null);

  const isInview = useInView(container, {
    initialInView: true,
    threshold: 0.5,
  });

  useEffect(() => {
    if (isInview) {
      console.log(container.current.id);
    }
  }, [isInview]);

  return (
    <div className="w-full h-fit bg-regal-black">
      <Header />
      <IntroSection container={container} />
      <AboutMe container={container} />
    </div>
  );
}

export default App;
