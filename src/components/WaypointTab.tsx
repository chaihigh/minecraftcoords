import styled from 'styled-components';
import * as React from 'react';
import { Waypoint, WaypointFields } from '../types.ts';
import { WaypointDisplay } from './WaypointDisplay.tsx';
import { WaypointInputFields } from './WaypointInputFields.tsx';
import { Col, FancyButton, Row } from '../styles/globalStyles';
import { clearAllWaypoints, createNewWaypoint, deleteWaypoint, getAllWaypoints } from '../utils/server.ts';
import { em } from '../utils/errors.ts';

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

const WaypointTab: React.FC<{}> = () => {
  const [waypoints, setWaypoints] = React.useState<Waypoint[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null);

  React.useEffect(() => {
    (async () => {
      try {
        const { data } = await getAllWaypoints();
        setWaypoints(data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setErrorMessage(em(error));
      }
    })();
  }, []);

  const onAdd = async (waypoint: WaypointFields) => {
    const { data } = await createNewWaypoint(waypoint);
    setWaypoints([...waypoints, data]);
  }

  const onClear = async () => {
    const didUserConfirm = confirm('Do you really want to clear?');
    if (didUserConfirm) {
      try {
        await clearAllWaypoints();
        setWaypoints([]);
      } catch (error) {}
    }
  }

  const onDelete = async (waypoint: Waypoint) => {
    try {
      await deleteWaypoint(waypoint);
      const newWaypointList = waypoints.filter(w => w._id !== waypoint._id);
      setWaypoints(newWaypointList);
    } catch (error) {}
  }

  if (isLoading) {
    return <TabPage>
      <WelcomeMessage>
        <span style={{ fontSize: '1.4rem', color: 'green', fontWeight: 600 }}>Welcome!</span>{' '}
        Your waypoints are loading
      </WelcomeMessage>
      <PanelRow>
      </PanelRow>
    </TabPage>
  }

  if (errorMessage) {
    return <TabPage>
      <WelcomeMessage>
        <span style={{ fontSize: '1.4rem', color: 'green', fontWeight: 600 }}>Welcome!</span>{' '}
        An error occurred
      </WelcomeMessage>
      <PanelRow>
        <LeftPanel></LeftPanel>
        <RightPanel>
          {errorMessage}
        </RightPanel>
      </PanelRow>
    </TabPage>
  }

  return (
    <TabPage>
      <WelcomeMessage>
        <span style={{ fontSize: '1.4rem', color: 'green', fontWeight: 600 }}>Welcome!</span>{' '}
        What waypoint would you like to save?
      </WelcomeMessage>
      <PanelRow>
        <LeftPanel>
          <WaypointInputFields
            onSubmit={onAdd}
          />
        </LeftPanel>
        <RightPanel>
          <ClearAll onClick={onClear}>
            clear all
          </ClearAll>
          {waypoints.map((w: Waypoint, i: number) => (
            <WaypointDisplay
              waypoint={w}
              key={i}
              onDelete={() => onDelete(w)}
            />
          ))}
        </RightPanel>
      </PanelRow>
    </TabPage>
  );
};
export default WaypointTab;
