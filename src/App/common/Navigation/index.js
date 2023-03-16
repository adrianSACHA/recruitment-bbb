import {MainWrapper, StyledLink, StyledNav, StyledNavLink, Wrapper} from "./styled";
import {toCreate, toList} from "../../Core/routes";

export const Navigation = () => (
    <MainWrapper>
        <Wrapper>
            <StyledLink to="/">
                <h1>Recruitment Task BBB</h1>
            </StyledLink>
            <StyledNav>
                <StyledNavLink to={toCreate}>
                    Add New
                </StyledNavLink>
                <StyledNavLink to={toList}>
                    List
                </StyledNavLink>
            </StyledNav>
        </Wrapper>
    </MainWrapper>
)
