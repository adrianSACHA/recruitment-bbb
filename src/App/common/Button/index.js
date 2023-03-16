import styled from "styled-components";

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 16px;
  width: fit-content;
  background: ${({theme}) => theme.color.buttonBackground};
  border: 1px solid ${({theme}) => theme.color.dividerBackground};
  border-radius: 4px;
  color: ${({theme}) => theme.color.buttonText};
  font-weight: 600;
  font-size: 12px;
  text-decoration: none;
  transition: box-shadow 0.3s;

  &:hover {
    cursor: pointer;
    box-shadow: 2px -2px 0px #8cc2ff, -2px 2px 0px #8cc2ff, 2px 2px 0px #8cc2ff,
      -2px -2px 0px #8cc2ff;
  }

  &:active {
    box-shadow: inset 0 2px 0 #14462033;
  }

  @media (max-width: ${({theme}) => theme.breakpoint.s}px) {
    font-size: 10px;
  }
`;

