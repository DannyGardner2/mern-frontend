import React from 'react';
import { useEffect, useState } from 'react'
import axios from 'axios';

const List = () => {
    
    const url = "http://localhost:8000"
    const [user, setUser] = useState([])
    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((json) => setUser(json))
    }, [user])

    const handleClick = (id) => {
        axios.delete(`http://localhost:8000/api/users/${id}`)
    }

    return (
        <div>
            {user.map(item => {
                return (
                    <div>
                        <h1>{item.name}</h1>
                        <h2>{item.age}</h2>
                        <h4>{item._id}</h4>
                        <button onClick={() => handleClick(item._id)} className='btn btn-lg btn-info'>delete</button>
                    </div>
                )
            })}
        </div>
    )
}

export default List