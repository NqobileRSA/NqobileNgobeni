import { useState } from "react";
import "./App.css";
import UImode from "./Mode/UI-mode/UImode";
import SourceCodeMode from "./Mode/SourceCode-mode/SourceCodeMode";
import AOS from "aos";
import "aos/dist/aos.css";
import AnimatedCursor from "react-animated-cursor";
// import { emojiCursor } from "cursor-effects";
// new emojiCursor({ emoji: ["🔥", "🐬", "🦆"] });

AOS.init();

function App() {
  const [codeMode, setCodeMode] = useState(false);

  const toggleMode = () => {
    setCodeMode(!codeMode);
  };

  return (
    <div className="app">
      <AnimatedCursor
        innerSize={8}
        outerSize={55}
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        hasBlendMode={true}
        innerStyle={{
          backgroundColor: "#08fdd8",
        }}
        outerStyle={{
          border: "3px solid #08fdd8",
        }}
      />

      <button onClick={toggleMode} className="mode-toggler">
        {codeMode ? "UI" : "Source"}
      </button>
      {codeMode ? <SourceCodeMode /> : <UImode />}
    </div>
  );
}

export default App;
