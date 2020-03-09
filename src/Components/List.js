// @flow
import React from 'react';
import styled, {css, type StyledComponent} from 'styled-components';
import Text from './Text';
import {colors} from '../Theme/colors';

type Props = {|
  as?: 'ol' | 'li',
  children: React$Node,
|};

const ListBase: StyledComponent<Props, {}, {}> = styled.ul`
  list-style: none;
  padding: 0;

  ${props =>
    props.as === 'li'
      ? css`
          margin-bottom: 5px;
          &:before {
            content: '- ';
            color: ${colors.orange};
          }
        `
      : css``}
`;

const List = (props: Props) => {
  const {as, children, ...rest} = props;
  return as && as === 'li' ? (
    <ListBase as={as} {...rest}>
      <Text as="span">{children}</Text>
    </ListBase>
  ) : (
    <ListBase as={as} {...rest}>
      {children}
    </ListBase>
  );
};

export default List;
