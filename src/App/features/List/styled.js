import styled, { css, keyframes } from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as Elipse } from "./elipse.svg";

export const StyledList = styled.ul`
  list-style: none;
  display: grid;
  margin: 0;
  padding-left: 0;
  grid-gap: 10px;
`;

export const StyledListItem = styled.li`
  display: grid;
  grid-template-columns: 0.5fr 1fr 1fr 1fr;
  align-items: center;
  justify-items: center;
  grid-gap: 5px;

  &:hover,
  &:nth-child(0n) {
    background-color: ${({ theme }) => theme.color.listOnHover};
  }

  ${({ header }) =>
    header &&
    css`
      font-weight: bold;
      font-size: 16px;
      margin: 5px;
    `}

  @media (max-width: ${({ theme }) => theme.breakpoint.s}px) {
    display: grid;
    grid-template-columns: 0.5fr 1fr 1fr;
    grid-auto-flow: dense;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const StyledDiv = styled.div`
  align-items: center;
`;

export const StyledButtons = styled.div`
  display: flex;
  gap: 10px;
  @media (max-width: ${({ theme }) => theme.breakpoint.s}px) {
    grid-column: span 3;
    display: flex;
    justify-content: space-between;
  }
`;

const rotation = keyframes`
 to {
    transform: rotate(360deg);
  }
`;

export const Loading = styled(Elipse)`
  display: flex;
  margin: 20vh auto;
  justify-content: center;
  align-items: center;
  animation: ${rotation} 1.3s linear infinite;
`;

export const ErrorMessage = styled.div`
  font-size: x-large;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 20vh;
`;
