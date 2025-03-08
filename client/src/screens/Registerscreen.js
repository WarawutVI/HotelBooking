import React, { useState } from 'react';
import '../css/Registerscreen.css';
import axios from 'axios';

function Registerscreen() {
    const [name, setName] = useState('');
    const [emaill, setEmaill] = useState('');
    const [password, setPassword] = useState('');
    const [cpassword, setCpassword] = useState('');

    function isValidEmaill(emaill) {
        return /^\S+@\S+\.\S+$/.test(emaill); // Simple email format validation
    }

    async function register() {
        if (!isValidEmaill(emaill)) {
            alert('Please enter a valid emaill address.');
            return;
        }

        if (password !== cpassword) {
            alert('Passwords do not match.');
            return;
        }

        const user = {
            name,
            emaill,
            password
        };

        try {
            const { data } = await axios.post("http://localhost:5000/api/users/register", user);
            console.log("User registered:", data);
            alert('Register successful');
            window.location.href = "/login";
        } catch (error) {
            console.error("Registration error:", error);
            alert('Registration failed. Please try again.');
        }
    }

    return (
        <div>
            <div className='boxcard'>
                <div className='row justify-content-center mt-5 bs'>
                    <div className='col-md-5'>
                        <div>
                            <h1>Register</h1>
                            <input
                                type='text'
                                className='form-control'
                                placeholder='Name'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <input
                                type='emaill' // Ensures only emails are entered
                                className='form-control'
                                placeholder='Emaill'
                                value={emaill}
                                onChange={(e) => setEmaill(e.target.value)}
                            />
                            <input
                                type='password'
                                className='form-control'
                                placeholder='Password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <input
                                type='password'
                                className='form-control'
                                placeholder='Confirm Password'
                                value={cpassword}
                                onChange={(e) => setCpassword(e.target.value)}
                            />
                        </div>
                        <button className='btn btn-primary mt-3' onClick={register}>
                            Register
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Registerscreen;
