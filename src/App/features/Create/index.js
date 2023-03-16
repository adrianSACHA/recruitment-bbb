import {useRef, useState} from 'react';
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {toList} from "../../Core/routes";
import {MainWrapper, Wrapper} from "../../common/Wrapper";
import {ButtonWrapper, Form, Input, Label} from "./styled";
import {StyledButton} from "../../common/Button";

const Create = () => {
    let navigate = useNavigate();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const inputRef = useRef(null);
    const onFormSubmit = (e) => {
        e.preventDefault();
        inputRef.current.focus();
        postData();
    };

    const postData = () => {
        axios.post(`https://641217e8f9fe8122ae1c80a3.mockapi.io/fakeData`, {
            firstName,
            lastName
        }).then(() => {
            navigate(toList);
        })
    }
    return (
        <MainWrapper>
            <Wrapper>
                <Form onSubmit={onFormSubmit}>
                    <Label>First Name</Label>
                    <Input ref={inputRef}
                           required
                           placeholder="First Name"
                           onChange={({target}) => setFirstName(target.value)}
                           type="text"/>
                    <Label>Last Name</Label>
                    <Input ref={inputRef}
                           required
                           placeholder="Last Name"
                           onChange={({target}) => setLastName(target.value)}
                           type="text"/>
                    <ButtonWrapper>
                        <StyledButton>Add</StyledButton>
                    </ButtonWrapper>
                </Form>
            </Wrapper>
        </MainWrapper>
    )
}

export default Create;
