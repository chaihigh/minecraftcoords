import styled from 'styled-components';
import * as React from 'react';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
`;

type Waypoint = {
  name: string;
  coord: {
    x: number;
    y: number;
    z: number;
  }
}

export default function App() {

  return (
    <Wrapper>
      <p>Welcome! What waypoint would you like to save?</p>

    </Wrapper>
  );
}

