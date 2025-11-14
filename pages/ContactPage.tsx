import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ContactPage: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real app, you'd send this to a backend
        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
            setFormData({ name: '', email: '', subject: '', message: '' });
        }, 3000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white shadow-md sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-4">
                        <Link to="/" className="flex items-center gap-3">
                            <div className="text-3xl">🏥</div>
                            <div>
                                <h1 className="text-2xl font-bold text-gray-900">صحتك اليوم</h1>
                                <p className="text-sm text-gray-600">دليلك الشامل للصحة والعافية</p>
                            </div>
                        </Link>
                        <nav className="hidden md:flex gap-6">
                            <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium">الرئيسية</Link>
                            <Link to="/about" className="text-gray-700 hover:text-blue-600 font-medium">عن الموقع</Link>
                            <Link to="/contact" className="text-blue-600 font-medium">اتصل بنا</Link>
                        </nav>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h1 className="text-4xl font-extrabold text-gray-900 mb-6 text-center">اتصل بنا</h1>
                <p className="text-xl text-gray-600 text-center mb-12">
                    نسعد بتواصلك معنا. لديك سؤال أو اقتراح؟ لا تتردد في مراسلتنا
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    {/* Contact Info */}
                    <div className="bg-white rounded-lg shadow-md p-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">معلومات التواصل</h2>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="text-3xl">📧</div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1">البريد الإلكتروني</h3>
                                    <p className="text-gray-600">info@sehtak-alyom.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="text-3xl">📱</div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1">واتساب</h3>
                                    <p className="text-gray-600">متاح قريباً</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="text-3xl">🕐</div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1">ساعات العمل</h3>
                                    <p className="text-gray-600">السبت - الخميس: ٩ صباحاً - ٥ مساءً</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="text-3xl">🌐</div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1">تابعنا</h3>
                                    <div className="flex gap-3 mt-2">
                                        <a href="#" className="text-2xl hover:opacity-70">📘</a>
                                        <a href="#" className="text-2xl hover:opacity-70">📷</a>
                                        <a href="#" className="text-2xl hover:opacity-70">🐦</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white rounded-lg shadow-md p-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">أرسل لنا رسالة</h2>

                        {submitted ? (
                            <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg text-center">
                                <p className="font-bold">شكراً لتواصلك معنا!</p>
                                <p className="text-sm mt-1">سنرد على رسالتك في أقرب وقت ممكن</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                                        الاسم الكامل *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="أدخل اسمك"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                                        البريد الإلكتروني *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="example@email.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                                        الموضوع *
                                    </label>
                                    <select
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    >
                                        <option value="">اختر الموضوع</option>
                                        <option value="general">استفسار عام</option>
                                        <option value="suggestion">اقتراح</option>
                                        <option value="complaint">شكوى</option>
                                        <option value="partnership">شراكة</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                                        الرسالة *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="اكتب رسالتك هنا..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors"
                                >
                                    إرسال الرسالة
                                </button>
                            </form>
                        )}
                    </div>
                </div>

                <div className="text-center">
                    <Link
                        to="/"
                        className="inline-block bg-gray-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-gray-700 transition-colors"
                    >
                        العودة إلى الصفحة الرئيسية
                    </Link>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-gray-800 text-white py-8 mt-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p>&copy; ٢٠٢٥ صحتك اليوم. جميع الحقوق محفوظة.</p>
                    <div className="mt-4 flex justify-center gap-6 text-sm">
                        <Link to="/about" className="hover:text-blue-400">عن الموقع</Link>
                        <Link to="/privacy" className="hover:text-blue-400">سياسة الخصوصية</Link>
                        <Link to="/terms" className="hover:text-blue-400">شروط الاستخدام</Link>
                        <Link to="/contact" className="hover:text-blue-400">اتصل بنا</Link>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default ContactPage;
