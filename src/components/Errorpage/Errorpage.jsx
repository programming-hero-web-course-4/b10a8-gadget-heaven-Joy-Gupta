import React from 'react';
import { Link } from "react-router-dom";

const Errorpage = () => {
    return (
        
        <div className="bg-gray-100 flex items-center justify-center      h-screen">
            <div className="text-center p-6 bg-white rounded-lg shadow-md max-w-lg">
                <h1 className="text-4xl font-bold text-red-500 mb-4">404</h1>
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">Page Not Found</h2>
                <p className="text-gray-600 mb-6">Sorry, the page you are looking for does not exist or has been moved.</p>
                <Link to="/" className="inline-block px-6 py-2 text-white bg-green-500 hover:bg-green-600 rounded-md">
                    Go Back Home
                </Link>
            </div>
        </div >
        
    );
};

export default Errorpage;