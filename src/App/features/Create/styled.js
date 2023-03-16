import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  margin: 5px;
`;

export const Form = styled.form`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
`;

export const Input = styled.input`
  padding: 5px;
  margin: 10px;
  max-width: 200px;
  border-radius: 5px;

  &:required {
    border-color: ${({ theme }) => theme.color.borderOnInput};
  }
`;

export const ButtonWrapper = styled.div`
  grid-column: span 2;
  display: flex;
  justify-content: center;
`;
