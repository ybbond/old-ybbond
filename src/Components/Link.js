// @flow
import React from 'react';
import {useHistory, useRouteMatch} from 'react-router';
import styled, {type StyledComponent} from 'styled-components';
import theme from 'styled-theming';

import {colors} from '../Theme/colors';

const linkColor = theme('mode', {
  light: colors.linkDark,
  dark: colors.linkLight,
});

const linkHoverColor = theme('mode', {
  light: colors.brown,
  dark: colors.orange,
});

type LinkProps = {to: string, children: React$Node};

const LinkBase: StyledComponent<{isCurrentRoute?: boolean}, {}, {}> = styled.a`
  color: ${({isCurrentRoute}) => (isCurrentRoute ? linkHoverColor : linkColor)};
  cursor: pointer;
  text-decoration: underline solid
    ${({isCurrentRoute}) => (isCurrentRoute ? linkHoverColor : linkColor)} 0.5px;

  &:hover {
    color: ${linkHoverColor};
    text-decoration: underline solid ${linkHoverColor} 2px;
  }
`;

const Link = ({children, to, ...props}: LinkProps) => {
  const history = useHistory();

  Link.goTo = (to: string) => {
    history.push(to);
  };

  const isExternal = to[0] !== '/';
  if (isExternal) {
    return (
      <LinkBase {...props} target="_blank" rel="noopener noreferrer" href={to}>
        {children}
      </LinkBase>
    );
  }

  const {isExact = false} = useRouteMatch(to) || {};
  const handleClick = () => {
    history.push(to);
  };

  return (
    <LinkBase
      {...props}
      as="span"
      onClick={handleClick}
      isCurrentRoute={isExact}
    >
      {children}
    </LinkBase>
  );
};

export default Link;
