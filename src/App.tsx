import styled from 'styled-components'
import * as React from 'react';
import { Hello } from './Hello.tsx';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
`

const Heading = styled.h1`
  font-size: 2rem;
  color: #333;
`
const colorMap = new Map();

colorMap.set(0, '#F7FCF5');
colorMap.set(1, '#E5F5E0');
colorMap.set(2, '#C7E9E0');
colorMap.set(3, '#A1D99B');
colorMap.set(4, '#74C476');
colorMap.set(6, '#C7E9E0');
colorMap.set(7, '#F7FCF5');
colorMap.set(8, '#E5F5E0');
colorMap.set(9, '#C7E9E0');

const MoodButton = styled.button<{ $active: boolean }>`
  background-color: ${({ $active }) => $active ? 'blue' : ''};
  color: ${({ $active }) => $active ? 'white' : ''};
`

export default function App() {
  const [clicks, setClicks] = React.useState(0);
  const [grClicks, setGrClicks] = React.useState(0);
  const [mood, setMood] = React.useState('meh');
  const [name, setName] = React.useState('"first name"');
  const [lastName, setLastName] = React.useState('"last name"')


const GreenButton = styled.button<{ $active: boolean }>`
  background-color: ${colorMap.get(grClicks)};
`

  return (
    <Wrapper>
      <Heading>
        <input
          type={"text"}
          value={name}
          onChange={(event) => {
            setName(event.target.value)
          }}
        />
        <input
          type={"text"}
          value={lastName}
          onChange={(event) => {
            setLastName(event.target.value)
          }}
        />
        <Hello
          person={name + " " + lastName}
          feeling={mood}
        ></Hello>
        <button onClick={() => setClicks(clicks + 1)}>
          I've been clicked {clicks} times
        </button>
        <MoodButton $active={mood === 'excited'} onClick={() => setMood('excited')}>
          Excited!
        </MoodButton>
        <MoodButton $active={mood === 'meh'} onClick={() => setMood('meh')}>
          Meh
        </MoodButton>
        <MoodButton $active={mood === 'confused'} onClick={() => setMood('confused')}>
          Confused?
        </MoodButton>
        <GreenButton onClick={() => setGrClicks(grClicks + 1)}>
          Green :)
        </GreenButton>
      </Heading>
    </Wrapper>
  )
}
