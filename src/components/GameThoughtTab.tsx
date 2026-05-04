import styled from 'styled-components';
import * as React from 'react';
import { GameThoughtInputFields } from './GameThoughtInputFields.tsx';
import { GameThought } from '../types.ts';
import { GameThoughtDisplay } from './GameThoughtDisplay.tsx';
import { storeGameThoughts, recallGameThoughts } from '../utils/storage.ts';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

export const GameThoughtTab: React.FC<{}> = () => {
  const [gameThoughts, setGameThoughts] = React.useState<GameThought[]>(recallGameThoughts);

  return (
    <Wrapper>
      <Col>
        <p><span style={{color: 'red'}}>Hello! </span>What is your game thought?</p>
        <hr />
        <GameThoughtInputFields
          onSubmit={(gameThought) => {
            const newGameThoughtList = [...gameThoughts, gameThought]
            setGameThoughts(newGameThoughtList)
            storeGameThoughts(newGameThoughtList)
          }}
        />
        <Col>
          {gameThoughts
            .sort((a, b) => {
              return a.priority - b.priority;
            })
            .map((v: GameThought, index: number) => {
              return <GameThoughtDisplay gameThought={v} key={index}>
              </GameThoughtDisplay>
            })
          }

        </Col>
      </Col>


    </Wrapper>
  )
}