// @flow
import React from 'react';
import {useHistory} from 'react-router';

import Link from '../Components/Link';
import Text from '../Components/Text';

const CVPage = () => {
  let history = useHistory();

  const handleClick = () => {
    history.push('/uses');
  };

  return (
    <React.Fragment>
      <Text onClick={handleClick}>hehe</Text>
      <Text>
        Currently work as Frontend Engineer of kumparan.com in Jakarta,
        Indonesia. Building it with React, React Native for Android and iOS.
        <br />
        <br />
        Eager to learn.
        <br />
        Hardships.
        <br />
        I cannot say that I am humble, but I learn from experience that each
        individuals, their own excellences.
        <br />
        I try to learn from everyone, and everything.
        <br />
        <br />
        Contact:{' '}
        <Link
          href="mailto:bandungpenting@gmail.com?Subject=From%20ybbond.dev"
          target="_top"
        >
          bandungpenting@gmail.com
        </Link>
      </Text>
      <Text>
        Other site:{' '}
        <Link href="https://reason.ybbond.dev">reason.ybbond.dev</Link>
      </Text>
    </React.Fragment>
  );
};

export default React.memo<{}>(CVPage);
