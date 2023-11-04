import styled from "styled-components";

const IconButton = styled.button`
  background: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
  font-size: 20px;
  color: #e74c3c;

  &:hover {
    transform: scale(1.1);
    transition: transform 0.2s;
  }
`;

export default IconButton;
