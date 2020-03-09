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
  padding: 0;

  ${props =>
    props.as === 'li'
      ? css`
          position: relative;
          list-style: none;
          padding-left: 20px;
          margin-bottom: 5px;
          &:before {
            display: inline-block;
            content: '- ';
            position: absolute;
            width: 20px;
            color: ${colors.orange};
            left: 0;
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
