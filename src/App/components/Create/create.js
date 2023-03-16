import {Button, Form} from "semantic-ui-react";
import {useState} from 'react';
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {toRead} from "../../Core/routes";

export const Create = () => {
    let navigate = useNavigate();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const postData = () => {
        axios.post(`https://641217e8f9fe8122ae1c80a3.mockapi.io/fakeData`, {
            firstName,
            lastName
        }).then(() => {
    navigate(toRead);
        })
    }
    return (
        <form className="ui large form">
            <Form.Field className="two fields">
                <div className="field">
                    <label className="create__label">First Name</label>
                    <input placeholder="First Name" onChange={({target}) => setFirstName(target.value)} type="text"/>
                </div>
                </Form.Field><Form.Field>
                <div className="field">
                    <label className="create__label">Last Name</label>
                    <input placeholder="Last Name" onChange={({target}) => setLastName(target.value)} type="text"/>
                </div>
            </Form.Field>
            <button onClick={postData} type={"submit"} className="ui submit button">Submit</button>
        </form>
    )
}

export default Create;
