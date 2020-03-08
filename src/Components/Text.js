// @flow
import styled, {css, type StyledComponent} from 'styled-components';
import theme from 'styled-theming';
import {colors} from '../Theme/colors';

const color = theme('mode', {
  light: colors.dark,
  dark: colors.light,
});

const colorHeading = theme('mode', {
  light: colors.darkGreen,
  dark: colors.green,
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
} & HTMLParagraphElement &
  HTMLHeadingElement;

const Text: StyledComponent<TextProps, {}, {}> = styled.p`
  color: ${color};
  letter-spacing: 0.03rem;
  line-height: 1.4;

  @media (max-width: 599px) {
    font-size: ${({as}) => `${mobileSizeResolver(as)}rem`};
    line-height: 1.45;
  }

  ${props =>
    props.as
      ? css`
          color: ${colorHeading};
          &:before {
            content: ${props => `"${headingTagResolver(props.as)}"`};
            font-size: 0.8em;
          }
        `
      : css``}
`;

export default Text;
