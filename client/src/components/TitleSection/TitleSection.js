import React from "react";
import "./TitleSection.css";

function TitleSection({ text, emoji }) {
  return (
    <div className="title">
      <div>
        <h5>{text}</h5>
      </div>
      <div className="emoji-container">
        {emoji.map((emojiConfig, i) => {
          return (
            <span key={i} role="img" aria-label={emojiConfig.name}>
              {emojiConfig.val}
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default TitleSection;
