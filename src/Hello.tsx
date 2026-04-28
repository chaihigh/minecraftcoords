import * as React from 'react';

const FeelingSuffixes = {
  'excited': '!',
  'confused': '?'
}
export const Hello = ({ person, feeling }) => {
  const suffix = FeelingSuffixes[feeling] ?? '.';
  return <p>Hello {person}{suffix}</p>
}