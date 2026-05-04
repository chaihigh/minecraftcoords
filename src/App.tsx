import styled from 'styled-components';
import * as React from 'react';
import { WaypointTab } from './components/WaypointTab.tsx';
import { GameThoughtTab } from './components/GameThoughtTab.tsx';

type TabOption = 'waypoint' | 'gameThought'

export function App() {
  const [ currentTab, setCurrentTab ] = React.useState<TabOption>('waypoint');

  return <>
    <button onClick={() => {
      setCurrentTab('waypoint')
    }}>
      Waypoint! Clicky here!
    </button>
    <button onClick={() => {
      setCurrentTab('gameThought')
    }}>
      Game Thinkin, clicky here!
    </button>
    {currentTab === 'waypoint' ?
      <WaypointTab

      /> : currentTab === 'gameThought' ?
      <GameThoughtTab

      /> : null
    }
  </>
}