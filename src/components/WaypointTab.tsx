import styled from 'styled-components';
import * as React from 'react';
import { Waypoint } from '../types.ts';
import { WaypointDisplay } from './WaypointDisplay.tsx';
import { recallWaypoints, storeWaypoints } from '../utils/storage.ts';
import { WaypointInputFields } from './WaypointInputFields.tsx';
import { Col, FancyButton, Row } from '../styles/globalStyles';

const TabPage = styled.div`
  padding: 1.5rem;
`;

const WelcomeMessage = styled.p`
  font-size: 1.1rem;
  color: #334c33;
  margin-bottom: 1.25rem;
  padding-bottom: 0.75rem;
`;

const PanelRow = styled(Row)`
  gap: 2rem;
  align-items: flex-start;
`;

const LeftPanel = styled(Col)`
  min-width: 300px;
  max-width: 410px;
`;

const RightPanel = styled(Col)`
  flex: 1;
  gap: 0.5rem;
`;

const ClearAll = styled(FancyButton)`
  align-self: flex-end;
`

export const WaypointTab: React.FC<{}> = () => {
  const [waypoints, setWaypoints] = React.useState<Waypoint[]>(recallWaypoints());

  return (
    <TabPage>
      <WelcomeMessage>
        <span style={{ fontSize: '1.4rem', color: 'green', fontWeight: 600 }}>Welcome!</span>{' '}
        What waypoint would you like to save?
      </WelcomeMessage>
      <PanelRow>
        <LeftPanel>
          <WaypointInputFields
            onSubmit={(waypoint) => {
              const newWaypointList = [...waypoints, waypoint];
              setWaypoints(newWaypointList);
              storeWaypoints(newWaypointList);
            }}
          />
        </LeftPanel>
        <RightPanel>
          <ClearAll onClick={() => {
            const didUserConfirm = confirm('Do you really want to clear?');
            if (didUserConfirm) {
              setWaypoints([]);
              storeWaypoints([]);
            }
          }}>
            clear all
          </ClearAll>
          {waypoints.map((w: Waypoint, i: number) => (
            <WaypointDisplay
              waypoint={w}
              key={i}
              onDelete={() => {
                const newWaypointList = waypoints.filter((_, idx) => idx !== i);
                setWaypoints(newWaypointList);
                storeWaypoints(newWaypointList);
              }}
            />
          ))}
        </RightPanel>
      </PanelRow>
    </TabPage>
  );
};
