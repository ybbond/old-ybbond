// @flow
import React from 'react';
import {useHistory} from 'react-router';
import styled, {type StyledComponent} from 'styled-components';
import theme from 'styled-theming';

import {colors} from '../Theme/colors';

const linkColor = theme('mode', {
  light: colors.linkDark,
  dark: colors.linkLight,
});

type LinkProps = {to: string, children: React$Node};

const LinkBase: StyledComponent<{}, {}, {}> = styled.a`
  color: ${linkColor};
  cursor: pointer;
  text-decoration: underline solid ${linkColor};

  &:hover {
    color: ${colors.orange};
    text-decoration: underline solid ${colors.orange};
  }
`;

const Link = ({children, to, ...props}: LinkProps) => {
  const history = useHistory();
  const isExternal = to[0] !== '/';
  const handleClick = () => {
    history.push(to);
  };
  return isExternal ? (
    <LinkBase {...props} target="_blank" rel="noopener noreferrer" href={to}>
      {children}
    </LinkBase>
  ) : (
    <LinkBase as="span" onClick={handleClick}>
      {children}
    </LinkBase>
  );
};

export default Link;
