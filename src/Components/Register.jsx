import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { saveToken, getToken, isTokenExpired , deleteToken} from '../Helper/Tokens';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from "react-router-dom";
const Register = () => {
    const [email, setEmail] = useState('');
    const [fullName,setFullName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setErrorMessage('Passwords do not match.');
            return;
        }
        try {
            // deleteToken('access');
            // deleteToken('refresh');
            const body = {
                'FullName': fullName,
                'email': email,
                'password': password,
                'confirmPassword': confirmPassword
            };
            const response = await axios.post('https://spectacular-essence-production.up.railway.app/api/Auth/auth/register',
            body);
            console.log(response.data.message);
            if (response.status === 200) {
                saveToken("access", response.data.data.access);
                saveToken("refresh", response.data.data.refresh);
                setEmail("");
                setPassword("");
                setConfirmPassword("");
                setFullName("");
                setErrorMessage([]);
                navigate('/account')
            } else {
                setErrorMessage(['Login failed. Please try again.']);
            }
        } catch (error) {
            setErrorMessage('Registration failed. Please try again.');
        }
    };
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="max-w-md p-6 bg-white rounded-md shadow-md">
                <h2 className="text-2xl font-bold mb-4 mt-4">Register</h2>
                <form>
                    {/* Full Name Input */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Full Name</label>
                        <input type="text" className="mt-1 block w-full px-3 py-2 border rounded-md"
                        onChange={(e) => setFullName(e.target.value)} />
                    </div>

                    {/* Email Input */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input type="email" className="mt-1 block w-full px-3 py-2 border rounded-md" 
                        onChange={(e) => setEmail(e.target.value)}/>
                    </div>

                    {/* Password Input */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <input type="password" className="mt-1 block w-full px-3 py-2 border rounded-md" 
                        onChange={(e) => setPassword(e.target.value)} />
                    </div>

                    {/* Confirm Password Input */}
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
                        <input type="password" className="mt-1 block w-full px-3 py-2 border rounded-md"
                        onChange={(e) => setConfirmPassword(e.target.value)} />
                    </div>

                    {/* Register Button */}
                    <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded"
                    onClick={(e) => handleSubmit(e)} >Register</button>
                </form>

                {/* Links */}
                <p className="mt-4 text-center">
                    Already have an account? 
                    <Link to="/login" className="text-blue-500 hover:underline">
                        Login here
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Register;