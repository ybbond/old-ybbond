// @flow
import React from 'react';
import styled, {ThemeProvider} from 'styled-components';
import theme from 'styled-theming';

import Button from './Components/Button';
import Link from './Components/Link';
import Text from './Components/Text';
import Style from './Theme/Style';
import {colors} from './Theme/colors';

const backgroundColor = theme('mode', {
  light: colors.light,
  dark: colors.dark,
});

const OuterWrapper = styled.div`
  min-height: calc(100vh - 2px);
  background-color: ${backgroundColor};
  padding: 1px;
`;

const InnerWrapper = styled.div`
  margin: 0 auto;
  max-width: 600px;

  @media (max-width: 599px) {
    padding: 0 10px;
  }
`;

const App = () => {
  const [dark, setDark] = React.useState(true);

  React.useEffect(() => {
    const isDark = localStorage.getItem('dark') === 'true';
    setDark(isDark);
  }, []);

  const toggleDark = () => {
    const newState = !dark;
    localStorage.setItem('dark', JSON.stringify(newState));
    setDark(newState);
  };

  return (
    <ThemeProvider theme={{mode: dark ? 'dark' : 'light'}}>
      <Style dark={dark} />
      <OuterWrapper>
        <InnerWrapper>
          <Text as="h1">
            Yohanes Bandung Bondowoso{' '}
            <Button aria-hidden="true" onClick={toggleDark}>
              {dark ? '🌛' : '🌞'}
            </Button>
          </Text>
          <Text>
            Currently work as Frontend Engineer of kumparan.com in Jakarta,
            Indonesia. Building it with React, React Native for Android and iOS.
            <br />
            <br />
            Eager to learn.
            <br />
            Hardships.
            <br />
            I cannot say that I am humble, but I learn from experience that each
            individuals, their own excellences.
            <br />
            I try to learn from everyone, and everything.
            <br />
            <br />
            Contact:{' '}
            <Link
              href="mailto:bandungpenting@gmail.com?Subject=From%20ybbond.dev"
              target="_top"
            >
              bandungpenting@gmail.com
            </Link>
          </Text>
          <Text>
            Other site:{' '}
            <Link href="https://reason.ybbond.dev">reason.ybbond.dev</Link>
          </Text>
        </InnerWrapper>
      </OuterWrapper>
    </ThemeProvider>
  );
};

export default App;
