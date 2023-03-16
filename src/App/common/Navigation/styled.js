import styled from "styled-components";
import {Link, NavLink} from "react-router-dom";

export const MainWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
  background-color: ${({theme}) => theme.color.mainBackgroundColor};
`;

export const Wrapper = styled.div`
  font-style: normal;
  font-size: 14px;
  text-transform: uppercase;
  gap: 20px;
  display: flex;
  align-items: center;
  text-align: center;
  max-width: ${({theme}) => theme.color.xl}px;

  @media (max-width: ${({theme}) => theme.breakpoint.m}px) {
    flex-direction: column;
    gap: 5px;
  }
`;

export const StyledNav = styled.nav`
  display: flex;
  gap: 20px;
  margin-right: 20px;
  align-items: center;

  @media (max-width: ${({theme}) => theme.breakpoint.m}px) {
    padding-bottom: 10px;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({theme}) => theme.color.navigationText};
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  font-size: large;
  color: ${({theme}) => theme.color.navigationText};
  transition: 0.3s;

  &:hover {
    transform: scale(1.1);
    font-weight: bold;
    color: ${({theme}) => theme.color.secondText};
  }

  &.active {
    font-weight: bold;
    text-decoration: underline;
  }
`;
