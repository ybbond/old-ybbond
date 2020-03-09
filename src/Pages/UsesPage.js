// @flow
import React from 'react';
import {useHistory} from 'react-router';

import Text from '../Components/Text';
import List from '../Components/List';

const UsesPage = () => {
  let history = useHistory();

  const handleClick = () => {
    history.push('/');
  };
  return (
    <React.Fragment>
      <Text onClick={handleClick}>hehe</Text>
      <Text as="h2">Platform</Text>
      <List>
        <List as="li">{'Macbook Pro 2018 13" (Office)'}</List>
        <List as="li">{'Low-End PC with Manjaro Linux XFCE (Home)'}</List>
      </List>
      <Text as="h2">Hardware</Text>
      <List>
        <List as="li">Ducky One 2 Mini Keyboard image</List>
      </List>
      <Text as="h2">Code Editor</Text>
      <List>
        <List as="li">Neovim image settings</List>
        <List as="li">Visual Studio Code settings</List>
      </List>
      <Text as="h2">Terminal</Text>
      <List>
        <List as="li">tmux on Alacritty settings</List>
        <List as="li">Kitty settings</List>
        <List as="li">Z Shell (zsh) settings</List>
        <List as="li">Ranger File Manager settings</List>
        <List as="li">lazygit</List>
      </List>
    </React.Fragment>
  );
};

export default React.memo<{}>(UsesPage);
