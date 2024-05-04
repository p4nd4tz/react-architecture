import React, { createContext, useContext, useRef } from 'react';

const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
    const contactFormRef = useRef(null);

    const scrollToContactForm = () => {
        if (contactFormRef.current) {
            contactFormRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    return (
        <ScrollContext.Provider value={{ contactFormRef, scrollToContactForm }}>
            {children}
        </ScrollContext.Provider>
    )
}

export const useScroll = () => useContext(ScrollContext);