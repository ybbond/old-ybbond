// @flow
import React from 'react';

import Link from '../Components/Link';
import List from '../Components/List';
import Text from '../Components/Text';

const CVPage = () => {
  return (
    <React.Fragment>
      <Text as="h2">Quests</Text>
      <List>
        <List as="li">
          <date dateTime="2014">2014</date>
          <br />
          Design Intern <Link to="https://www.xg.co.id/">@X-Graphic</Link>
        </List>
        <List as="li">
          <date dateTime="2016">2016</date> - <date dateTime="2018">2018</date>
          <br />
          Quality Assurance{' '}
          <Link to="https://www.touchten.com/">@Touchten Games</Link>
        </List>
        <List as="li">
          <date dateTime="2018">2018</date> - <date dateTime="2019">2019</date>
          <br />
          Frontend Engineer <Link to="https://vospay.id/">@Vospay</Link>
        </List>
        <List as="li">
          <date dateTime="2019">2019</date> -
          <br />
          Frontend Engineer <Link to="https://kumparan.com/">@kumparan</Link>
        </List>
      </List>
      <Text as="h2">Good to Know</Text>
      <List>
        <List as="li">Studied CS in Binus, never finish</List>
        <List as="li">Drinks coffee</List>
        <List as="li">Vim user</List>
        <List as="li">Loves moshing at indie band gigs</List>
        <List as="li">from Jakarta, Indonesia</List>
      </List>
      <Text as="h2">Find Me</Text>
      <List>
        <List as="li">everywhere: ybbond or bandungpenting</List>
        <List as="li">
          <Link to="mailto:bandungpenting@gmail.com?Subject=From%20ybbond.dev">
            bandungpenting@gmail.com
          </Link>
        </List>
        <List as="li">
          <Link to="https://github.com/ybbond">Github</Link>,{' '}
          <Link to="https://www.instagram.com/ybbond">Instagram</Link>,{' '}
          <Link to="https://twitter.com/bandungpenting">Twitter</Link>
        </List>
      </List>
    </React.Fragment>
  );
};

export default React.memo<{}>(CVPage);
