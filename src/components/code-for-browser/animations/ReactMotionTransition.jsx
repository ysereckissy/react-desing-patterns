import React from 'react';
import { Motion, spring } from 'react-motion';

const ReactMotionTransition = () => (
  <Motion
    defaultStyle={{ opacity: 0.01 }}
    style={{ opacity: spring(1) }}
  >
    {interpolatingStype => (
      <>
        <h1 style={interpolatingStype}>Hello React Motion!</h1>
        <h5>
          {interpolatingStype.opacity}
        </h5>
      </>
    )}
  </Motion>
);
export default ReactMotionTransition;
