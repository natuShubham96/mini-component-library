/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const ProgressBar = ({ value, size }) => {
  let Component = null;
  switch(size) {
    case 'small' : Component = SmallWrapper;
    break;
    case 'medium' : Component = MediumWrapper;
    break;
    case 'large' : Component = LargeWrapper;
    break;
  }
  return <Component>
    <Indicator value={value} />
  </Component>;
};

const Wrapper = styled.div`
width: 370px;
background-color: ${COLORS.transparentGray15};
border-radius: 4px;
box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
overflow: hidden;
`

const SmallWrapper = styled(Wrapper)`
height: 8px;
`

const MediumWrapper = styled(Wrapper)`
height: 12px;
`

const LargeWrapper = styled(Wrapper)`
height: 24px;
border-radius: 8px;
padding-left: 4px;
padding-right: 4px;
`

const Indicator = styled.div`
height: inherit;
width: ${props => props.value + '%'};
background-color: ${COLORS.primary};
border-radius: inherit;
border-top-right-radius: ${props => props.value===100? 'inherit' : 0};
border-bottom-right-radius: ${props => props.value===100? 'inherit' : 0};
`

export default ProgressBar;
