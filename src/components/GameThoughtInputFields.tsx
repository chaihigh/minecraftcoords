import styled from 'styled-components';
import * as React from 'react';
import { LabeledValue } from './LabeledValue.tsx';
import { GameThoughtFields } from '../types.ts';
import { DescriptionLabeledValue } from './DescriptionLabeledValue.tsx';
import { FancyButton } from '../styles/globalStyles.ts';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const SubmitButton = styled(FancyButton)`
  align-self: flex-start;
  margin-top: 0.25rem;
`

export const GameThoughtInputFields: React.FC<{
  onSubmit: (value: GameThoughtFields) => void
}> = ({ onSubmit }) => {
  const [inputName, setInputName] = React.useState('');
  const [inputPriority, setInputPriority] = React.useState('');
  const [inputDescription, setInputDescription] = React.useState('');

  return (
    <Form onSubmit={(event) => {
      event.preventDefault();
      onSubmit({
        name: inputName,
        priority: Number(inputPriority),
        description: inputDescription,
      });
      setInputName('');
      setInputPriority('');
      setInputDescription('');
    }}>
      <LabeledValue label="Name:" value={inputName} onChange={v => setInputName(String(v))} />
      <LabeledValue label="Priority (1-9):" value={inputPriority} onChange={v => setInputPriority(String(v))} />
      <DescriptionLabeledValue label="Description:" value={inputDescription} onChange={v => setInputDescription(String(v))} />
      <SubmitButton type="submit">Add thought</SubmitButton>
    </Form>
  );
};
