// @flow
import React from 'react';

import {Link, Text} from '../Components';

const NotFoundPage = () => {
  return (
    <React.Fragment>
      <Text>
        <br />I regret to tell that you may have entered the
      </Text>
      <Text as="h2">404 page</Text>
      <Text>
        Website will typically generate a{' '}
        <Text as="span" variant="red">
          &quot;404 Not Found&quot;
        </Text>{' '}
        web page when a user attempts to follow a broken or dead link; hence the
        404 error is one of the most recognizable errors encountered on the
        World Wide Web. [
        <Link to="https://en.wikipedia.org/wiki/HTTP_404">1</Link>]
        <br />
        <br />
        <br />
        get back to <Link to="/">safety »</Link>
      </Text>
    </React.Fragment>
  );
};

export default React.memo<{}>(NotFoundPage);
