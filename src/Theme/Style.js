// @flow
import React from 'react';
import {createGlobalStyle} from 'styled-components';
import {colors} from './colors';

type Props = {
  dark: boolean,
};

const Style = createGlobalStyle`
  html {
      background-color: ${props => (props.dark ? colors.dark : colors.light)};
  }
  &::selection {
    background-color: ${props =>
      props.dark ? colors.darkSelection : colors.lightSelection};
  }
`;

export default React.memo<Props>(Style);
