import styled from 'styled-components';
import * as React from 'react';
import { GameThoughtInputFields } from './GameThoughtInputFields.tsx';
import { GameThought } from '../types.ts';
import { GameThoughtDisplay } from './GameThoughtDisplay.tsx';
import { storeGameThoughts, recallGameThoughts } from '../utils/storage.ts';
import { Row, Col } from '../styles/globalStyles';

const TabPage = styled.div`
  padding: 1.5rem;
`;

const WelcomeMessage = styled.p`
  font-size: 1.1rem;
  color: #334c33;
  margin-bottom: 1.25rem;
  padding-bottom: 0.75rem;
`;

const PanelRow = styled(Row)`
  gap: 2rem;
  align-items: flex-start;
`;

const LeftPanel = styled(Col)`
  width: 350px;
`;

const RightPanel = styled(Col)`
  flex: 1;
  gap: 0.5rem;
`;

export const GameThoughtTab: React.FC<{}> = () => {
  const [gameThoughts, setGameThoughts] = React.useState<GameThought[]>(recallGameThoughts);

  return (
    <TabPage>
      <WelcomeMessage>
        <span style={{ color: '#c0392b', fontWeight: 600 }}>Hello!</span>{' '}
        What is your game thought?
      </WelcomeMessage>
      <PanelRow>
        <LeftPanel>
          <GameThoughtInputFields
            onSubmit={(gameThought) => {
              const newGameThoughtList = [...gameThoughts, gameThought];
              setGameThoughts(newGameThoughtList);
              storeGameThoughts(newGameThoughtList);
            }}
          />
        </LeftPanel>
        <RightPanel>
          {gameThoughts
            .sort((a, b) => a.priority - b.priority)
            .map((v: GameThought, index: number) => (
              <GameThoughtDisplay gameThought={v} key={index} />
            ))
          }
        </RightPanel>
      </PanelRow>
    </TabPage>
  );
};
