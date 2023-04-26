import React from "react";
import React, { useState } from 'react';

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  
  const handleClick = () => {
    setShowParagraph(true);
  };
  
  return (
    <div>
      <button onClick={handleClick}>Afficher le paragraphe</button>
      {showParagraph && <p>Voici le paragraphe que vous avez demandé !</p>}
    </div>
  );
}

export default App;