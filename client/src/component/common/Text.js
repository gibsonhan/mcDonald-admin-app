import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { rem } from 'polished';

//TODO figure out the alignment of this stuff
const Text = styled.div`
  flex: 1;
  display: flex;
  justify-content: left;
  align-items: center;

  ${({ flex, justify, size, padding }) => css`
    ${flex &&
    css`
      flex: ${flex};
    `}

    ${justify &&
    css`
      justify-content: ${justify}};
    `}

    ${size &&
    css`
      font-size: ${rem(size)};
    `}

    ${padding &&
    css`
      padding: ${rem(padding)};
    `}
  `}
`;

export default Text;
