import React from 'react';
import CSSTransitionGroup from 'react-addons-css-transition-group';


import './Transition.css';

const Transition = () => (
  <CSSTransitionGroup
    transitionName="fade"
    transitionAppear
    transitionAppearTimeout={500}
    transitionEnter={false}
    transitionLeave={false}
  >
    <h1>Hello React</h1>
  </CSSTransitionGroup>
);
export default Transition;
