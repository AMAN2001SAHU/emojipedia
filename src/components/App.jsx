import React from "react";
import Card from "./Card";
import Emoji from "../emojipedia";

function createCard(emoji) {
  return (
    <Card
      key={emoji.id}
      emoji={emoji.emoji}
      name={emoji.name}
      meaning={emoji.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{Emoji.map(createCard)}</dl>
    </div>
  );
}

export default App;
