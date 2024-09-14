import React, { useState } from 'react';

const FeedbackPage = () => {
    const [message, setMessage] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');

    const handleSubmit = () => {
        // Handle form submission here
        console.log('Submitted Feedback:', { message, email, subject });
    };

    return (
        <div className="min-h-screen flex flex-col justify-center items-center">
            <h1 className="bg-blue-400 text-white font-bold text-2xl p-4 rounded mb-6">Please Write Your Feedback</h1>
            <div className="w-full max-w-md mt-6">
                <input
                    type="email"
                    className="w-full border rounded py-2 px-3 mb-3"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="text"
                    className="w-full border rounded py-2 px-3 mb-3"
                    placeholder="Subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                />
                 <textarea
                    className="w-full border rounded py-2 px-3 mb-3"
                    placeholder="Your Feedback"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer" onClick={handleSubmit}>
                    Submit
                </button>
            </div>
        </div>
    );
};

export default FeedbackPage;