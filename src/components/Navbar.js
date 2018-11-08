import React from 'react';
import styled from 'styled-components';
import { bubbleChart } from '../styleguide/icons';
import Icon from '../styleguide/Icon';

const StyledNavbarWrapper = styled.header`
  width: 60px;
  height: 100vh;
  background-color: #222;
  position: fixed;
  right: 0;
  top: 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 1rem 0;
  z-index: 2;
  `;

const RotatedAppLogo = styled.div`
  display: flex; 
  align-items: center;
  justify-content: center;
  text-align: center;
  transform: rotate(270deg);
  position: relative;
  top: 150px;
  `;

const StyledLogoText = styled.span`
  color: #fff;
  white-space: nowrap;
`;


export default function Navbar() {
  return (
    <StyledNavbarWrapper>
      <Icon fill="#fff" size={'36'}>
        {bubbleChart}
      </Icon>
      <RotatedAppLogo>
        <StyledLogoText>PERSONS FORCE DIRECTIONAL GRAPH</StyledLogoText>
      </RotatedAppLogo>
    </StyledNavbarWrapper>
  );
}
