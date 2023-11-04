import styled from "styled-components";

const Wrapper = styled.div`
  background: #f5f5f5;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  background-color: ${(props) => props.theme.background};

`;
export default Wrapper;
