import styled from "styled-components";

const ListItem = styled.li`
  list-style-type: none;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  &.completed {
    background-color: #c1f7d5; /* Style for completed tasks */
  }

  span {
    font-size: 20px;
    cursor: pointer;
    margin-right: 10px;
  }

  div {
    flex: 1;

    strong {
      font-size: 18px;
    }

    p {
      font-size: 14px;
      color: #555;
    }
  }

  button {
    background: #e74c3c;
    color: #fff;
    border: none;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
  }
`;

export default ListItem;
