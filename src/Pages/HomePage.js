// @flow
import React from 'react';

import Link from '../Components/Link';
import Text from '../Components/Text';

const CVPage = () => {
  return (
    <React.Fragment>
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
        <Link to="mailto:bandungpenting@gmail.com?Subject=From%20ybbond.dev">
          bandungpenting@gmail.com
        </Link>
      </Text>
      <Text>
        Other site:{' '}
        <Link to="https://reason.ybbond.dev">reason.ybbond.dev</Link>
      </Text>
    </React.Fragment>
  );
};

export default React.memo<{}>(CVPage);
