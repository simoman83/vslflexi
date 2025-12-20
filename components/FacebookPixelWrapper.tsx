import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

declare global {
    interface Window {
        fbq: any;
    }
}

const FacebookPixelWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const location = useLocation();

    useEffect(() => {
        // Track PageView on route change
        if (typeof window.fbq === 'function') {
            window.fbq('track', 'PageView');
        }
    }, [location]);

    return <>{children}</>;
};

export default FacebookPixelWrapper;
