import React from 'react';
import PersonsGraph2D from './PersonsGraph2D';
import PersonsGraph3D from './PersonsGraph3D';
import PersonsGraphVR from './PersonsGraphVR';
import styled, { css } from 'styled-components';
import persons from '../assets/persons';

const Container = styled.div`
  height: 100vh;
  width: 100%;
  overflow: hidden;
`;

const ContentWrapper = styled.div`
  width: 98%;
`;
const FlexWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
`;

const ChangeGraphButton = styled.button`
  flex-basis: 32%;
  outline: 0;
  padding: 1rem 0;
  background-color: ${props => props.fillPrimary};
  border-bottom: 4px solid ${props => props.fillPrimary};
  border: 0;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  ${props =>
    props.isSelected &&
    css`
      border-bottom: 4px solid ${props => props.fillSecondary};
    `};
`;

const ChangeGraphButtonText = styled.span`
  color: #fff;
  font-size: 1.8rem;
  font-weight: bold;
`;

const GraphViewWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  position: relative;
  top: 10px;
`;

export default class Home extends React.Component {
  state = {
    is2DSelected: true,
    is3DSelected: false,
    isVRSelected: false,
    currentPersons: persons
  };

  render() {
    const {
      is2DSelected,
      is3DSelected,
      isVRSelected,
      currentPersons
    } = this.state;

    return (
      <Container>
        <ContentWrapper>
          <FlexWrapper>
            <ChangeGraphButton
              fillPrimary={'#946ddc'}
              fillSecondary={'#624694'}
              isSelected={is2DSelected}
              onClick={() => {
                this.setState({
                  is2DSelected: true,
                  is3DSelected: false,
                  isVRSelected: false
                });
              }}
            >
              <ChangeGraphButtonText>2D</ChangeGraphButtonText>
            </ChangeGraphButton>
            <ChangeGraphButton
              fillPrimary={'#F46ddF'}
              fillSecondary={'#F2469F'}
              isSelected={is3DSelected}
              onClick={() => {
                this.setState({
                  is2DSelected: false,
                  is3DSelected: true,
                  isVRSelected: false
                });
              }}
            >
              <ChangeGraphButtonText>3D</ChangeGraphButtonText>
            </ChangeGraphButton>
            <ChangeGraphButton
              fillPrimary={'#A46ddA'}
              fillSecondary={'#A2469A'}
              isSelected={isVRSelected}
              onClick={() => {
                this.setState({
                  is2DSelected: false,
                  is3DSelected: false,
                  isVRSelected: true
                });
              }}
            >
              <ChangeGraphButtonText>VR</ChangeGraphButtonText>
            </ChangeGraphButton>
          </FlexWrapper>

          <GraphViewWrapper>
            {is2DSelected && <PersonsGraph2D data={currentPersons} />}
            {is3DSelected && <PersonsGraph3D data={currentPersons} />}
            {isVRSelected && <PersonsGraphVR data={currentPersons} />}
          </GraphViewWrapper>
        </ContentWrapper>
      </Container>
    );
  }
}
