import {useEffect, useState} from 'react';
import axios from "axios";
import {toUpdate} from "../../Core/routes";
import {StyledButtons, StyledDiv, StyledLink, StyledList, StyledListItem} from "./styled";
import {MainWrapper, Wrapper} from "../../common/Wrapper";
import {StyledButton} from "../../common/Button";

const List = () => {
    const [APIData, setAPIData] = useState([]);
    useEffect(() => {
        axios.get(`https://641217e8f9fe8122ae1c80a3.mockapi.io/fakeData`)
            .then((response) => {
                setAPIData(response.data);
            })
    }, []);

    const setData = (data) => {
        let {id, firstName, lastName} = data;
        localStorage.setItem('ID', id);
        localStorage.setItem('First Name', firstName);
        localStorage.setItem('Last Name', lastName);
    }

    const getData = () => {
        axios.get(`https://641217e8f9fe8122ae1c80a3.mockapi.io/fakeData`)
            .then((getData) => {
                setAPIData(getData.data);
            })
    }

    const onDelete = (id) => {
        axios.delete(`https://641217e8f9fe8122ae1c80a3.mockapi.io/fakeData/${id}`)
            .then(() => {
                getData();
            })
    }

    return (
        <MainWrapper>
            <Wrapper>
                <StyledList>
                    <StyledListItem header>
                        <StyledDiv>Id</StyledDiv>
                        <StyledDiv>First Name</StyledDiv>
                        <StyledDiv>Last Name</StyledDiv>
                        <StyledButtons>
                            <StyledDiv>Update</StyledDiv>
                            <StyledDiv>Delete</StyledDiv>
                        </StyledButtons>
                    </StyledListItem>
                    {APIData.map((data) => {
                        return (
                            <StyledListItem key={data.id}>
                                <StyledDiv>{data.id}</StyledDiv>
                                <StyledDiv>{data.firstName}</StyledDiv>
                                <StyledDiv>{data.lastName}</StyledDiv>
                                <StyledButtons>
                                    <StyledLink to={toUpdate}>
                                        <StyledDiv>
                                            <StyledButton onClick={() => setData(data)}>Update</StyledButton>
                                        </StyledDiv>
                                    </StyledLink>
                                    <StyledDiv>
                                        <StyledButton
                                            onClick={() => onDelete(data.id)}>Delete</StyledButton>
                                    </StyledDiv>
                                </StyledButtons>
                            </StyledListItem>
                        )
                    })}
                </StyledList>
            </Wrapper>
        </MainWrapper>
    )
}

export default List;


