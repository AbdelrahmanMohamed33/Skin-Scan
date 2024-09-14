
import { saveToken, getToken } from '../Helper/Tokens';
import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const Login = ({ setPage }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (!email || !password) {
            setErrorMessage(['Email and password are required.']);
            return;
        }  
        try {
            const response = await axios.post('https://spectacular-essence-production.up.railway.app/api/Auth/auth/login', {
                email,
                password,
            });
            if (response.status === 200) {
                saveToken("access", response.data.data.access);
                saveToken("refresh", response.data.data.refresh);
                setEmail("");
                setPassword("");
                setErrorMessage([]);
                window.location.reload();

            } else{
                //console.log(response.data.message);
                //setErrorMessage(['Login failed. Please try again.']);
            }
        } catch (error) {
            setErrorMessage([error.response?.data?.data?.message || 'Login failed. Please check your credentials.']);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="max-w-md p-6 bg-white rounded-md shadow-md">
                <h2 className="text-2xl font-bold mb-4">Login</h2>
                <form>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input type="email" className="mt-1 block w-full px-3 py-2 border rounded-md"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <input type="password" className="mt-1 block w-full px-3 py-2 border rounded-md"
                            onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    {errorMessage.length > 0 && (
                        <div className="mb-6 text-red">
                            <ul>
                                {errorMessage.map((error, index) => (
                                    <li key={index}>{error}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                    <p className="">
                        <Link to="/forgot-password" className="text-black-500 hover:underline">
                            Forgot Password?
                        </Link>
                    </p>
                    <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded"
                        onClick={(e) => handleSubmit(e)}>Login</button>
                </form>
                <p className="mt-4 text-center">
                    Don't have an account?
                    <Link to="/register" className="text-blue-500 hover:underline">
                        Register here
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;