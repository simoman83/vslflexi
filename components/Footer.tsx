import React from 'react';
import { Link } from 'react-router-dom';

interface FooterProps {
    children?: React.ReactNode;
}

export const Footer: React.FC<FooterProps> = ({ children }) => {
    return (
        <footer className="text-center py-8 bg-slate-800 text-gray-400 text-sm">
            <div className="max-w-4xl mx-auto px-4">
                <p className="mb-4">&copy; 2025. جميع الحقوق محفوظة.</p>
                <div className="flex justify-center gap-6 mb-6 font-medium">
                    <Link to="/privacy" className="hover:text-white transition-colors">سياسة الخصوصية</Link>
                    <Link to="/terms" className="hover:text-white transition-colors">الشروط والأحكام</Link>
                    <Link to="/contact" className="hover:text-white transition-colors">اتصل بنا</Link>
                </div>
                <p className="mt-2 text-xs opacity-70 leading-relaxed">
                    هذا المنتج ليس دواءً ولا يغني عن استشارة الطبيب. النتائج قد تختلف من شخص لآخر. المعلومات الواردة في هذه الصفحة هي لأغراض إعلامية فقط.
                </p>
                {children && <div className="mt-8 border-t border-slate-700 pt-6">{children}</div>}
            </div>
        </footer>
    );
};
