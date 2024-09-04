import styled from "styled-components";

export const Button = styled.button`
  width: 60px;
  height: 90px;
  background-color: ${(props) => (props.isBorrowed ? "#f44336" : "#4CAF50")};
  color: white;
  border: none;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: ${(props) => (props.isBorrowed ? "#d32f2f" : "#388e3c")};
  }
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 12px;
  margin-top: 8px;
`;
