import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../actions/userActions';
import { activeClass } from '../js/main';

const LoginScreen = ({ location, history }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    const userLogin = useSelector(state => state.userLogin);
    const { error, userInfo } = userLogin;

    const redirect = location.search ? location.search.split("=")[1] : '/';

    useEffect(() => {
        if (userInfo) {
            history.push(redirect);
        }

        activeClass();


    }, [history, userInfo, redirect]);

    const submitHandler = e => {
        e.preventDefault();
        dispatch(login(email, password));
    }

    return (
        <div className="login">
            <div className="login-container">
                <h1>Welcome</h1>
                <p>Pleas login to your account</p>
                <form onSubmit={submitHandler} className="login-form">
                    <label htmlFor="email">Email</label>
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />

                    <label htmlFor="password">Password</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

                    <button type="submit">Sign In</button>
                </form>
            </div>
        </div>


    )
}

export default LoginScreen;
