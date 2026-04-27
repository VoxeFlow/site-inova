'use client';
import { createContext, useContext, useState } from 'react';

const ChatContext = createContext();

export function ChatProvider({ children }) {
    const [chatTopic, setChatTopic] = useState(null);
    const [isChatOpen, setIsChatOpen] = useState(false);

    const toggleChat = () => setIsChatOpen(prev => !prev);
    const openChat = (topic = null) => {
        if (topic) setChatTopic(topic);
        setIsChatOpen(true);
    };
    const closeChat = () => setIsChatOpen(false);

    return (
        <ChatContext.Provider value={{ isChatOpen, toggleChat, openChat, closeChat, chatTopic }}>
            {children}
        </ChatContext.Provider>
    );
}

export const useChat = () => useContext(ChatContext);
