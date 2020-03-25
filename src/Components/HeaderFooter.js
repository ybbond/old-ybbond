// @flow
import React from 'react';
import styled from 'styled-components';
import theme from 'styled-theming';

import {Button, Link, Text} from './';
import {colors} from '../Theme/colors';

const borderColor = theme('mode', {
  light: colors.dark,
  dark: colors.light,
});

const Header = styled.header`
  margin-bottom: 30px;
`;

const Footer = styled.footer`
  margin-top: 70px;
  padding: 20px 0;
  border-top: 2px dashed ${borderColor};
`;

type HeaderFooterProps = {
  children: React$Node,
  dark: boolean,
  toggleDark: () => void,
};

const HeaderFooter = ({children, dark, toggleDark}: HeaderFooterProps) => (
  <>
    <Header>
      <Text as="h1">
        Yohanes Bandung Bondowoso{' '}
        <Button
          aria-label="Toggle dark mode, is current mode dark?"
          aria-pressed={dark}
          onClick={toggleDark}
          tabindex="0"
        >
          {dark ? '🌛' : '🌞'}
        </Button>
      </Text>
      <Text>
        <Link aria-label="Go to CV Page" to="/">
          CV
        </Link>{' '}
        -{' '}
        <Link aria-label="Go to page that lists the tools I use" to="/uses">
          Uses
        </Link>{' '}
        -{' '}
        <Link aria-label="Go to About Page" to="/about">
          About
        </Link>{' '}
      </Text>
    </Header>
    {children}
    <Footer>
      <Text>See you sooner :)</Text>
      <Text>
        Contact:{' '}
        <Link to="mailto:bandungpenting@gmail.com?Subject=From%20ybbond.dev">
          bandungpenting@gmail.com
        </Link>
      </Text>
      <Text>
        Other site:{' '}
        <Link to="https://reason.ybbond.dev">reason.ybbond.dev</Link>
      </Text>
    </Footer>
  </>
);

export default React.memo<HeaderFooterProps>(HeaderFooter);
