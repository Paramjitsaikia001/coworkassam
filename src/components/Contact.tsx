import React, { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';

const ContactButton: React.FC = () => {
    const phoneNumber = '919395xxxxx'; // Replace with your WhatsApp number

    const handleConnectClick = () => {
        window.open(`https://wa.me/${phoneNumber}`, '_blank');
    };
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <button
            className={`fixed bottom-4 md:bottom-8 z-11 right-4 md:right-8 p-5 hover:p-6 cursor-pointer rounded-full bg-blue-600 text-white shadow-[1px_5px_0px_#000] transition-transform duration-300 ${
                isVisible
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-10 opacity-0'
            }`}
            onClick={handleConnectClick}
        >
            <Phone size={24} />
        </button>
    );
};

export default ContactButton;
