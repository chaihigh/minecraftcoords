import styled from 'styled-components';
import * as React from 'react';
import { NewAppInputFields } from './components/NewAppInputFields.tsx';
import { GameThought } from './types.ts';
import { GameThoughtDisplay } from './components/GameThoughtDisplay.tsx';
import { storeGameThoughts, recallGameThoughts } from './utils/storage.ts';

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

export function NewApp() {
  const [gameThoughts, setGameThoughts] = React.useState<GameThought[]>(recallGameThoughts);

  return (
    <Wrapper>
      <Col>
        <p><span style={{color: 'red'}}>Hello! </span>What is your game thought?</p>
        <hr />
        <NewAppInputFields
          onSubmit={(gameThought) => {
            const newGameThoughtList = [...gameThoughts, gameThought]
            setGameThoughts(newGameThoughtList)
            storeGameThoughts(newGameThoughtList)
          }}
        />
        <Col>
          {gameThoughts.map((v: GameThought) => {
            return <GameThoughtDisplay gameThought={v}>
            </GameThoughtDisplay>
          })}

        </Col>
      </Col>


    </Wrapper>
  )
}