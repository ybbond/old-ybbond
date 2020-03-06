import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div>
        <center>
          <div style={{ maxWidth: 600, textAlign: "left" }}>
            <h1 style={{ fontFamily: "Trebuchet MS, Helvetica, sans-serif" }}>
              Yohanes Bandung Bondowoso
            </h1>
            <p style={{ fontFamily: "Trebuchet MS, Helvetica, sans-serif" }}>
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
              <a
                href="mailto:bandungpenting@gmail.com?Subject=From%20ybbond.dev"
                target="_top"
              >
                bandungpenting@gmail.com
              </a>
            </p>
            <p style={{ fontFamily: "Trebuchet MS, Helvetica, sans-serif" }}>
              Other site:{" "}
              <a href="https://reason.ybbond.dev">reason.ybbond.dev</a>
            </p>
          </div>
        </center>
      </div>
    );
  }
}

export default App;
