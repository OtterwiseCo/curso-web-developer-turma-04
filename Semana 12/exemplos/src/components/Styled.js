import styled from "styled-components";

import Button from "./Button";

function Styled() {
  return <StyledButton>Meu botão</StyledButton>;
}

const StyledButton = styled(Button)`
  background-color: black;
`;

export default Styled;
