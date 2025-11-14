import React from 'react';
import { Link } from 'react-router-dom';

interface ArticlePageProps {
    title: string;
    category: string;
    date: string;
    image: string;
    content: React.ReactNode;
}

const ArticlePage: React.FC<ArticlePageProps> = ({ title, category, date, image, content }) => {
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
                            <Link to="/contact" className="text-gray-700 hover:text-blue-600 font-medium">اتصل بنا</Link>
                        </nav>
                    </div>
                </div>
            </header>

            {/* Article Content */}
            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="mb-6">
                    <Link to="/" className="text-blue-600 hover:underline">← العودة إلى المقالات</Link>
                </div>

                <article className="bg-white rounded-lg shadow-md overflow-hidden">
                    <img src={image} alt={title} className="w-full h-96 object-cover" />

                    <div className="p-8">
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-4 py-2 rounded-full">
                                {category}
                            </span>
                            <span className="text-gray-500">{date}</span>
                        </div>

                        <h1 className="text-4xl font-extrabold text-gray-900 mb-6 leading-tight">{title}</h1>

                        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                            {content}
                        </div>
                    </div>
                </article>

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

// Specific Article Exports
export const KneeTipsArticle: React.FC = () => (
    <ArticlePage
        title="أفضل التمارين الرياضية لتقوية الركبتين"
        category="تمارين رياضية"
        date="٢٠٢٥/١١/١٠"
        image="https://images.unsplash.com/photo-1540206395-68808572332f?w=800&q=80"
        content={
            <>
                <p className="mb-4">
                    الركبتان من أهم المفاصل في جسم الإنسان، فهما تتحملان وزن الجسم بالكامل وتساعداننا على الحركة والمشي والجري. لذلك من المهم جداً الاعتناء بصحة الركبتين من خلال ممارسة التمارين المناسبة.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">فوائد تمارين الركبة</h2>
                <ul className="list-disc list-inside mb-6 space-y-2">
                    <li>تقوية العضلات المحيطة بالركبة</li>
                    <li>تحسين المرونة والحركة</li>
                    <li>تقليل خطر الإصابات</li>
                    <li>تخفيف الآلام المزمنة</li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4">تمارين بسيطة للركبتين</h2>

                <h3 className="text-xl font-bold mt-6 mb-3">١. تمرين رفع الساق المستقيمة</h3>
                <p className="mb-4">
                    استلقِ على ظهرك، اثنِ ركبة واحدة واترك الأخرى مستقيمة. ارفع الساق المستقيمة ببطء حتى تصل إلى مستوى الركبة المثنية، ثم أنزلها. كرر 10-15 مرة لكل ساق.
                </p>

                <h3 className="text-xl font-bold mt-6 mb-3">٢. تمرين القرفصاء الجزئي</h3>
                <p className="mb-4">
                    قف مع جعل القدمين بعرض الكتفين. انحنِ ببطء كما لو كنت ستجلس على كرسي، ولكن لا تنزل بشكل كامل. حافظ على ظهرك مستقيماً وارتفع مرة أخرى. كرر 10 مرات.
                </p>

                <h3 className="text-xl font-bold mt-6 mb-3">٣. تمرين تمديد الركبة</h3>
                <p className="mb-4">
                    اجلس على كرسي مع وضع قدميك مسطحتين على الأرض. مد إحدى الساقين ببطء حتى تصبح مستقيمة، ثم أنزلها. كرر 10 مرات لكل ساق.
                </p>

                <div className="bg-yellow-50 border-r-4 border-yellow-500 p-6 my-8">
                    <h3 className="font-bold text-lg mb-2">تنبيه مهم</h3>
                    <p>
                        إذا شعرت بأي ألم أثناء أداء هذه التمارين، توقف فوراً واستشر طبيبك. من المهم البدء ببطء والتدرج في زيادة شدة التمارين.
                    </p>
                </div>

                <h2 className="text-2xl font-bold mt-8 mb-4">نصائح إضافية</h2>
                <ul className="list-disc list-inside mb-6 space-y-2">
                    <li>مارس التمارين بانتظام (3-4 مرات أسبوعياً)</li>
                    <li>احرص على الإحماء قبل التمارين</li>
                    <li>حافظ على وزن صحي لتقليل الضغط على الركبتين</li>
                    <li>ارتدِ أحذية مناسبة ومريحة</li>
                </ul>

                <p className="mt-6">
                    تذكر أن صحة ركبتيك تعتمد على الاستمرارية والصبر. ابدأ اليوم واجعل هذه التمارين جزءاً من روتينك اليومي!
                </p>
            </>
        }
    />
);

export const NutritionArticle: React.FC = () => (
    <ArticlePage
        title="التغذية السليمة لصحة العظام: دليل شامل"
        category="تغذية"
        date="٢٠٢٥/١١/٠٨"
        image="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&q=80"
        content={
            <>
                <p className="mb-4">
                    التغذية السليمة هي حجر الأساس لبناء عظام قوية وصحية. في هذا المقال، سنستعرض أهم العناصر الغذائية الضرورية لصحة العظام والمفاصل.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">العناصر الغذائية الأساسية</h2>

                <h3 className="text-xl font-bold mt-6 mb-3">١. الكالسيوم</h3>
                <p className="mb-4">
                    الكالسيوم هو المعدن الأساسي لبناء العظام. يحتاج البالغون إلى حوالي 1000-1200 ملغ يومياً.
                </p>
                <p className="mb-4"><strong>مصادر الكالسيوم:</strong></p>
                <ul className="list-disc list-inside mb-6 space-y-2">
                    <li>الحليب ومنتجات الألبان</li>
                    <li>السردين والسلمون المعلب</li>
                    <li>الخضروات الورقية الداكنة (السبانخ، الكرنب)</li>
                    <li>اللوز والسمسم</li>
                </ul>

                <h3 className="text-xl font-bold mt-6 mb-3">٢. فيتامين د</h3>
                <p className="mb-4">
                    فيتامين د ضروري لامتصاص الكالسيوم. الجسم ينتجه عند التعرض لأشعة الشمس.
                </p>
                <p className="mb-4"><strong>مصادر فيتامين د:</strong></p>
                <ul className="list-disc list-inside mb-6 space-y-2">
                    <li>التعرض لأشعة الشمس (15-20 دقيقة يومياً)</li>
                    <li>الأسماك الدهنية (السلمون، التونة)</li>
                    <li>صفار البيض</li>
                    <li>الحليب المدعم</li>
                </ul>

                <h3 className="text-xl font-bold mt-6 mb-3">٣. البروتين</h3>
                <p className="mb-4">
                    البروتين مهم لبناء وتقوية الأنسجة، بما في ذلك العظام والغضاريف.
                </p>
                <p className="mb-4"><strong>مصادر البروتين:</strong></p>
                <ul className="list-disc list-inside mb-6 space-y-2">
                    <li>اللحوم والدواجن</li>
                    <li>الأسماك والمأكولات البحرية</li>
                    <li>البقوليات (الفول، العدس، الحمص)</li>
                    <li>المكسرات والبذور</li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4">نصائح للتغذية الصحية للعظام</h2>
                <ul className="list-disc list-inside mb-6 space-y-2">
                    <li>تناول وجبات متوازنة تحتوي على جميع العناصر الغذائية</li>
                    <li>قلل من تناول الملح والكافيين</li>
                    <li>تجنب الإفراط في المشروبات الغازية</li>
                    <li>حافظ على ترطيب جسمك بشرب الماء</li>
                    <li>استشر طبيبك حول المكملات الغذائية إذا لزم الأمر</li>
                </ul>

                <div className="bg-blue-50 border-r-4 border-blue-500 p-6 my-8">
                    <h3 className="font-bold text-lg mb-2">نصيحة صحية</h3>
                    <p>
                        الجمع بين التغذية السليمة والتمارين الرياضية المنتظمة هو أفضل طريقة للحفاظ على عظام قوية وصحية مدى الحياة.
                    </p>
                </div>

                <p className="mt-6">
                    ابدأ اليوم بإدخال هذه الأطعمة الغنية بالعناصر الغذائية إلى نظامك الغذائي، وستلاحظ الفرق في صحة عظامك ومفاصلك!
                </p>
            </>
        }
    />
);

export default ArticlePage;
