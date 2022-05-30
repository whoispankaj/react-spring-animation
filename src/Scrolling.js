import React, { useState } from 'react';
import { useSpring, animated, config } from 'react-spring';

export default function Scrolling() {
  const [flip, setFlip] = useState(false);
  const words = ['We', 'came.', 'We', 'saw.', 'We', 'kicked', 'its', 'ass.'];
  const { scroll } = useSpring({
    scroll: (words.length - 1) * 50,
    delay: 200,
    reverse: flip,
    reset: true,
    from: {
      scroll: 0,
    },
    onRest: () => setFlip(!flip),
    config: config.molasses,
  });
  return (
    <animated.div
      style={{
        position: 'relative',
        width: '100%',
        height: 60,
        overflow: 'auto',
        fontSize: '2em',
      }}
      scrollTop={scroll}
    >
      {words.map((word, i) => (
        <div
          key={`${word}-${i}`}
          style={{ width: '100%', height: 50, textAlign: 'center' }}
        >
          {word}
        </div>
      ))}
    </animated.div>
  );
}
