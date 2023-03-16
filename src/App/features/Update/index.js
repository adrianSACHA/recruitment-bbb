import React, {useState, useEffect, useRef} from 'react';
import {toList} from "../../Core/routes";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {MainWrapper, Wrapper} from "../../common/Wrapper/styled";
import {ButtonWrapper, Form, Input, Label} from "./styled";
import {StyledButton} from "../../common/Button";

export default function Update() {
    let navigate = useNavigate();
    const [id, setID] = useState(null);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const inputRef = useRef('');

    useEffect(() => {
        setID(localStorage.getItem('ID'))
        setFirstName(localStorage.getItem('First Name'));
        setLastName(localStorage.getItem('Last Name'));
    }, []);

    const onFormSubmit = (e) => {
        e.preventDefault();
        inputRef.current.focus();
        updateAPIData();
    };

    const updateAPIData = () => {
        axios.put(`https://641217e8f9fe8122ae1c80a3.mockapi.io/fakeData/${id}`, {
            firstName, lastName,
        }).then(() => {
            navigate(toList)
        })
    }

    return (<MainWrapper>
            <Wrapper>
                <Form onSubmit={onFormSubmit}>
                    <Label>First Name</Label>
                    <Input ref={inputRef}
                           required
                           placeholder='First Name'
                           type="text"
                           value={firstName} onChange={({target}) => setFirstName(target.value)}/>
                    <Label>Last Name</Label>
                    <Input ref={inputRef} required
                           type="text"
                           placeholder='Last Name'
                           value={lastName}
                           onChange={({target}) => setLastName(target.value)}/>
                    <ButtonWrapper>
                        <StyledButton onClick={updateAPIData}>Update</StyledButton>
                    </ButtonWrapper>
                </Form>
            </Wrapper>
        </MainWrapper>)
}
