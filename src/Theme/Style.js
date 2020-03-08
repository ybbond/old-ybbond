// @flow
import React from 'react';
import {colors} from './colors';

type Props = {
  dark: boolean,
};

const Style = (props: Props) => (
  <style
    dangerouslySetInnerHTML={{
      __html: `
html {
  background-color: ${props.dark ? colors.dark : colors.light};
}
::selection {
  background-color: ${
    props.dark ? colors.darkSelection : colors.lightSelection
  };
}
      `,
    }}
  />
);

export default React.memo<Props>(Style);
