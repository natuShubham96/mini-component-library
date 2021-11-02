import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <DropDown value={value} onChange={onChange}>
      {children}
    </DropDown>
  );
};

const DropDown = styled.select`
height: 43px;
border: none;
background-color: ${COLORS.transparentGray15};
border-radius: 8px;
color: ${COLORS.gray700};
width: max-content;

&:focus {
  border-color: ${COLORS.primary};
}

&:hover {
color: ${COLORS.black};
}

`

export default Select;
