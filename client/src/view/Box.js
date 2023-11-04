import styled from "styled-components";

const Box = styled.div`
  margin: ${(props) => props.m};
  padding: ${(props) => props.p};
  display: ${(props) => props.display};
  flex: ${(props) => props.flex};
  flex-wrap: ${(props) => props.flexWrap};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  align-self: ${(props) => props.alignSelf};
  align-content: ${(props) => props.alignContent};

  background-color: ${(props) => props.color || props.theme.background};
  color: ${(props) => props.theme.text};
`;

export default Box;
