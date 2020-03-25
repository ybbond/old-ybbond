// @flow
import React from 'react';
import styled, {ThemeProvider} from 'styled-components';
import {Router} from 'react-router';
import {createBrowserHistory} from 'history';
import theme from 'styled-theming';

import routes from './routes';
import HeaderFooter from './Components/HeaderFooter';
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

const history = createBrowserHistory();

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
    <Router history={history}>
      <ThemeProvider theme={{mode: dark ? 'dark' : 'light'}}>
        <Style dark={dark} />
        <OuterWrapper>
          <InnerWrapper>
            <HeaderFooter dark={dark} toggleDark={toggleDark}>
              {routes()}
            </HeaderFooter>
          </InnerWrapper>
        </OuterWrapper>
      </ThemeProvider>
    </Router>
  );
};

export default App;
