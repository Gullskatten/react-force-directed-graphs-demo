import styled, { css } from 'styled-components';

const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    ${props =>
      props.size &&
      css`
        width: ${props.size}px;
        height: ${props.size}px;
      `};

    ${props =>
      props.fill &&
      css`
        fill: ${props.fill};
      `};
  }
`;

export default Icon;
