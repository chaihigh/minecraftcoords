import styled from 'styled-components';
import * as React from 'react';
import { Waypoint } from '../types.ts';
import { WaypointDisplay } from './WaypointDisplay.tsx'
import { recallWaypoints, storeWaypoints } from '../utils/storage.ts';
import { WaypointInputFields } from './WaypointInputFields.tsx';

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

export const WaypointTab: React.FC<{}> = () => {
  const [waypoints, setWaypoints] = React.useState<Waypoint[]>(recallWaypoints());

  return (
    <Wrapper>
      <Col>
        <p><span style={{ fontSize: '2rem', color: 'green' }}>Welcome!</span> What waypoint would you like to save?</p>
        <hr />
        <WaypointInputFields
          onSubmit={(waypoint) => {
            const newWaypointList = [...waypoints, waypoint]
            setWaypoints(newWaypointList)
            storeWaypoints(newWaypointList);
          }}
        />
        <Col>
          {waypoints.map((w: Waypoint, i: number) => {
            return <WaypointDisplay waypoint={w} key={i}>
            </WaypointDisplay>
          })}
        </Col>
      </Col>
    </Wrapper>
  );
}