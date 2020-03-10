// @flow
import React from 'react';
import styled, {
  css,
  StyleSheetManager,
  type StyledComponent,
} from 'styled-components';
import theme from 'styled-theming';
import {colors} from '../Theme/colors';

const color = theme.variants('mode', 'variant', {
  default: {
    light: colors.dark,
    dark: colors.light,
  },
  green: {
    light: colors.darkGreen,
    dark: colors.green,
  },
  red: {
    light: colors.brown,
    dark: colors.orange,
  },
  blue: {
    light: colors.linkDark,
    dark: colors.linkLight,
  },
});

const mobileSizeResolver = (as?: string) => {
  switch (as) {
    case 'h1':
      return 1.1;
    case 'h2':
      return 1.05;
    case 'h3':
      return 1;
    case 'h4':
    case 'h5':
    case 'h6':
    default:
      return 0.9;
  }
};

const headingTagResolver = (as?: string) => {
  switch (as) {
    case 'h1':
      return '# ';
    case 'h2':
      return '## ';
    case 'h3':
      return '### ';
    case 'h4':
      return '#### ';
    case 'h5':
      return '##### ';
    case 'h6':
      return '###### ';
    default:
      return '';
  }
};

type TextProps = {
  as?: string,
  children: React$Node,
  variant?: 'default' | 'red' | 'green' | 'blue',
};

const TextBase: StyledComponent<TextProps, {}, {}> = styled.p`
  color: ${color};
  letter-spacing: 0.03rem;
  line-height: 1.4;
  word-wrap: break-word;
  overflow-wrap: break-word;

  @media (max-width: 599px) {
    font-size: ${({as}) => `${mobileSizeResolver(as)}rem`};
    line-height: 1.45;
  }

  ${props =>
    props.as && props.as[0] === 'h'
      ? css`
          &:before {
            content: ${props => `"${headingTagResolver(props.as)}"`};
            font-size: 0.8em;
          }
        `
      : css``}
`;

const Text = ({children, ...props}: TextProps) => {
  let {as, variant: baseVariant} = props;
  let variant = baseVariant ?? 'default';
  if (as && as[0] === 'h') {
    variant = 'green';
  }
  return (
    <StyleSheetManager disableVendorPrefixes>
      <TextBase {...props} as={as} variant={baseVariant ?? variant}>
        {children}
      </TextBase>
    </StyleSheetManager>
  );
};

export default Text;
