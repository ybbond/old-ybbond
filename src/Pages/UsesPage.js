// @flow
import React from 'react';

import {List, Link, Text} from '../Components';

const UsesPage = () => {
  return (
    <React.Fragment>
      <Text as="h2">Platform</Text>
      <List>
        <List as="li">Macbook Pro 2018 13&quot; (Office)</List>
        <List as="li">Low-End PC with Manjaro Linux XFCE (Home)</List>
      </List>
      <Text as="h2">Hardware</Text>
      <List>
        <List as="li">
          Ducky One 2 Mini Keyboard{' '}
          <Link to="https://twitter.com/bandungpenting/status/1146845120618090497">
            image
          </Link>
        </List>
        <List as="li">Roland FP-30 Digital Piano</List>
      </List>
      <Text as="h2">Software</Text>
      <List>
        <List as="li">
          Neovim{' '}
          <Link to="https://twitter.com/bandungpenting/status/1162210601340305409">
            image
          </Link>{' '}
          <Link to="https://gist.github.com/ybbond/16ee5000eeca727899eac43a4c20291c">
            settings
          </Link>
        </List>
        <List as="li">
          tmux on kitty{' '}
          <Link to="https://gist.github.com/ybbond/26165e50f36a439b6b930607976a1e82">
            settings
          </Link>
        </List>
        <List as="li">
          Z Shell (zsh){' '}
          <Link to="https://gist.github.com/ybbond/e6f827f977248b5d9eda8e1c49da82e9">
            settings
          </Link>
        </List>
        <List as="li">
          <Link to="https://github.com/ranger/ranger">Ranger</Link> File Manager
        </List>
        <List as="li">
          <Link to="https://github.com/jesseduffield/lazygit">lazygit</Link>
        </List>
      </List>
    </React.Fragment>
  );
};

export default React.memo<{}>(UsesPage);
