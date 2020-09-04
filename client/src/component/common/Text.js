import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { rem } from 'polished';

const Text = styled.div`
  ${({ size }) => css`
    ${size &&
    css`
      font-size: ${rem(size)};
    `}
  `}
`;
Text.propType = {
  size: PropTypes.number,
};

export default Text;
