import styled from 'styled-components';

export default function Home() {
  return (
    <div>
      <h1>Hello Next.js</h1>
      <Button>Click Me!</Button>
    </div>
  )
}

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
