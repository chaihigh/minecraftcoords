import styled from 'styled-components';
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

const DescriptionInput = styled.textarea`
  font-size: 1rem;
  color: #334c33;
  border: 1px solid #aaf;
  border-radius: 4px;
  padding: 0.3rem 0.5rem;
  background: transparent;
  width: 100%;
  height: 5rem;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: #334c33;
  }
`;

export const DescriptionLabeledValue: React.FC<{
  label: string;
  value: string;
  onChange: (value: string) => void;
}> = ({ label, value, onChange }) => {

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e.target.value);
  };

  return (
    <Wrapper>
      <Label>{label}</Label>
      <DescriptionInput
        value={value}
        onChange={handleChange}
      />
    </Wrapper>
  );
}