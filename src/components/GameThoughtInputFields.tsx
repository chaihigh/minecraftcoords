import styled from 'styled-components';
import * as React from 'react';
import { LabeledValue } from './LabeledValue.tsx';
import { GameThought } from '../types.ts';
import { DescriptionLabeledValue } from './DescriptionLabeledValue.tsx';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const SubmitButton = styled.button`
  border: none;
  background: #ccccff99;
  color: #334c33;
  cursor: pointer;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  font-size: 0.9rem;
  align-self: flex-start;
  margin-top: 0.25rem;

  &:hover {
    background: #ccf;
  }
`;

export const GameThoughtInputFields: React.FC<{
  onSubmit: (value: GameThought) => void
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
