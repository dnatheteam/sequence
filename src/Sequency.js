import styled from 'styled-components';

import { ANIMATION } from './constants';

export { ANIMATION } from './constants';

export const Sequency = styled.div`
  position: relative;
  display: block;
  top: 0;
  left: 0;
  width: ${ props => props.width || '100%'};
  height: ${ props => props.height || '100%' };
  overflow: hidden;
  will-change: background-position;

  background-position: 0 0;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: transparent;
  background-image: url(${props => props.src});

  animation-name: ${ ANIMATION };
  animation-duration: ${ props => props.duration || 1 }ms;
  animation-delay: ${ props => props.delay || 0 }ms;
  animation-iteration-count: ${ props => props.iterations || 'infinite' };
  animation-timing-function: steps(${ props => props.frames || 0 });
  animation-fill-mode: ${ props => props.mode || 'forwards' };
  animation-direction: ${ props => props.direction || 'normal' };

`;
