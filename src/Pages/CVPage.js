// @flow
import React from 'react';

import {Link, List, Text} from '../Components';

const CVPage = () => {
  return (
    <React.Fragment>
      <Text as="h2">Quests</Text>
      <List>
        <List as="li">
          <Text as="span" variant="red" title="mid 2014">
            <time dateTime="2014">2014</time>
          </Text>
          <br />
          Design Intern <Link to="https://www.xg.co.id/">@X-Graphic</Link>
        </List>
        <List as="li">
          <Text as="span" variant="red" title="Oct 2016 - Mar 2018">
            <time dateTime="2016">2016</time> -{' '}
            <time dateTime="2018">2018</time>
          </Text>
          <br />
          Quality Assurance{' '}
          <Link to="https://www.touchten.com/">@Touchten Games</Link>
        </List>
        <List as="li">
          <Text as="span" variant="red" title="Mar 2018 - June 2019">
            <time dateTime="2018">2018</time> -{' '}
            <time dateTime="2019">2019</time>
          </Text>
          <br />
          Frontend Engineer <Link to="https://vospay.id/">@Vospay</Link>
        </List>
        <List as="li">
          <Text as="span" variant="red" title="July 2019 - present">
            <time dateTime="2019">2019</time> -
          </Text>
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
          <Link to="https://github.com/ybbond" data-hint="GitHub" rel="me">
            Github
          </Link>
          , <Link to="https://www.instagram.com/ybbond">Instagram</Link>,{' '}
          <Link
            to="https://twitter.com/bandungpenting"
            data-hint="Twitter"
            rel="me"
          >
            Twitter
          </Link>
        </List>
      </List>
    </React.Fragment>
  );
};

export default React.memo<{}>(CVPage);
