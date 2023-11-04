import styled from "styled-components";

const Container = styled.div`
  max-width: ${(props) => {
    switch (props.maxWidth) {
      case "sm":
        return "576px"; // Small screens
      case "md":
        return "768px"; // Medium screens
      case "lg":
        return "992px"; // Large screens
      case "xl":
        return "1200px"; // Extra-large screens
      case "xs":
        return "100%"; // Full width
      default:
        return "100%"; // Default to full width
    }
  }};
  margin-left: auto;
  margin-right: auto;
  padding: 0 15px;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  padding:20px;
`;

export default Container;
