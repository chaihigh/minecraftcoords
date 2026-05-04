import styled from 'styled-components';
import * as React from 'react';
import { GameThought } from '../types';

const Card = styled.div`
  border: 1px solid #aaf;
  border-radius: 6px;
  padding: 0.5rem 0.75rem;
  background: #f9f9ff;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Name = styled.span`
  font-weight: 600;
  color: #334c33;
`;

const Priority = styled.span`
  font-size: 0.75rem;
  background: #ccccff99;
  color: #334c33;
  border-radius: 4px;
  padding: 0.1rem 0.4rem;
  font-weight: 600;
`;

const Description = styled.p`
  font-size: 0.9rem;
  color: #556655;
  margin: 0;
`;

export const GameThoughtDisplay: React.FC<{
  gameThought: GameThought;
}> = ({ gameThought }) => {
  const { name, priority, description } = gameThought;
  return (
    <Card>
      <CardHeader>
        <Name>{name}</Name>
        <Priority>P{priority}</Priority>
      </CardHeader>
      <Description>{description}</Description>
    </Card>
  );
};
