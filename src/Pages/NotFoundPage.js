// @flow
import React from 'react';

import Link from '../Components/Link';
import Text from '../Components/Text';

const NotFoundPage = () => {
  return (
    <Text>
      Contact:{' '}
      <Link
        href="mailto:bandungpenting@gmail.com?Subject=From%20ybbond.dev"
        target="_top"
      >
        bandungpenting@gmail.com
      </Link>
    </Text>
  );
};

export default React.memo<{}>(NotFoundPage);
