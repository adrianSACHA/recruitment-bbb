import styled from "styled-components";

export const MainWrapper = styled.div`
  margin: 16px auto 40px;
  display: flex;
  justify-content: center;
  max-width: 100%;
`;

export const Wrapper = styled.div`
  background-color: ${({theme}) => theme.color.sectionBackgroundColor};
  color: ${({theme}) => theme.color.mainText};
  border-radius: 5px;
  margin: 10px 20px;
  padding: 10px 10px;
  max-width: ${({theme}) => theme.breakpoint.l}px;
`;

export const Header = styled.h2`
  padding: 20px 0;
  margin: 0;
  font-size: 20px;
`;
