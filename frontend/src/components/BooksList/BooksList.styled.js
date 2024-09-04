import styled from "styled-components";

export const ButtonAdd = styled.button`
  margin: 10px 0 10px 28px;
  padding: 10px 22px;
  background-color: #f44336;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: #d32f2f;
  }
`;

export const ErrorMessage = styled.p`
  margin: 40px 0px 0px 80px;
  color: red;
  font-weight: 800;
  font-size: 32px;
`;
