import React from 'react';
import { Link } from 'react-router-dom';

const PrivacyPage: React.FC = () => {
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
                <h1 className="text-4xl font-extrabold text-gray-900 mb-6">سياسة الخصوصية</h1>
                <p className="text-gray-600 mb-8">آخر تحديث: ١٤ نوفمبر ٢٠٢٥</p>

                <div className="bg-white rounded-lg shadow-md p-8 space-y-8">
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">المقدمة</h2>
                        <p className="text-gray-700 leading-relaxed">
                            نحن في "صحتك اليوم" نحترم خصوصيتك ونلتزم بحماية معلوماتك الشخصية. توضح سياسة الخصوصية
                            هذه كيفية جمعنا واستخدامنا وحمايتنا لأي معلومات تقدمها عند استخدام موقعنا.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">المعلومات التي نجمعها</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            قد نجمع المعلومات التالية:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 space-y-2 mr-4">
                            <li>الاسم ومعلومات الاتصال بما في ذلك عنوان البريد الإلكتروني</li>
                            <li>معلومات ديموغرافية مثل الرمز البريدي والتفضيلات والاهتمامات</li>
                            <li>معلومات أخرى ذات صلة باستبيانات العملاء و/أو العروض</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">كيف نستخدم المعلومات</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            نحن نطلب هذه المعلومات لفهم احتياجاتك وتزويدك بخدمة أفضل، وعلى وجه الخصوص للأسباب التالية:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 space-y-2 mr-4">
                            <li>حفظ السجلات الداخلية</li>
                            <li>تحسين منتجاتنا وخدماتنا</li>
                            <li>إرسال رسائل بريد إلكتروني ترويجية حول منتجات جديدة أو عروض خاصة أو معلومات أخرى</li>
                            <li>الاتصال بك بشكل دوري لأغراض أبحاث السوق</li>
                            <li>تخصيص الموقع وفقاً لاهتماماتك</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">الأمان</h2>
                        <p className="text-gray-700 leading-relaxed">
                            نحن ملتزمون بضمان أمان معلوماتك. من أجل منع الوصول أو الإفصاح غير المصرح به، وضعنا
                            إجراءات مادية وإلكترونية وإدارية مناسبة لحماية وتأمين المعلومات التي نجمعها عبر الإنترنت.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">ملفات تعريف الارتباط (Cookies)</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            ملف تعريف الارتباط هو ملف صغير يطلب الإذن ليتم وضعه على القرص الصلب لجهاز الكمبيوتر
                            الخاص بك. بمجرد موافقتك، يتم إضافة الملف ويساعد ملف تعريف الارتباط في تحليل حركة مرور
                            الويب أو يتيح لك معرفة متى تزور موقعاً معيناً.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            نستخدم ملفات تعريف الارتباط لتحليل حركة المرور للأغراض التالية:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 space-y-2 mr-4 mt-2">
                            <li>تحديد الصفحات التي يتم استخدامها</li>
                            <li>تحليل البيانات حول حركة مرور صفحات الويب وتحسين موقعنا</li>
                            <li>تخصيص تجربتك</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">الروابط إلى مواقع أخرى</h2>
                        <p className="text-gray-700 leading-relaxed">
                            قد يحتوي موقعنا على روابط إلى مواقع أخرى ذات أهمية. ومع ذلك، بمجرد استخدامك لهذه
                            الروابط لمغادرة موقعنا، يجب أن تلاحظ أننا لا نملك أي سيطرة على ذلك الموقع الآخر.
                            لذلك، لا يمكننا أن نكون مسؤولين عن حماية وخصوصية أي معلومات تقدمها أثناء زيارة هذه
                            المواقع.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">التحكم في معلوماتك الشخصية</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            يمكنك اختيار تقييد جمع أو استخدام معلوماتك الشخصية بالطرق التالية:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 space-y-2 mr-4">
                            <li>يمكنك طلب تفاصيل المعلومات الشخصية التي نحتفظ بها عنك</li>
                            <li>إذا كنت تعتقد أن أي معلومات نحتفظ بها عنك غير صحيحة، يمكنك الاتصال بنا لتصحيحها</li>
                            <li>يمكنك طلب حذف معلوماتك الشخصية من سجلاتنا</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Google Analytics</h2>
                        <p className="text-gray-700 leading-relaxed">
                            نستخدم Google Analytics لتحليل استخدام موقعنا. يجمع Google Analytics معلومات حول
                            استخدام الموقع باستخدام ملفات تعريف الارتباط. يتم استخدام المعلومات التي تم جمعها
                            لإنشاء تقارير حول استخدام موقعنا.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">الاتصال بنا</h2>
                        <p className="text-gray-700 leading-relaxed">
                            إذا كان لديك أي أسئلة حول سياسة الخصوصية هذه أو معالجة معلوماتك الشخصية، يرجى{' '}
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

export default PrivacyPage;
