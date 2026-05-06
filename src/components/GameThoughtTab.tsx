import styled from 'styled-components';
import * as React from 'react';
import { GameThoughtInputFields } from './GameThoughtInputFields.tsx';
import { GameThought, GameThoughtFields } from '../types.ts';
import { GameThoughtDisplay } from './GameThoughtDisplay.tsx';
import { Col, FancyButton, Row } from '../styles/globalStyles';
import { clearAllGameThoughts, createNewGameThought, deleteGameThought, getAllGameThoughts } from '../utils/server.ts';
import { em } from '../utils/errors.ts';

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
  const [gameThoughts, setGameThoughts] = React.useState<GameThought[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null);

  React.useEffect(() => {
    (async () => {
      try {
        const { data } = await getAllGameThoughts();
        setGameThoughts(data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setErrorMessage(em(error));
      }
    })();
  }, []);

  const onAdd = async (gameThought: GameThoughtFields) => {
    try {
      const { data } = await createNewGameThought(gameThought);
      setGameThoughts([...gameThoughts, data]);
    } catch (error) {}
  }

  const onClear = async () => {
    const didUserConfirm = confirm('Do you really want to clear?');
    if (didUserConfirm) {
      try {
        await clearAllGameThoughts();
        setGameThoughts([]);
      } catch (error) {}
    }
  }

  const onDelete = async (gameThought: GameThought) => {
    try {
      await deleteGameThought(gameThought);
      const newGameThoughtList = gameThoughts.filter(g => g._id !== gameThought._id);
      setGameThoughts(newGameThoughtList)
    } catch (error) {}
  }

  if (isLoading) {
    return <TabPage>
      <WelcomeMessage>
        <span style={{ fontSize: '1.4rem', color: 'green', fontWeight: 600 }}>Welcome!</span>{' '}
        Your game thoughts are loading
      </WelcomeMessage>
      <PanelRow>
      </PanelRow>
    </TabPage>
  }

  if (errorMessage) {
    return <TabPage>
      <WelcomeMessage>
        <span style={{ fontSize: '1.4rem', color: 'green', fontWeight: 600 }}>Welcome!</span>{' '}
        An error occurred
      </WelcomeMessage>
      <PanelRow>
        <LeftPanel></LeftPanel>
        <RightPanel>
          {errorMessage}
        </RightPanel>
      </PanelRow>
    </TabPage>
  }

  return (
    <TabPage>
      <WelcomeMessage>
        <span style={{ color: '#c0392b', fontWeight: 600 }}>Hello!</span>{' '}
        What is your game thought?
      </WelcomeMessage>
      <PanelRow>
        <LeftPanel>
          <GameThoughtInputFields
            onSubmit={onAdd}
          />
        </LeftPanel>
        <RightPanel>
          <ClearAll onClick={onClear}>
            clear all
          </ClearAll>
          {gameThoughts
            .sort((a, b) => a.priority - b.priority)
            .map((g: GameThought, i: number) => (
              <GameThoughtDisplay
                gameThought={g}
                key={i}
                onDelete={() => onDelete(g)}
              />
            ))
          }
        </RightPanel>
      </PanelRow>
    </TabPage>
  );
};
