import React, { useState } from 'react';
import './style.css';
import { useSpring, animated } from 'react-spring';
export default function App() {
  const [showing, setShowing] = useState(false);
  const props = useSpring({
    to: {
      opacity: showing ? 1 : 0,
    },
    from: {
      opacity: 0,
      transition: '10s',
    },
  });
  return (
    <div>
      <animated.div style={props}>I will fade in</animated.div>
      <button onClick={() => setShowing((value) => !value)}>Toggle</button>
    </div>
  );
}
