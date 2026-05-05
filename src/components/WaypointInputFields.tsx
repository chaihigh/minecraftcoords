import styled from 'styled-components';
import { Waypoint } from '../types.ts';
import * as React from 'react';
import { LabeledValue } from './LabeledValue.tsx';
import { FancyButton, Row } from '../styles/globalStyles';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const CoordRow = styled(Row)`
  gap: 0.5rem;
`;

const NarrowField = styled.div`
  flex: 1;
  min-width: 0;
`;

const SubmitButton = styled(FancyButton)`
  align-self: flex-start;
  margin-top: 0.25rem;
`

export const WaypointInputFields: React.FC<{
  onSubmit: (value: Waypoint) => void
}> = ({ onSubmit }) => {
  const [inputName, setInputName] = React.useState('');
  const [inputX, setInputX] = React.useState('');
  const [inputY, setInputY] = React.useState('');
  const [inputZ, setInputZ] = React.useState('');

  return (
    <Form onSubmit={(event) => {
      event.preventDefault();
      onSubmit({
        name: inputName,
        coord: { x: Number(inputX), y: Number(inputY), z: Number(inputZ) },
      });
      setInputName('');
      setInputX('');
      setInputY('');
      setInputZ('');
    }}>
      <LabeledValue label="Name:" value={inputName} onChange={v => setInputName(String(v))} />
      <CoordRow>
        <NarrowField>
          <LabeledValue label="X:" value={inputX} onChange={v => setInputX(String(v))} />
        </NarrowField>
        <NarrowField>
          <LabeledValue label="Y:" value={inputY} onChange={v => setInputY(String(v))} />
        </NarrowField>
        <NarrowField>
          <LabeledValue label="Z:" value={inputZ} onChange={v => setInputZ(String(v))} />
        </NarrowField>
      </CoordRow>
      <SubmitButton type="submit">Submit</SubmitButton>
    </Form>
  );
};
