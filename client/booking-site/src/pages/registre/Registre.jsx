import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './registre.css';





const PWD_REGEX = /^.{6,}$/;
const REGISTER_URL = 'http://localhost:5500/api/auth/registre';


const Registre = () => {

    const navigate = useNavigate();
    const errRef = useRef();

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);



    const handleSubmit = async (e) => {
        e.preventDefault();
        const isPwdValid = PWD_REGEX.test(password);

        if (!isPwdValid) {
            setErrMsg("Invalid Entry");
            return;
        }

        try {
            const response = await axios.post(REGISTER_URL, {
                username: username,
                email: email,
                password: password,
            }, {
                headers: { 'Content-Type': 'application/json' },
            });

            console.log(response?.data);
            console.log(response?.accessToken);
            console.log(JSON.stringify(response));
            setSuccess(true);

            setTimeout(() => {
                localStorage.setItem('user', JSON.stringify(response.data?.newUser));
                navigate('/');
            }, 2000);

            setUsername('');
            setEmail('');
            setPassword('');
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 409) {
                setErrMsg('Username Taken');
            } else {
                setErrMsg('Registration Failed');
            }
            errRef.current.focus();
        }
    };

    return (
        <div className="registration-container">
            <div ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</div>
            <h2>Registration</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:
                    </label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="register-button">
                    Registre
                </button>
            </form>
        </div>
    );
};

export default Registre;

// const [registrationData, setRegistrationData] = useState({
//     username: '',
//     email: '',
//     password: '',
// });

// const { loading, error, dispatch } = useContext(AuthContext); // Assuming you have an AuthContext

// const navigate = useNavigate();

// const handleRegistrationChange = (e) => {
//     setRegistrationData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
// };

// const handleRegistration = async (e) => {
//     e.preventDefault();
//     dispatch({ type: "REGISTER_START" });
//     try {
//         const res = await axios.post("/auth/register", registrationData);
//         dispatch({ type: "REGISTER_SUCCESS", payload: res.data.details });
//         navigate("/");
//     } catch (err) {
//         dispatch({ type: "REGISTER_FAILURE", payload: err.response.data });
//     }
// };
