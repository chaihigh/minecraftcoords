import styled from 'styled-components';
import * as React from 'react';
import { Waypoint } from '../types.ts';
import { FancyButton } from '../styles/globalStyles.ts';

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

const DeleteButton = styled(FancyButton)`
  float: right;
  padding: .3rem .6rem;
`;

export const WaypointDisplay: React.FC<{
  waypoint: Waypoint;
  onDelete: () => void;
}> = ({waypoint, onDelete}) => {
  const { x, y, z } = waypoint.coord;

  return (
    <Card>
      <Name>{waypoint.name}:</Name>
      <CoordSpan $value={x}>{x}</CoordSpan>,{' '}
      <CoordSpan $value={y}>{y}</CoordSpan>,{' '}
      <CoordSpan $value={z}>{z}</CoordSpan>
      <DeleteButton onClick={() => {
        onDelete();
      }}>
        delete item
      </DeleteButton>
    </Card>
  );
};
