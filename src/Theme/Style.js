import React from "react";

const Style = props => (
  <style
    dangerouslySetInnerHTML={{
      __html: `
html {
  background-color: ${props.dark ? "#1b1b1b" : "#fdfdfd"};
}
      `
    }}
  />
);

export default React.memo(Style);
