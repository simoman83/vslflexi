import React from 'react';
import { Link } from 'react-router-dom';

const TermsPage: React.FC = () => {
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
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h1 className="text-4xl font-extrabold text-gray-900 mb-6">شروط الاستخدام</h1>
                <p className="text-gray-600 mb-8">آخر تحديث: ١٤ نوفمبر ٢٠٢٥</p>

                <div className="bg-white rounded-lg shadow-md p-8 space-y-8">
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">١. قبول الشروط</h2>
                        <p className="text-gray-700 leading-relaxed">
                            بدخولك واستخدامك لموقع "صحتك اليوم"، فإنك توافق على الالتزام بهذه الشروط والأحكام.
                            إذا كنت لا توافق على أي من هذه الشروط، يرجى عدم استخدام الموقع.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">٢. استخدام المحتوى</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            جميع المحتويات المنشورة على هذا الموقع، بما في ذلك النصوص والصور والرسومات، هي ملك
                            لموقع "صحتك اليوم" ومحمية بموجب قوانين حقوق النشر والملكية الفكرية.
                        </p>
                        <ul className="list-disc list-inside text-gray-700 space-y-2 mr-4">
                            <li>يُسمح بالاستخدام الشخصي وغير التجاري للمحتوى</li>
                            <li>يُحظر نسخ أو إعادة نشر المحتوى دون إذن كتابي مسبق</li>
                            <li>يجب ذكر المصدر عند الاقتباس من المحتوى</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">٣. المعلومات الصحية</h2>
                        <div className="bg-yellow-50 border-r-4 border-yellow-500 p-4 mb-4">
                            <p className="text-gray-700 font-medium">
                                <strong>إخلاء مسؤولية مهم:</strong>
                            </p>
                            <p className="text-gray-700 mt-2">
                                المعلومات المقدمة على هذا الموقع هي لأغراض تعليمية وإعلامية فقط ولا تشكل نصيحة طبية
                                متخصصة. لا ينبغي اعتبار أي معلومات على هذا الموقع بديلاً عن الاستشارة الطبية المهنية
                                أو التشخيص أو العلاج.
                            </p>
                        </div>
                        <ul className="list-disc list-inside text-gray-700 space-y-2 mr-4">
                            <li>استشر دائماً طبيبك قبل اتخاذ أي قرارات صحية</li>
                            <li>لا تتجاهل المشورة الطبية المهنية بسبب شيء قرأته على موقعنا</li>
                            <li>إذا كنت تعتقد أن لديك حالة طبية طارئة، اتصل بطبيبك فوراً</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">٤. سلوك المستخدم</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            أنت توافق على عدم:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 space-y-2 mr-4">
                            <li>استخدام الموقع لأي غرض غير قانوني أو محظور</li>
                            <li>نشر أو نقل أي محتوى مسيء أو ضار أو غير لائق</li>
                            <li>محاولة الوصول غير المصرح به إلى أي جزء من الموقع</li>
                            <li>التدخل في عمل الموقع أو خوادمه</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">٥. الروابط الخارجية</h2>
                        <p className="text-gray-700 leading-relaxed">
                            قد يحتوي موقعنا على روابط لمواقع خارجية. نحن لسنا مسؤولين عن محتوى أو سياسات الخصوصية
                            الخاصة بهذه المواقع. استخدامك لهذه الروابط يكون على مسؤوليتك الخاصة.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">٦. تعديل الشروط</h2>
                        <p className="text-gray-700 leading-relaxed">
                            نحتفظ بالحق في تعديل هذه الشروط في أي وقت. سيتم نشر أي تغييرات على هذه الصفحة مع
                            تحديث تاريخ "آخر تحديث". استمرارك في استخدام الموقع بعد أي تغييرات يعني موافقتك على
                            الشروط المعدلة.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">٧. إخلاء المسؤولية</h2>
                        <p className="text-gray-700 leading-relaxed">
                            يتم توفير الموقع "كما هو" و"حسب التوفر" دون أي ضمانات من أي نوع. نحن لا نضمن أن
                            الموقع سيكون متاحاً دون انقطاع أو خالياً من الأخطاء.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">٨. الاتصال بنا</h2>
                        <p className="text-gray-700 leading-relaxed">
                            إذا كان لديك أي أسئلة حول شروط الاستخدام هذه، يرجى{' '}
                            <Link to="/contact" className="text-blue-600 hover:underline font-medium">
                                الاتصال بنا
                            </Link>
                            .
                        </p>
                    </section>
                </div>

                <div className="text-center mt-8">
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

export default TermsPage;
