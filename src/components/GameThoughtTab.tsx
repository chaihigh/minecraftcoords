import styled from 'styled-components';
import * as React from 'react';
import { GameThoughtInputFields } from './GameThoughtInputFields.tsx';
import { GameThought } from '../types.ts';
import { GameThoughtDisplay } from './GameThoughtDisplay.tsx';
import { recallGameThoughts, storeGameThoughts } from '../utils/storage.ts';
import { Col, FancyButton, Row } from '../styles/globalStyles';

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

const ClearAll = styled(FancyButton)`
  align-self: flex-end;
`

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
          <ClearAll onClick={() => {
            const didUserConfirm = confirm('Do you really want to clear?');
            if (didUserConfirm) {
              setGameThoughts([]);
              storeGameThoughts([]);
            }
          }}>
            clear all
          </ClearAll>
          {gameThoughts
            .sort((a, b) => a.priority - b.priority)
            .map((v: GameThought, i: number) => (
              <GameThoughtDisplay
                gameThought={v}
                key={i}
                onDelete={() => {
                  const newGameThoughtList = gameThoughts.filter((_, idx) => idx !== i);
                  setGameThoughts(newGameThoughtList);
                  storeGameThoughts(newGameThoughtList);
                }}
              />
            ))
          }
        </RightPanel>
      </PanelRow>
    </TabPage>
  );
};
