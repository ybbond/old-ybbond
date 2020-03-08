// @flow
import styled, {type StyledComponent} from 'styled-components';
import theme from 'styled-theming';

import {colors} from '../Theme/colors';

const linkColor = theme('mode', {
  light: colors.linkDark,
  dark: colors.linkLight,
});

type LinkProps = {} & HTMLAnchorElement;

const LinkBase: StyledComponent<LinkProps, {}, {}> = styled.a`
  color: ${linkColor};
  text-decoration: underline solid ${linkColor};
`;

export default LinkBase;
