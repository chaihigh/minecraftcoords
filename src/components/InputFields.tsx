import { Waypoint } from '../types.ts';
import * as React from 'react';
import { LabeledValue } from './LabeledValue.tsx';

export const InputFields: React.FC<{
  onSubmit: (value: Waypoint) => void
}> = (props) => {
  const { onSubmit } = props;

  const [inputName, setInputName] = React.useState('');
  const [inputX, setInputX] = React.useState('');
  const [inputY, setInputY] = React.useState('');
  const [inputZ, setInputZ] = React.useState('');

  return <form onSubmit={() => {
    let newWaypoint: Waypoint = {
      name: inputName,
      coord: {
        x: Number(inputX),
        y: Number(inputY),
        z: Number(inputZ),
      }
    }
    setInputName('');
    setInputX('');
    setInputY('');
    setInputZ('');
    onSubmit(newWaypoint);
  }}>
    <LabeledValue
      label="Name:"
      value={inputName}
      onChange={v => setInputName(v)}
    />
    <LabeledValue
      label="X:"
      value={inputX}
      onChange={v => setInputX(v)}
    />
    <LabeledValue
      label="Y:"
      value={inputY}
      onChange={v => setInputY(v)}
    />
    <LabeledValue
      label="Z:"
      value={inputZ}
      onChange={v => setInputZ(v)}
    />
    <button type={'submit'}>
      Submit
    </button>
  </form>
}