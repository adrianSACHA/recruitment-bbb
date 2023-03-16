import {useEffect, useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
import {toUpdate} from "../../Core/routes";

const Read = () => {
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
        <div className="read">
            <ul>
                <li>
                    <span>Id</span>
                    <span>First Name</span>
                    <span>Last Name</span>
                    <span>Update</span>
                    <span>Delete</span>
                </li>
                {APIData.map((data) => {
                    return (
                        <li key={data.id}>
                            <span>{data.id}</span>
                            <span>{data.firstName}</span>
                            <span>{data.lastName}</span>
                            <Link to={toUpdate}>
                                    <span>
                                        <button onClick={() => setData(data)}>Update</button>
                                    </span>
                            </Link>
                            <span>                                   <button onClick={() => onDelete(data.id)}>Delete</button>
                                </span>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Read;


