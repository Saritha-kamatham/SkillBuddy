import React from 'react';
import ChatWidget from '../components/ChatWidget';
import Navbar from '../components/Navbar';

const AIChat = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-700 via-gray-900 to-pink-900 flex flex-col">
            <div className="flex-1 flex items-center justify-center">
                <div className="w-full max-w-2xl p-6 sm:p-10">
                    <div className="rounded-2xl shadow-2xl border border-slate-700 bg-slate-900/90 backdrop-blur-md flex flex-col">
                        <ChatWidget forceOpen />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AIChat; 