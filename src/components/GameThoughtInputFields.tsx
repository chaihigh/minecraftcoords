import * as React from 'react';
import { LabeledValue } from './LabeledValue.tsx';
import { GameThought } from '../types.ts';

export const GameThoughtInputFields: React.FC<{
  onSubmit: (value: GameThought) => void
}> = ({onSubmit}) => {

  const [inputName, setInputName] = React.useState('');
  const [inputPriority, setInputPriority] = React.useState('');
  const [inputDescription, setInputDescription] = React.useState('');

  return <form onSubmit={(event) => {
    // take submitted into and group into var newGameThought
    event.preventDefault();
    let newGameThought: GameThought = {
      name: inputName,
      priority: Number(inputPriority),
      description: inputDescription
    }
    //reset input fields to blank
    setInputName('');
    setInputPriority('');
    setInputDescription('');
    //prime newGameThought to go have stuff done to it / do stuff with it
    onSubmit(newGameThought)
  }}>
    <LabeledValue
      label="Name:"
      value={inputName}
      onChange={v => setInputName(v)}
    />
    <LabeledValue
      label="Priority (1-9):"
      value={inputPriority}
      onChange={v => setInputPriority(v)}
    />
    <LabeledValue
      label="Description:"
      value={inputDescription}
      onChange={v => setInputDescription(v)}
    />
    <button type={'submit'}>
      Send your thoughts into the list
    </button>
  </form>
}