import styled, {css} from "styled-components";
import {Link} from "react-router-dom";

export const StyledList = styled.ul`
  list-style: none;
  display: grid;
  margin: 0;
  padding-left: 0;
  grid-gap: 10px;
  max-width: 500px;
`;

export const StyledListItem = styled.li`
  display: grid;
  grid-template-columns: 0.5fr 1fr 1fr 1fr 1fr;
  align-items: center;
  justify-items: center;
  grid-gap: 10px;

  &:hover,
  &:nth-child(0n) {
    background-color: ${({theme}) => theme.color.switcherBackground};
  }

  ${({header}) =>
          header &&
          css`
            font-weight: bold;
            font-size: 16px;
            margin: 5px;
          `}
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;
