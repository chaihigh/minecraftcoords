import * as React from 'react';
import WaypointTab from './components/WaypointTab.tsx';
import { GameThoughtTab } from './components/GameThoughtTab.tsx';
import { Col, Row } from './styles/globalStyles.ts';
import styled from 'styled-components';

const HeaderWrapper = styled(Col)`
  width: 100%;
  
  &:after {
    content: '';
    width: calc(100% - 24px);
    left: 12px;
    position: relative;
    border-bottom: 1px solid #aaf;
  }
`;

const HeaderRow = styled(Row)`
  width: 100%;
  gap: 12px;
  padding: 0.5rem;
`;

const TabButton = styled.button<{
  $active: boolean
}>`
  border: none;
  background: none;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 5px;
  background: ${({ $active }) => $active ? '#ccccff99' : ''};
  color: #334c33;

  &:hover {
    background: #ccf;
  }
`;

type TabOption = 'waypoint' | 'gameThought'
export function App() {
  const [ currentTab, setCurrentTab ] = React.useState<TabOption>('waypoint');

  return <>
    <HeaderWrapper>
      <HeaderRow>
        <TabButton $active={currentTab === 'waypoint'} onClick={() => {
          setCurrentTab('waypoint')
        }}>
          Waypoint! Clicky here!
        </TabButton>
        <TabButton $active={currentTab === 'gameThought'} onClick={() => {
          setCurrentTab('gameThought')
        }}>
          Game Thinkin, clicky here!
        </TabButton>
      </HeaderRow>
    </HeaderWrapper>
    {currentTab === 'waypoint' ?
      <WaypointTab /> : currentTab === 'gameThought' ?
      <GameThoughtTab /> : null
    }
  </>
}