// @flow
import React from 'react';
import {Route, Switch} from 'react-router';
import styled, {ThemeProvider} from 'styled-components';
import theme from 'styled-theming';

import HomePage from './Pages/HomePage';
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
            <Link to="/">Home</Link> - <Link to="/cv">CV</Link> -{' '}
            <Link to="/uses">Uses</Link>
          </Text>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/cv">
              <CVPage />
            </Route>
            <Route path="/uses">
              <UsesPage />
            </Route>
            <Route>
              <NotFoundPage />
            </Route>
          </Switch>
        </InnerWrapper>
      </OuterWrapper>
    </ThemeProvider>
  );
};

export default App;
