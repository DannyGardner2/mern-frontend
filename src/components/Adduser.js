import React from 'react';
import { useState } from 'react'
import axios from "axios"

function Adduser() {
    const [user, setUser] = useState({
        name: '',
        age: '',
    })

    const handleChange = (event) => {
        const { name, value } = event.target
        setUser(prevUser => {
            return {
                ...prevUser,
                [name]: value
            }
        })
    }

    const handleClick = (event) => {
        event.preventDefault()
        console.log(user)
        const newUser = {
            name: user.name,
            age: user.age
        }
        axios.post('http://localhost:8000/api/users', newUser)
    }
    return (
        <div className='container'>
            <h1>Create User</h1>
            <form>
                <div className='form-group'>
                    name:
                    <input onChange={handleChange} name="name" value={user.name}></input>
                </div>
                <div className='form-group'>
                    age:
                    <input onChange={handleChange} name="age" value={user.age}></input>
                </div>
                <button onClick={handleClick} className='btn btn-lg btn-info'>Add User</button>
            </form>
        </div>
    )
}

export default Adduser