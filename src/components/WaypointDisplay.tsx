import styled from 'styled-components';
import * as React from 'react';
import { Waypoint } from '../types.ts';

const Card = styled.div`
  border: 1px solid #aaf;
  border-radius: 6px;
  padding: 0.5rem 0.75rem;
  background: #f9f9ff;
  font-size: 0.95rem;
`;

const Name = styled.span`
  font-weight: 600;
  color: #334c33;
  margin-right: 0.4rem;
`;

const CoordSpan = styled.span<{ $value: number }>`
  color: ${({ $value }) => $value < 0 ? '#c0392b' : $value > 0 ? '#2563eb' : '#334c33'};
  font-family: monospace;
`;

export const WaypointDisplay: React.FC<{
  waypoint: Waypoint;
}> = ({ waypoint }) => {
  const { x, y, z } = waypoint.coord;
  return (
    <Card>
      <Name>{waypoint.name}:</Name>
      <CoordSpan $value={x}>{x}</CoordSpan>,{' '}
      <CoordSpan $value={y}>{y}</CoordSpan>,{' '}
      <CoordSpan $value={z}>{z}</CoordSpan>
    </Card>
  );
};
