import React, { useState, useEffect, useRef } from 'react';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage } from '../types';
import { GenerateContentResponse } from '@google/genai';

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Hey! I'm Vipul's assistant. Need info on his stack or projects?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
        scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input;
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInput('');
    setIsLoading(true);

    try {
      setMessages(prev => [...prev, { role: 'model', text: '' }]);
      
      const responseStream = await sendMessageToGemini(userMsg);
      let fullText = '';
      
      for await (const chunk of responseStream) {
          const c = chunk as GenerateContentResponse;
          const chunkText = c.text || '';
          fullText += chunkText;
          setMessages(prev => {
              const newMessages = [...prev];
              newMessages[newMessages.length - 1] = { role: 'model', text: fullText };
              return newMessages;
          });
      }

    } catch (error) {
      console.error(error);
      setMessages(prev => [
        ...prev.slice(0, -1),
        { role: 'model', text: "Oops, I need a coffee break. Try again later!" }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
      if (e.key === 'Enter') handleSend();
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-end font-sans">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-80 md:w-96 h-[450px] bg-white rounded-2xl shadow-2xl border border-latte-200 flex flex-col overflow-hidden animate-slide-up">
          {/* Header */}
          <div className="bg-espresso-900 p-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                <h3 className="text-white font-semibold tracking-wide text-sm">Assistant</h3>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white hover:text-latte-200">
              ✕
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-latte-50">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div 
                  className={`max-w-[85%] rounded-2xl p-3 text-sm leading-relaxed shadow-sm ${
                    msg.role === 'user' 
                      ? 'bg-espresso-900 text-white rounded-br-none' 
                      : 'bg-white text-espresso-800 rounded-bl-none border border-latte-200'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && messages[messages.length - 1].text === '' && (
                 <div className="flex justify-start">
                    <div className="bg-white p-3 rounded-2xl rounded-bl-none border border-latte-200 flex gap-1 items-center h-10">
                        <div className="w-1.5 h-1.5 bg-espresso-400 rounded-full animate-bounce" style={{ animationDelay: '0ms'}}></div>
                        <div className="w-1.5 h-1.5 bg-espresso-400 rounded-full animate-bounce" style={{ animationDelay: '150ms'}}></div>
                        <div className="w-1.5 h-1.5 bg-espresso-400 rounded-full animate-bounce" style={{ animationDelay: '300ms'}}></div>
                    </div>
                 </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 bg-white border-t border-latte-200">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask me anything..."
                className="flex-1 bg-latte-50 text-espresso-900 text-sm rounded-xl px-4 py-2 border border-latte-200 focus:outline-none focus:border-saas-cyan transition-colors"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="p-2 rounded-xl bg-espresso-900 text-white hover:bg-saas-cyan disabled:opacity-50 transition-colors"
              >
                →
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-espresso-900 text-white shadow-xl hover:bg-saas-cyan transform hover:scale-105 transition-all flex items-center justify-center"
      >
        {isOpen ? (
           <span className="text-xl">✕</span>
        ) : (
           <span className="text-2xl">💬</span>
        )}
      </button>
    </div>
  );
};

export default ChatBot;