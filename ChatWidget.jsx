import React, { useState, useRef, useEffect } from 'react';
import { PaperClipIcon } from '@heroicons/react/24/outline';

const AI_AVATAR = (
  <div className="w-8 h-8 rounded-full bg-pink-600 flex items-center justify-center text-white font-bold mr-2">
    <span>AI</span>
  </div>
);
const USER_AVATAR = (
  <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-white font-bold ml-2">
    <span>U</span>
  </div>
);

const ChatWidget = ({ forceOpen = false }) => {
  const [open, setOpen] = useState(forceOpen);
  const [messages, setMessages] = useState([
    { sender: 'ai', text: 'Hi! How can I help you today?' }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (open && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, open]);

  useEffect(() => {
    if (forceOpen) setOpen(true);
  }, [forceOpen]);

  const handleSend = async () => {
    if (input.trim() === '') return;
    setMessages([...messages, { sender: 'user', text: input }]);
    const userMessage = input;
    setInput('');
    try {
      const res = await fetch('https://server-210v.onrender.com/api/ai-chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage })
      });
      const data = await res.json();
      setMessages(msgs => [...msgs, { sender: 'ai', text: data.response || data.error || 'Sorry, I could not answer.' }]);
    } catch (err) {
      setMessages(msgs => [...msgs, { sender: 'ai', text: 'Error connecting to AI.' }]);
    }
  };

  // Header content
  const header = (
    <div className="bg-slate-800 px-6 py-4 rounded-t-2xl flex items-center gap-3 border-b border-slate-700">
      <div className="w-10 h-10 flex items-center justify-center text-white text-2xl">
        <span>🤖</span>
      </div>
      <div>
        <div className="font-bold text-white text-lg">AI Assistant</div>
        <div className="text-xs text-slate-300">Ask anything about programming, roadmaps, or tech!</div>
      </div>
      {!forceOpen && (
        <button
          className="ml-auto text-white text-2xl hover:text-blue-400 transition-colors"
          onClick={() => setOpen(false)}
          aria-label="Close chat"
        >
          ×
        </button>
      )}
    </div>
  );

  return (
    <div>
      {!forceOpen && (
        <button
          className="fixed bottom-8 right-8 bg-slate-800 text-white rounded-full w-14 h-14 text-2xl shadow-lg flex items-center justify-center hover:bg-slate-700 transition-colors z-50"
          onClick={() => setOpen(!open)}
          aria-label="Open chat"
        >
          💬
        </button>
      )}
      {open && (
        <div className={forceOpen ? "w-full flex flex-col" : "fixed bottom-28 right-8 w-80 max-h-[30rem] bg-slate-900 text-white rounded-2xl shadow-2xl flex flex-col z-50 overflow-hidden border border-slate-700"}>
          {header}
          <div className="flex-1 px-4 py-4 overflow-y-auto bg-slate-900 flex flex-col gap-3 transition-all duration-300">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex items-end ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} animate-fadeIn`}
              >
                {msg.sender === 'ai' && AI_AVATAR}
                <div
                  className={`px-4 py-2 rounded-2xl text-base break-words shadow-md transition-all duration-300 ${
                    msg.sender === 'user'
                      ? 'bg-blue-500 text-white ml-2 rounded-br-sm'
                      : 'bg-slate-800 text-white mr-2 rounded-bl-sm'
                  }`}
                  style={{ maxWidth: '75%' }}
                >
                  {msg.text}
                </div>
                {msg.sender === 'user' && USER_AVATAR}
              </div>
            ))}
            <div ref={messagesEndRef}/>
          </div>
          <div className="flex px-4 py-3 bg-slate-800 border-t border-slate-700 items-center gap-2 shrink-0 mt-100">
            <input
              className="flex-1 px-3 py-2 rounded-lg bg-slate-900 text-white border border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSend()}
              placeholder="Type your message..."
            />
            <button
              className="bg-pink-600 hover:bg-pink-700 text-white rounded-lg px-4 py-2 font-semibold transition-colors shadow-md cursor-pointer"
              onClick={handleSend}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatWidget; 