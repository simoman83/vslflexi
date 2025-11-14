import React from 'react';
import { Link } from 'react-router-dom';

const HealthBlog: React.FC = () => {
    const articles = [
        {
            id: 1,
            title: "نصائح ذهبية للحفاظ على صحة المفاصل مع التقدم في العمر",
            excerpt: "تعرف على أهم الطرق الطبيعية والعادات اليومية التي تساعدك في الحفاظ على مفاصل صحية وقوية...",
            category: "صحة العظام",
            date: "٢٠٢٥/١١/١٢",
            image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80",
            link: "/flexi"
        },
        {
            id: 2,
            title: "أفضل التمارين الرياضية لتقوية الركبتين",
            excerpt: "تمارين بسيطة يمكنك ممارستها في المنزل لتقوية عضلات الركبة وتحسين مرونة المفاصل...",
            category: "تمارين رياضية",
            date: "٢٠٢٥/١١/١٠",
            image: "https://images.unsplash.com/photo-1540206395-68808572332f?w=800&q=80",
            link: "/article/knee-exercises"
        },
        {
            id: 3,
            title: "التغذية السليمة لصحة العظام: دليل شامل",
            excerpt: "اكتشف الأطعمة الغنية بالكالسيوم وفيتامين د التي تدعم صحة عظامك ومفاصلك بشكل طبيعي...",
            category: "تغذية",
            date: "٢٠٢٥/١١/٠٨",
            image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&q=80",
            link: "/article/nutrition"
        },
        {
            id: 4,
            title: "كيف تتجنب آلام الظهر أثناء العمل المكتبي",
            excerpt: "نصائح عملية وتمارين بسيطة يمكن القيام بها أثناء العمل للوقاية من آلام الظهر والرقبة...",
            category: "صحة مهنية",
            date: "٢٠٢٥/١١/٠٥",
            image: "https://images.unsplash.com/photo-1593376893114-1aed528d80cf?w=800&q=80",
            link: "/article/back-pain"
        },
        {
            id: 5,
            title: "فوائد المشي اليومي لصحة القلب والجسم",
            excerpt: "المشي لمدة ٣٠ دقيقة يومياً قد يحسن صحتك بشكل كبير. تعرف على الفوائد المذهلة...",
            category: "نمط حياة صحي",
            date: "٢٠٢٥/١١/٠٣",
            image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&q=80",
            link: "/article/walking-benefits"
        },
        {
            id: 6,
            title: "النوم الصحي: كيف تحسن جودة نومك بطرق طبيعية",
            excerpt: "تعرف على أسرار النوم العميق وكيف يؤثر النوم الجيد على صحتك العامة ونشاطك اليومي...",
            category: "صحة عامة",
            date: "٢٠٢٥/١١/٠١",
            image: "https://images.unsplash.com/photo-1541480601022-2308c0f02487?w=800&q=80",
            link: "/article/sleep-tips"
        }
    ];

    const categories = ["صحة العظام", "تغذية", "تمارين رياضية", "صحة عامة", "نمط حياة صحي", "صحة مهنية"];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white shadow-md sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-4">
                        <div className="flex items-center gap-3">
                            <div className="text-3xl">🏥</div>
                            <div>
                                <h1 className="text-2xl font-bold text-gray-900">صحتك اليوم</h1>
                                <p className="text-sm text-gray-600">دليلك الشامل للصحة والعافية</p>
                            </div>
                        </div>
                        <nav className="hidden md:flex gap-6">
                            <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium">الرئيسية</Link>
                            <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium">المقالات</Link>
                            <Link to="/about" className="text-gray-700 hover:text-blue-600 font-medium">عن الموقع</Link>
                            <Link to="/contact" className="text-gray-700 hover:text-blue-600 font-medium">اتصل بنا</Link>
                        </nav>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-4">مرحباً بك في صحتك اليوم</h2>
                    <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
                        نقدم لك أحدث المعلومات والنصائح الصحية المدعومة علمياً للحفاظ على صحتك وعافيتك
                    </p>
                </div>
            </div>

            {/* Categories */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <h3 className="text-center text-xl font-bold text-gray-700 mb-4">التصنيفات</h3>
                <div className="flex flex-wrap gap-3 justify-center">
                    {categories.map((cat, idx) => (
                        <span
                            key={idx}
                            className="px-5 py-2 bg-white text-gray-700 rounded-full shadow-sm border border-gray-200 font-medium"
                        >
                            {cat}
                        </span>
                    ))}
                </div>
            </div>

            {/* Articles Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">أحدث المقالات الصحية</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {articles.map((article) => (
                        <article key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                            <img
                                src={article.image}
                                alt={article.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-3">
                                    <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                                        {article.category}
                                    </span>
                                    <span className="text-sm text-gray-500">{article.date}</span>
                                </div>
                                <h4 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                                    {article.title}
                                </h4>
                                <p className="text-gray-600 mb-4 leading-relaxed">
                                    {article.excerpt}
                                </p>
                                <Link
                                    to={article.link}
                                    className="inline-block text-blue-600 hover:text-blue-800 font-semibold"
                                >
                                    اقرأ المزيد ←
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
            </div>

            {/* Health Tips Section */}
            <div className="bg-blue-50 py-12 my-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">نصائح صحية سريعة</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                            <div className="text-5xl mb-3">💧</div>
                            <h5 className="font-bold text-lg mb-2">اشرب الماء</h5>
                            <p className="text-gray-600 text-sm">٨ أكواب يومياً للحفاظ على الترطيب</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                            <div className="text-5xl mb-3">🥗</div>
                            <h5 className="font-bold text-lg mb-2">تناول الخضروات</h5>
                            <p className="text-gray-600 text-sm">٥ حصص من الفواكه والخضروات يومياً</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                            <div className="text-5xl mb-3">🏃</div>
                            <h5 className="font-bold text-lg mb-2">مارس الرياضة</h5>
                            <p className="text-gray-600 text-sm">٣٠ دقيقة من النشاط البدني يومياً</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                            <div className="text-5xl mb-3">😴</div>
                            <h5 className="font-bold text-lg mb-2">نم جيداً</h5>
                            <p className="text-gray-600 text-sm">٧-٨ ساعات من النوم الجيد</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-gray-800 text-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                        <div>
                            <h4 className="text-xl font-bold mb-4">صحتك اليوم</h4>
                            <p className="text-gray-400">
                                موقعك الموثوق للحصول على معلومات صحية دقيقة ونصائح عملية لحياة أفضل وأكثر صحة.
                            </p>
                        </div>
                        <div>
                            <h4 className="text-xl font-bold mb-4">روابط سريعة</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li><Link to="/about" className="hover:text-white">عن الموقع</Link></li>
                                <li><Link to="/privacy" className="hover:text-white">سياسة الخصوصية</Link></li>
                                <li><Link to="/terms" className="hover:text-white">شروط الاستخدام</Link></li>
                                <li><Link to="/contact" className="hover:text-white">اتصل بنا</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-xl font-bold mb-4">تابعنا</h4>
                            <p className="text-gray-400 mb-4">
                                تابعنا على وسائل التواصل الاجتماعي للحصول على آخر التحديثات
                            </p>
                            <div className="flex gap-4">
                                <span className="text-2xl opacity-50">📘</span>
                                <span className="text-2xl opacity-50">📷</span>
                                <span className="text-2xl opacity-50">🐦</span>
                            </div>
                            <p className="text-xs text-gray-500 mt-2">قريباً</p>
                        </div>
                    </div>
                    <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
                        <p>&copy; ٢٠٢٥ صحتك اليوم. جميع الحقوق محفوظة.</p>
                        <p className="text-sm mt-2">المعلومات المقدمة هي لأغراض تعليمية فقط ولا تغني عن استشارة الطبيب المختص.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default HealthBlog;
