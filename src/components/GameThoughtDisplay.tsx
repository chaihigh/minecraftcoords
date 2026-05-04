import * as React from 'react';
import { GameThought } from '../types';

export const GameThoughtDisplay: React.FC<{
  gameThought: GameThought;
}> = ({ gameThought }) => {
  const { name, priority, description } = gameThought;
  return <p>
    {name} and {priority} and {description} hurray
  </p>
}