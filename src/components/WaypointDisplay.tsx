import styled from "styled-components";
import * as React from 'react';

export type Waypoint = {
  name: string,
  coord: {
    x: number,
    y: number,
    z: number,
  }
}

export const WaypointDisplay: React.FC<{
  waypoint: Waypoint;
}> = ({ waypoint }) => {
  return <p>
    {waypoint.name}: <span style={{ color: 'red' }}>{waypoint.coord.x}, {waypoint.coord.y}, {waypoint.coord.z}</span>
  </p>
}