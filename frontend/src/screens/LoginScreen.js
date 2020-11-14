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
        <div className="container">
            <div className="container-forms">
                <div className="container-info">
                    <div className="info-item">
                        <div className="table">
                            <div className="table-cell">
                                <p>
                                    Have an account?
                            </p>
                                <div className="btn">
                                    Log in
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="info-item">
                        <div className="table">
                            <div className="table-cell">
                                <p>
                                    Don't have an account?
                            </p>
                                <div className="btn">
                                    Sign up
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-form">
                    <div className="form-item log-in">
                        <div className="table">
                            <div className="table-cell">
                                <input name="Username" placeholder="Username" type="text" /><input name="Password"
                                    placeholder="Password" type="Password" />
                                <div className="btn">
                                    Log in
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-item sign-up">
                        <div className="table">
                            <div className="table-cell">
                                <input name="email" placeholder="Email" type="text" /><input name="fullName"
                                    placeholder="Full Name" type="text" /><input name="Username" placeholder="Username"
                                        type="text" /><input name="Password" placeholder="Password" type="Password" />
                                <div className="btn">
                                    Sign up
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        // <div classNameName="login">
        //     <div classNameName="login-forms">
        //         <div classNameName="login-info">
        //             <div classNameName="info-item">
        //                 <div classNameName="table">
        //                     <div classNameName="table-cell">
        //                         <p>
        //                             Have an account?
        //                         </p>
        //                         <div classNameName="btn">
        //                             Log in
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //             <div classNameName="info-item">
        //                 <div classNameName="table">
        //                     <div classNameName="table-cell">
        //                         <p>
        //                             Don't have an account?
        //                         </p>
        //                         <div classNameName="btn">
        //                             Sign up
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //         <div classNameName="login-form">
        //             <div classNameName="form-item log-in">
        //                 <div classNameName="table">
        //                     <div classNameName="table-cell">
        //                         <input name="Username" placeholder="Username" type="text" /><input name="Password"
        //                             placeholder="Password" type="Password" />
        //                         <div classNameName="btn">
        //                             Log in
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //             <div classNameName="form-item sign-up">
        //                 <div classNameName="table">
        //                     <div classNameName="table-cell">
        //                         <input name="email" placeholder="Email" type="text" /><input name="fullName"
        //                             placeholder="Full Name" type="text" /><input name="Username" placeholder="Username"
        //                                 type="text" /><input name="Password" placeholder="Password" type="Password" />
        //                         <div classNameName="btn">
        //                             Sign up
        //                     </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        // <form onSubmit={submitHandler}>
        //     <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        //     <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

        //     <button type="submit">Sign In</button>
        // </form>
    )
}

export default LoginScreen;
