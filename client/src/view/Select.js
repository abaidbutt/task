import styled from "styled-components";

const Select = styled.select`
  appearance: none; /* Remove the default appearance */
  padding: 10px; /* Adjust padding as needed */
  border: 1px solid #ccc; /* Add a border */
  border-radius: 4px; /* Rounded corners */
  background-color: #fff; /* Background color */
  cursor: pointer; /* Show a pointer cursor on hover */
  color: #333; /* Text color */
  font-size: 16px; /* Font size */
  width: 100%; /* Full width */

  /* Add any other styles you need */

  /* Arrow icon for select dropdown */
  &::-ms-expand {
    display: none; /* Remove the default arrow icon in IE */
  }

  &::after {
    content: "▼"; /* Custom arrow icon, you can replace it with your own */
    position: absolute;
    top: 50%;
    right: 10px; /* Adjust the right position as needed */
    transform: translateY(-50%);
  }
`;
export default Select;
