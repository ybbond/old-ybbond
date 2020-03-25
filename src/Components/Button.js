// @flow
import styled, {type StyledComponent} from 'styled-components';
import {colors} from '../Theme/colors';

type ButtonProps = {
  onClick: () => void,
};

const Button: StyledComponent<ButtonProps, {}, {}> = styled.button`
  background-color: ${colors.transparent};
  border-color: ${colors.transparent};
  border-width: 0;
  cursor: pointer;
  font-size: 1em;
  padding: 0;

  &::-moz-focus-inner {
    border: 0;
  }
`;

export default Button;
