import React from 'react';
import { StaggeredMotion, spring } from 'react-motion';

const AnimatedSquares = () => (
  <StaggeredMotion
    defaultStyles={[{ h: 0 }, { h: 0 }, { h: 0 }]}
    styles={prevInterpolatedStyles => prevInterpolatedStyles.map((_, ii) => (ii === 0
      ? { h: spring(100) }
      : { h: spring(prevInterpolatedStyles[ii - 1].h) }))}
  >
    {interpolatingStypes => (
      <div>
        {interpolatingStypes.map((style, i) => <div key={i} style={{ border: '1px solid', height: style.h }} />)}
      </div>
    )}
  </StaggeredMotion>
);

export default AnimatedSquares;
