import React, { useState } from 'react';
import { useSpring, config, animated } from 'react-spring';
import './Text.css';

export default function Text() {
  const [flip, setFlip] = useState(false);
  const props = useSpring({
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
      color: 'limegreen',
    },
    reset: true,
    reverse: flip,
    delay: 200,
    config: config.molasses,
    onRest: () => setFlip(!flip),
  });
  return (
    <animated.h1 className="Text" style={props}>
      Hello World
    </animated.h1>
  );
}
