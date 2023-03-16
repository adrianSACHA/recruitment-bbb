import styled from "styled-components";
import {Link, NavLink} from "react-router-dom";

export const MainWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
  background-color: #282c34;
`;

export const Wrapper = styled.div`
  font-style: normal;
  font-size: 14px;
  text-transform: uppercase;
  gap: 20px;
  display: flex;
  align-items: center;
  text-align: center;
  max-width: 1366px;
`;

export const StyledNav = styled.nav`
  display: flex;
  gap: 20px;
  margin-right: 20px
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({theme}) => theme.color.white};
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  font-size: large;
  color: ${({theme}) => theme.color.white};
  transition: 0.3s;

  &:hover {
    transform: scale(1.1);
    font-weight: bold;
    color: ${({theme}) => theme.color.bondiBlue};
  }

  &.active {
    font-weight: bold;
    text-decoration: underline;
  }
`;
