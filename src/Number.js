import React, { useState } from 'react';
import { useSpring, animated, config } from 'react-spring';

export default function Number() {
  const [flip, setFlip] = useState(false);
  const { number } = useSpring({
    from: {
      number: 0,
    },
    number: 1,
    reset: true,
    reverse: flip,
    delay: 200,
    config: config.molasses,
    onRest: () => setFlip(!flip),
  });
  return <animated.h1>{number.to((n) => n.toFixed(2))}</animated.h1>;
}
