// @flow
import React from 'react';
import {Route, Switch} from 'react-router';
import styled, {ThemeProvider} from 'styled-components';
import theme from 'styled-theming';

import AboutPage from './Pages/AboutPage';
import CVPage from './Pages/CVPage';
import UsesPage from './Pages/UsesPage';
import NotFoundPage from './Pages/NotFoundPage';
import Button from './Components/Button';
import Link from './Components/Link';
import Text from './Components/Text';
import Style from './Theme/Style';
import {colors} from './Theme/colors';

const backgroundColor = theme('mode', {
  light: colors.light,
  dark: colors.dark,
});

const borderColor = theme('mode', {
  light: colors.dark,
  dark: colors.light,
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

const Header = styled.header`
  margin-bottom: 30px;
`;

const Footer = styled.footer`
  margin-top: 70px;
  padding: 20px 0;
  border-top: 2px dashed ${borderColor};
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
          <Header>
            <Text as="h1">
              Yohanes Bandung Bondowoso{' '}
              <Button aria-hidden="true" onClick={toggleDark}>
                {dark ? '🌛' : '🌞'}
              </Button>
            </Text>
            <Text>
              <Link to="/">CV</Link> - <Link to="/uses">Uses</Link> -{' '}
              <Link to="/about">About</Link>
            </Text>
          </Header>
          <Switch>
            <Route exact path="/">
              <CVPage />
            </Route>
            <Route path="/uses">
              <UsesPage />
            </Route>
            <Route path="/about">
              <AboutPage />
            </Route>
            <Route>
              <NotFoundPage />
            </Route>
          </Switch>
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
        </InnerWrapper>
      </OuterWrapper>
    </ThemeProvider>
  );
};

export default App;
