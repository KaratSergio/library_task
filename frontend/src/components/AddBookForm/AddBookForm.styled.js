import styled from "styled-components";

export const FormWrapper = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  padding: 16px;
`;

export const FormTitle = styled.h1`
  font-size: 24px;
  margin-bottom: 16px;
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 16px;
`;

export const FormInput = styled.input`
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const FormButton = styled.button`
  padding: 10px;
  font-size: 16px;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
  text-align: center;
`;
