import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: sans-serif;
    line-height: 1.5;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

export const FancyButton = styled.button`
  border: none;
  background: #ccccff99;
  color: #334c33;
  cursor: pointer;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  font-size: 0.9rem;

  &:hover {
    background: #ccf;
  }
`;