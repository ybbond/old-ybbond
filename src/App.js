import React, { Component } from "react";
import styled, { ThemeProvider } from "styled-components";
import theme from "styled-theming";

import Style from "./Theme/Style";

const backgroundColor = theme("mode", {
  light: "#fdfdfd",
  dark: "#1b1b1b"
});

const color = theme("mode", {
  light: "#1b1b1b",
  dark: "#fdfdfd"
});

const linkColor = theme("mode", {
  light: "#2d2d2d",
  dark: "#d8dcd5"
});

const Text = styled.p`
  font-family: Trebuchet MS, Helvetica, sans-serif;
`;

const Wrapper = styled.div`
  min-height: calc(100vh - 2px);
  background-color: ${backgroundColor};
  color: ${color};
  padding: 1px;
`;

const Link = styled.a`
  color: ${linkColor};
`;

const darkmode = true;

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={{ mode: darkmode ? "dark" : "light" }}>
        <Wrapper>
          <Style dark={darkmode ? "dark" : light} />
          <center>
            <div style={{ maxWidth: 600, textAlign: "left" }}>
              <Text as="h1">Yohanes Bandung Bondowoso</Text>
              <Text>
                Currently work as Frontend Engineer of kumparan.com in Jakarta,
                Indonesia. Building it with React, React Native for Android and
                iOS.
                <br />
                <br />
                Eager to learn.
                <br />
                Hardships.
                <br />
                I cannot say that I am humble, but I learn from experience that
                each individuals, their own excellences.
                <br />
                I try to learn from everyone, and everything.
                <br />
                <br />
                Contact:{" "}
                <Link
                  href="mailto:bandungpenting@gmail.com?Subject=From%20ybbond.dev"
                  target="_top"
                >
                  bandungpenting@gmail.com
                </Link>
              </Text>
              <Text>
                Other site:{" "}
                <Link href="https://reason.ybbond.dev">reason.ybbond.dev</Link>
              </Text>
            </div>
          </center>
        </Wrapper>
      </ThemeProvider>
    );
  }
}

export default App;
