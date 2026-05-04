import styled from "styled-components";
import * as React from 'react';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.span`
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #6b7280;
`;

const Input = styled.input`
  font-size: 1rem;
  color: #334c33;
  border: 1px solid #aaf;
  border-radius: 4px;
  padding: 0.3rem 0.5rem;
  background: transparent;
  width: 100%;

  &:focus {
    outline: none;
    border-color: #334c33;
  }
`;

export const LabeledValue: React.FC<{
  label: string;
  value: string | number;
  onChange: (value: string | number) => void;
}> = ({ label, value, onChange }) => {

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(typeof value === "number" ? e.target.valueAsNumber : e.target.value);
  };

  return (
    <Wrapper>
      <Label>{label}</Label>
      <Input
        type={typeof value === "number" ? "number" : "text"}
        value={value}
        onChange={handleChange}
      />
    </Wrapper>
  );
}
