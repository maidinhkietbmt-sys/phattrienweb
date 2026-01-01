
import React, { useState } from 'react';
import { MessageCircle, X, Send, Loader2, Coffee } from 'lucide-react';
import { getCoffeeAdvice } from '../services/geminiService';

const ChatAdvisor: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{role: 'user' | 'ai', text: string}[]>([
    { role: 'ai', text: 'Chào bạn! Tôi là chuyên gia thử nếm tại Hương Đất Coffee. Bạn đang tìm loại cà phê có hương vị như thế nào?' }
  ]);
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setLoading(true);
    
    const advice = await getCoffeeAdvice(userMsg);
    setMessages(prev => [...prev, { role: 'ai', text: advice || 'Xin lỗi, tôi gặp chút trục trặc.' }]);
    setLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="bg-white w-80 md:w-96 h-[450px] rounded-2xl shadow-2xl flex flex-col border border-stone-200 overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="bg-[#4E342E] p-4 text-white flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Coffee className="w-5 h-5" />
              <span className="font-semibold">Chuyên Gia Tư Vấn</span>
            </div>
            <button onClick={() => setIsOpen(false)}><X className="w-5 h-5" /></button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-stone-50">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                  m.role === 'user' ? 'bg-[#4E342E] text-white' : 'bg-stone-200 text-stone-800'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-stone-200 p-3 rounded-2xl">
                  <Loader2 className="w-4 h-4 animate-spin text-stone-600" />
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border-t border-stone-100 flex gap-2">
            <input 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Tôi thích vị đắng nhẹ..."
              className="flex-1 bg-stone-100 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#4E342E]"
            />
            <button 
              onClick={handleSend}
              className="bg-[#4E342E] text-white p-2 rounded-full hover:bg-[#3E2723] transition-colors"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-[#4E342E] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform flex items-center gap-2 group"
        >
          <MessageCircle className="w-6 h-6" />
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap text-sm font-medium">Tư vấn chọn vị</span>
        </button>
      )}
    </div>
  );
};

export default ChatAdvisor;
