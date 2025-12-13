import React from 'react';

interface FooterProps {
    onShowPrivacy: () => void;
    onShowRefund: () => void;
    children?: React.ReactNode;
}

export const Footer: React.FC<FooterProps> = ({ onShowPrivacy, onShowRefund, children }) => {
    return (
        <footer className="text-center py-6 bg-slate-800 text-gray-400 text-sm">
            <p>&copy; 2025. جميع الحقوق محفوظة.</p>
            <div className="mt-2">
                <a href="#" onClick={(e) => { e.preventDefault(); onShowPrivacy(); }} className="hover:underline mx-2">سياسة الخصوصية</a>
                <span className="mx-1">|</span>
                <a href="#" onClick={(e) => { e.preventDefault(); onShowRefund(); }} className="hover:underline mx-2">سياسة الاسترداد</a>
            </div>
            <p className="mt-2 max-w-2xl mx-auto px-4">هذا المنتج ليس دواءً ولا يغني عن استشارة الطبيب. النتائج قد تختلف من شخص لآخر. المعلومات الواردة في هذه الصفحة هي لأغراض إعلامية فقط.</p>
            {children && <div className="mt-8 border-t border-gray-700 pt-6">{children}</div>}
        </footer>
    );
};
