// @flow
import React from "react";

type Props = {
  dark: boolean
};

const Style = (props: Props) => (
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

export default React.memo<Props>(Style);
