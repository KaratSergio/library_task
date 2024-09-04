import styled from "styled-components";

export const BookItemWrapper = styled.div`
  width: 660px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const BookDetailsTable = styled.table`
  width: 100%;
  max-width: 600px;
  border-collapse: collapse;

  td {
    padding: 4px 8px;
    border: 1px solid #ddd;
  }

  tr:nth-child(odd) {
    background-color: #f9f9f9;
  }

  td:nth-child(1) {
    width: 100px;
    font-weight: 600;
  }

  td:nth-child(2) {
    width: 400px;
    font-style: italic;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ButtonUpdate = styled.button`
  width: 100%;
  height: 62px;
  background-color: #1976d2;
  color: white;
  border: none;
  border-top-right-radius: 4px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: #1565c0;
  }
`;
