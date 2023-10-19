// This is not used for now, will be used in future for some secret. The code is written
// by ChatGPT from start to finish.

// Example:
// <BoldLetters
//   html="It's a sentence that does'n make real sense to anybody."
//   word="secret"
//   onClick={() => { console.log('You found a secret'); }
// />
import React, { useState } from 'react';

type HighlightWordProps = {
  html: string;
  word: string;
  onClick?: (event: React.MouseEvent) => void;
};

const HighlightWord: React.FC<HighlightWordProps> = ({ html, word, onClick }) => {
  let index = word.length - 1;
  let insideTag = false;
  let components: (JSX.Element | string)[] = [];
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  for (let i = html.length - 1; i >= 0; i--) {
    if (html[i] === '>') {
      insideTag = true;
      continue;
    }
    if (html[i] === '<') {
      insideTag = false;
      continue;
    }

    if (!insideTag) {
      if (html[i] === word[index]) {
        components.unshift(
          <b
            key={i}
            onClick={onClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
              display: 'inline-block',
              transform: isHovered ? 'translate(0, -1px) scale(1.7)' : 'scale(1)',
              transition: 'transform 0.2s ease-in-out',
              cursor: isHovered ? 'help' : 'initial',
            }}
          >
            {html[i]}
          </b>,
        );
        index--;
      } else {
        components.unshift(html[i]);
      }
    } else {
      components.unshift(html[i]);
    }

    if (index < 0) {
      break;
    }
  }

  return <>{components}</>;
};

export default HighlightWord;
