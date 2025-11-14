import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage: React.FC = () => {
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
                            <Link to="/about" className="text-blue-600 font-medium">عن الموقع</Link>
                            <Link to="/contact" className="text-gray-700 hover:text-blue-600 font-medium">اتصل بنا</Link>
                        </nav>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h1 className="text-4xl font-extrabold text-gray-900 mb-6">عن صحتك اليوم</h1>

                <div className="bg-white rounded-lg shadow-md p-8 mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">مهمتنا</h2>
                    <p className="text-gray-700 leading-relaxed mb-6">
                        صحتك اليوم هو موقع متخصص في تقديم المعلومات الصحية الموثوقة والنصائح العملية للقراء العرب.
                        نؤمن بأن الصحة هي أغلى ما يملك الإنسان، ولذلك نسعى جاهدين لتوفير محتوى عالي الجودة يساعد
                        الأفراد على اتخاذ قرارات صحية مستنيرة.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 mb-4">رؤيتنا</h2>
                    <p className="text-gray-700 leading-relaxed mb-6">
                        نطمح لأن نكون المصدر الأول للمعلومات الصحية الموثوقة باللغة العربية، ونسعى لبناء مجتمع
                        واعٍ صحياً من خلال تقديم محتوى علمي مبسط وسهل الفهم.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 mb-4">ما نقدمه</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div className="flex items-start gap-3">
                            <div className="text-3xl">📚</div>
                            <div>
                                <h3 className="font-bold text-lg mb-2">مقالات صحية متنوعة</h3>
                                <p className="text-gray-600">نغطي مواضيع متعددة من الصحة العامة إلى التغذية والرياضة</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="text-3xl">✅</div>
                            <div>
                                <h3 className="font-bold text-lg mb-2">معلومات موثوقة</h3>
                                <p className="text-gray-600">جميع معلوماتنا مستندة إلى مصادر علمية موثوقة</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="text-3xl">💡</div>
                            <div>
                                <h3 className="font-bold text-lg mb-2">نصائح عملية</h3>
                                <p className="text-gray-600">نقدم نصائح يمكن تطبيقها في الحياة اليومية بسهولة</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="text-3xl">🔄</div>
                            <div>
                                <h3 className="font-bold text-lg mb-2">تحديثات مستمرة</h3>
                                <p className="text-gray-600">نواكب أحدث الأبحاث والدراسات الصحية</p>
                            </div>
                        </div>
                    </div>

                    <h2 className="text-2xl font-bold text-gray-900 mb-4">التزامنا</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        نلتزم بتقديم محتوى دقيق وموضوعي ومفيد. جميع المقالات والنصائح المقدمة على موقعنا هي
                        لأغراض تعليمية وإعلامية فقط ولا تغني عن استشارة الطبيب المختص.
                    </p>

                    <div className="bg-blue-50 border-r-4 border-blue-500 p-4 mt-6">
                        <p className="text-gray-700">
                            <strong>تنويه مهم:</strong> المعلومات الواردة في هذا الموقع لا تعتبر بديلاً عن الاستشارة
                            الطبية المتخصصة. يُرجى دائماً استشارة طبيبك قبل اتخاذ أي قرارات تتعلق بصحتك.
                        </p>
                    </div>
                </div>

                <div className="text-center">
                    <Link
                        to="/"
                        className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors"
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

export default AboutPage;
