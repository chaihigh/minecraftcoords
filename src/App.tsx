import styled from 'styled-components';
import * as React from 'react';
import { Waypoint } from './types.ts';
import { WaypointDisplay } from './components/WaypointDisplay.tsx'
import { recallWaypoints, storeWaypoints } from './utils/storage.ts';
import { InputFields } from './components/InputFields.tsx';

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
  const [waypoints, setWaypoints] = React.useState<Waypoint[]>(recallWaypoints());

  return (
    <Wrapper>
      <Col>
        <p><span style={{ fontSize: '2rem', color: 'green' }}>Welcome!</span> What waypoint would you like to save?</p>
        <hr />
        <InputFields
          onSubmit={(waypoint) => {
            const newWaypointList = [...waypoints, waypoint]
            setWaypoints(newWaypointList)
            storeWaypoints(newWaypointList);
          }}
        />
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