import styled from 'styled-components';
import * as React from 'react';
import { LabeledValue } from './components/LabeledValue.tsx';
import { Waypoint, WaypointDisplay } from './components/WaypointDisplay.tsx'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

export function App() {
  const [inputName, setInputName] = React.useState('');
  const [inputX, setInputX] = React.useState('');
  const [inputY, setInputY] = React.useState('');
  const [inputZ, setInputZ] = React.useState('');
  const [waypoints, setWaypoints] = React.useState<Waypoint[]>([])

  const submitCoord = () => {
    let newWaypoint: Waypoint = {
      name: inputName,
      coord: {
        x: Number(inputX),
        y: Number(inputY),
        z: Number(inputZ),
      },
    };
    setWaypoints([...waypoints, newWaypoint])
  }

  return (
    <Wrapper>
      <Col>
        <p><span style={{ fontSize: '2rem', color: 'green' }}>Welcome!</span> What waypoint would you like to save?</p>
        <hr />
        <LabeledValue
          label="Name:"
          value={inputName}
          onChange={v => setInputName(v)}
        />
        <LabeledValue
          label="X:"
          value={inputX}
          onChange={v => setInputX(v)}
        />
        <LabeledValue
          label="Y:"
          value={inputY}
          onChange={v => setInputY(v)}
        />
        <LabeledValue
          label="Z:"
          value={inputZ}
          onChange={v => setInputZ(v)}
        />
        <button onClick={submitCoord}>
          Submit
        </button>
        <Col>
          {waypoints.map((w: Waypoint) => {
            return <WaypointDisplay waypoint={w}>
            </WaypointDisplay>
          })}
        </Col>
      </Col>
    </Wrapper>
  );
}