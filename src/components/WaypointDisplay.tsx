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

// const DeleteButton = styled.button`
//   color: #334c33;
// `;

export const WaypointDisplay: React.FC<{
  waypoint: Waypoint, key: number;
}> = ({ waypoint, key }) => {
  const { x, y, z } = waypoint.coord;
  return (
    <Card>
      <Name>{waypoint.name}:</Name>
      <CoordSpan $value={x}>{x}</CoordSpan>,{' '}
      <CoordSpan $value={y}>{y}</CoordSpan>,{' '}
      <CoordSpan $value={z}>{z}</CoordSpan>
      <span>{key}</span>
      {/*<DeleteButton onClick={(event) => {*/}
      {/*  event.preventDefault();*/}
      {/*  return*/}
      {/*  //remove from list*/}
      {/*  //remove from storage*/}
      {/*}}>*/}
      {/*  delete item*/}
      {/*</DeleteButton>*/}
    </Card>
  );
};
