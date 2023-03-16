import styled from "styled-components";

export const MainWrapper = styled.div`
  margin: 52px auto 40px;
  display: flex;
  justify-content: center;
  max-width: 100%;
`;

export const Wrapper = styled.div`
  background-color: ${({theme}) => theme.color.mainBackgroundColor};
  color: black;
  border-radius: 5px;
  margin: 10px 20px;
  padding: 10px 10px;
  max-width: 966px;
`;

export const Header = styled.h2`
  padding: 20px 0px;
  margin: 0;
  font-size: 20px;
`;
