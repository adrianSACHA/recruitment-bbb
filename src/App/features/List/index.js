import {useEffect, useState} from 'react';
import axios from "axios";
import {toUpdate} from "../../Core/routes";
import {StyledLink, StyledList, StyledListItem} from "./styled";
import {MainWrapper, Wrapper} from "../../common/Wrapper/styled";
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
                        <span>Id</span>
                        <span>First Name</span>
                        <span>Last Name</span>
                        <span>Update</span>
                        <span>Delete</span>
                    </StyledListItem>
                    {APIData.map((data) => {
                        return (
                            <StyledListItem key={data.id}>
                                <span>{data.id}</span>
                                <span>{data.firstName}</span>
                                <span>{data.lastName}</span>
                                <StyledLink to={toUpdate}>
                                    <span>
                                        <StyledButton onClick={() => setData(data)}>Update</StyledButton>
                                    </span>
                                </StyledLink>
                                <span>
                                <StyledButton
                                    onClick={() => onDelete(data.id)}>Delete</StyledButton>
                                </span>
                            </StyledListItem>
                        )
                    })}
                </StyledList>
            </Wrapper>
        </MainWrapper>
    )
}

export default List;


