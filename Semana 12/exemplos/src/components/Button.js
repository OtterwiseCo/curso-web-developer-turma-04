import styled from "styled-components";

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0.5em 1em;

  ${(props) => (props.padding ? `padding: ${props.padding};` : "")}
  ${(props) => (props.outlined ? `border: 1px solid black;` : "")}
`;

export default Button;
