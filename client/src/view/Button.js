import styled from "styled-components";

const Button = styled.button`
  background: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  background-color: ${(props) => props.color || props.theme.background};
`;
export default Button;
