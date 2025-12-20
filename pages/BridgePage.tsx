import React from 'react';

const BridgePage: React.FC = () => {
    return (
        <>
            <style>
                {`
                .bridge-page-container {
                    font-family: 'Cairo', sans-serif;
                    margin: 0;
                    padding: 0;
                    background-color: #f7f7f7;
                    text-align: center;
                    min-height: 100 screen;
                }
                .container {
                    max-width: 850px;
                    margin: 20px auto;
                    padding: 15px;
                    background-color: #fff;
                    border: 1px solid #ddd;
                }
                .top-cta {
                    background-color: #d90429;
                    color: white;
                    padding: 15px 20px;
                    text-decoration: none;
                    font-weight: bold;
                    font-size: 22px;
                    border-radius: 8px;
                    margin-bottom: 20px;
                    display: inline-block;
                    transition: background-color 0.3s;
                }
                .top-cta:hover {
                    background-color: #b30021;
                }
                .headline-box {
                    background-color: #ffde59;
                    padding: 15px;
                    border: 2px solid #333;
                    margin-bottom: 20px;
                }
                .headline {
                    color: #d90429;
                    font-size: 28px;
                    font-weight: 900;
                    margin: 0;
                }
                .sub-headline {
                    font-size: 20px;
                    font-weight: bold;
                    color: #333;
                    margin: 5px 0 0 0;
                }
                .video-container {
                    position: relative;
                    cursor: pointer;
                    margin-bottom: 25px;
                }
                .video-image {
                    width: 100%;
                    max-width: 600px;
                    height: auto;
                    border: 3px solid #ccc;
                }
                .play-button-overlay {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    width: 80px;
                    height: 80px;
                    background-color: rgba(0, 0, 0, 0.5);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .play-button-overlay::after {
                    content: '▶';
                    font-size: 30px;
                    color: white;
                    margin-left: 5px;
                }
                .sound-icon {
                    position: absolute;
                    bottom: 15px;
                    right: 15px;
                    background-color: rgba(0,0,0,0.7);
                    color: white;
                    padding: 5px 10px;
                    border-radius: 5px;
                    font-size: 14px;
                }
                .content-text {
                    font-size: 18px;
                    line-height: 1.8;
                    padding: 0 10px;
                    color: #333;
                }
                .content-text strong {
                    color: #d90429;
                    text-decoration: underline;
                }
                .as-seen-on-banner {
                    background-color: #2a9d8f;
                    padding: 20px 10px;
                    margin-top: 30px;
                }
                .as-seen-on-banner h3 {
                    color: white;
                    font-size: 24px;
                    margin: 0 0 15px 0;
                }
                .logos {
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                    flex-wrap: wrap;
                }
                .logos img {
                    height: 40px;
                    margin: 10px;
                    filter: grayscale(100%) brightness(1000%);
                }
                footer {
                    background-color: #e9f5db;
                    padding: 25px 15px;
                    margin-top: 20px;
                }
                .footer-logo {
                    font-size: 36px;
                    font-weight: bold;
                    color: #4a5759;
                    margin-bottom: 20px;
                }
                .footer-links {
                    margin-bottom: 20px;
                }
                .footer-links a {
                    color: #007bff;
                    text-decoration: none;
                    margin: 0 10px;
                }
                .disclaimer {
                    font-size: 12px;
                    color: #666;
                    line-height: 1.6;
                    text-align: justify;
                }

                @media (max-width: 600px) {
                    .headline {
                        font-size: 24px;
                    }
                    .sub-headline {
                        font-size: 18px;
                    }
                    .top-cta {
                        font-size: 18px;
                        padding: 12px 15px;
                    }
                    .content-text {
                        font-size: 16px;
                    }
                }
                `}
            </style>
            <div className="bridge-page-container">
                <div className="container">
                    <a href="/motionenergy" className="top-cta">اضغط هنا لمشاهدة الفيديو الآن</a>

                    <div className="headline-box">
                        <h1 className="headline">خبير ألماني يكشف: روتين بسيط لدعم راحة المفاصل للرجال والنساء فوق سن 50</h1>
                        <p className="sub-headline">(شاهد هذا العرض التقديمي القصير)</p>
                    </div>

                    <a href="/motionenergy">
                        <div className="video-container">
                            <img src="/assets/joint-pain-bridge-image-v2.png" alt="عرض توضيحي لآلام المفاصل وعلاجها" className="video-image" />
                            <div className="play-button-overlay"></div>
                            <div className="sound-icon">🔊 اضغط لتشغيل الصوت</div>
                        </div>
                    </a>

                    <div className="content-text">
                        <p>
                            شارك علماء وباحثون من ألمانيا <strong>طريقة طبيعية لدعم صحة المفاصل</strong> و<strong>خطوات بسيطة</strong> لتحسين الحركة والشعور بالراحة...
                        </p>
                        <p>
                            هذه الطريقة تعتمد على أسس علمية وقد لاحظ العديد من الأشخاص تحسناً ملحوظاً. انقر على الزر أعلاه لمشاهدة الفيديو ومعرفة المزيد عن كيفية دعم صحة مفاصلك بطرق طبيعية.
                        </p>
                    </div>

                    <a href="/motionenergy" className="top-cta" style={{ fontSize: '24px', marginTop: '20px' }}>اضغط هنا لمشاهدة الفيديو الآن</a>

                    <div className="as-seen-on-banner">
                        <h3>كما ظهر على</h3>
                        <div className="logos">
                            <img src="/assets/aljazeera_gen.svg" alt="Al Jazeera" />
                            <img src="/assets/skynews_gen.svg" alt="Sky News Arabia" />
                            <img src="/assets/alarabiya_gen.svg" alt="Al Arabiya" />
                            <img src="/assets/bbc_gen.svg" alt="BBC Arabic" />
                            <img src="/assets/foxnews.svg" alt="Fox News" style={{ width: '60px' }} />
                        </div>
                    </div>
                </div>

                <footer>
                    <div className="footer-logo">راحة برو</div>
                    <div className="footer-links">
                        <a href="#">سياسة الخصوصية</a> |
                        <a href="#">الشروط والأحكام</a> |
                        <a href="#">تواصل معنا</a>
                    </div>
                    <p className="disclaimer">
                        إخلاء مسؤولية: لم يتم تقييم هذه البيانات من قبل إدارة الغذاء والدواء. هذا المنتج غير مخصص لتشخيص أي مرض أو علاجه أو الوقاية منه. إذا كنت حاملاً أو مرضعة أو تتناولين أدوية أو تعانين من حالة طبية، فاستشيري طبيبك قبل استخدام منتجاتنا. المعلومات الواردة في هذا الموقع مقدمة لأغراض إعلامية عامة فقط. النتائج قد تختلف من شخص لآخر. الشهادات الواردة هي من أشخاص حقيقيين وقد لا تعكس تجربة المشتري العادي.
                    </p>
                    <p style={{ fontSize: '14px', color: '#555', marginTop: '15px' }}>
                        © 2024 راحة برو. جميع الحقوق محفوظة.
                    </p>
                </footer>
            </div>
        </>
    );
};

export default BridgePage;
