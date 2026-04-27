import styled from 'styled-components'

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

export default function App() {
  return (
    <Wrapper>
      <Heading>Hello World</Heading>
    </Wrapper>
  )
}
