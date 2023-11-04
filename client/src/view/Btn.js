// import styled components + the css helper
import styled, { css } from "styled-components";

// create the Button styled componnet
const Btn = styled.button`
  border-radius: 4px;
  padding: 6px 16px;
  min-width: 64px;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 0.875rem;
  letter-spacing: 0.02857em;
  line-height: 1.75;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;

  /* Use a function value that takes props as argument. Return eventual CSS value in "backgeroundColor" */
  background-color: ${(props) => props.bg};
  color: ${(props) => props.color};

  /* Pass a function to compose key-value styles. The function accepts props as argument. Return eventual CSS property and value in "colorAndBorder" */
  ${(props) => colorAndBorder(props)}
`;
const colorToValue = {
  primary: "#1976d2",
  secondary: "rgb(220, 0, 78)",
};
const colorAndBorder = (props) => {
  var finalColor = "white";
  if (props.variant === "outlined") {
    if (colorToValue[props.color]) {
      finalColor = colorToValue[props.color];
    } else {
      finalColor = "black";
    }
  } else if (props.variant === "contained") {
    if (props.color) {
      finalColor = "white";
    } else {
      finalColor = "black";
    }
  }
  // Use the css helper function to generate CSS from a template literal with interpolations.
  return css`
    color: ${finalColor};
    border: ${(prop) =>
      props.variant === "outlined" ? "1px solid " + finalColor : "none"};
  `;
};
export default Btn;
