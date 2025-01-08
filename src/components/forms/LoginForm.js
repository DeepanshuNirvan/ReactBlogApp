import React, { useState } from 'react'

export const LoginForm = (props) => {
    const {isLogin,setLogin}=props;
    const [role, setRole] = useState('');
    const [credentials, setCredentials] = useState({ email: '', password: '' });
    const handleChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        });
    }
    const getUser = async (e) => {
        e.preventDefault()
        const response = await fetch("http://localhost:3002/login", {
            method: "POST",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify(credentials)
        });
        const result = await response.json();
        setLogin(result.isLogin);
        setRole(result.role);
    }
    return (
        <div className="container p-5 border rounded bg-light shadow-lg" style={{ "marginTop": "8%", "marginBottom": "4%", "width": "35vw" }}>
            <h2>Login</h2>
            <form>
                <div className="mb-3">
                    <input type="email" className="form-control shadow-sm" placeholder="Email" name="email" value={credentials.email} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <input type="password" className="form-control shadow-sm" placeholder="Password" name="password" value={credentials.password} onChange={handleChange} required />
                </div>

                <div className="mb-3">
                    <button type="submit" className="btn btn-primary w-100 shadow" id="loginbtn" onClick={getUser} >Login</button>
                </div>
                <div className="mb-3 text-danger">
                    <h6>{isLogin && role}</h6>
                </div>
            </form>
        </div>
    )
}
