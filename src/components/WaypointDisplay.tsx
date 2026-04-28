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

const CoordSpan = styled.span<{ $value: number }>`
  color: ${({ $value }) => $value < 0 ? 'red' : $value > 0 ? 'blue' : 'inherit'};
`;

export const WaypointDisplay: React.FC<{
  waypoint: Waypoint;
}> = ({ waypoint }) => {
  const { x, y, z } = waypoint.coord;
  return <p>
    {waypoint.name}: <CoordSpan $value={x}>{x}</CoordSpan>, <CoordSpan $value={y}>{y}</CoordSpan>, <CoordSpan $value={z}>{z}</CoordSpan>
  </p>
}