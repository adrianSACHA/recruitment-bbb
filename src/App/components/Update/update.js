import React, {useState, useEffect} from 'react';
import {Button, Form} from 'semantic-ui-react'
import {toRead} from "../../Core/routes";
import {useNavigate} from "react-router-dom";
import axios from "axios";

export default function Update() {
    let navigate = useNavigate();
    const [id, setID] = useState(null);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    useEffect(() => {
        setID(localStorage.getItem('ID'))
        setFirstName(localStorage.getItem('First Name'));
        setLastName(localStorage.getItem('Last Name'));
    }, []);

    const updateAPIData = () => {
        axios.put(`https://641217e8f9fe8122ae1c80a3.mockapi.io/fakeData/${id}`, {
            firstName,
            lastName,
        }).then(() => {
            navigate(toRead)
        })
    }

    return (
        <div>
            <Form className="create-form">
                <Form.Field>
                    <label>First Name</label>
                    <input placeholder='First Name'
                           type="text"
                           value={firstName} onChange={({target}) => setFirstName(target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input type="text" placeholder='Last Name' value={lastName}
                           onChange={({target}) => setLastName(target.value)}/>
                </Form.Field>
                <Button type='submit' onClick={updateAPIData}>Update</Button>
            </Form>
        </div>
    )
}
