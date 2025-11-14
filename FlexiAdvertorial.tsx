
import React, { useState, useEffect, useCallback } from 'react';
import { Header } from './components/Header';
import { Testimonial } from './components/Testimonial';
import { Comment } from './components/Comment';
import { Countdown } from './components/Countdown';
import { OrderForm } from './components/OrderForm';
import { CtaButton } from './components/CtaButton';
import { Footer } from './components/Footer';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { RefundPolicy } from './components/RefundPolicy';


// Product image
const JointFlexProduct = 'https://imagescdn.netlify.app/c.webp';


const FlexiAdvertorial: React.FC = () => {
    const [stock, setStock] = useState(483);
    const [discount, setDiscount] = useState<number | null>(null);
    const [clickedIndex, setClickedIndex] = useState<number | null>(null);
    const [finalDiscounts, setFinalDiscounts] = useState<number[] | null>(null);
    const [showPrivacy, setShowPrivacy] = useState(false);
    const [showRefund, setShowRefund] = useState(false);
    const [videoPlaying, setVideoPlaying] = useState(false);
    const [videoWatchedPercent, setVideoWatchedPercent] = useState(0);
    const [showOffer, setShowOffer] = useState(true);
    const [showDisclaimers, setShowDisclaimers] = useState(false);

    useEffect(() => {
        // Check session storage on initial load
        const storedChoice = sessionStorage.getItem('doorChoice');
        if (storedChoice) {
            try {
                const { index, discounts } = JSON.parse(storedChoice);
                setClickedIndex(index);
                setFinalDiscounts(discounts);
                setDiscount(50); // The winning discount is always 50%
            } catch (error) {
                console.error("Failed to parse door choice from sessionStorage", error);
                sessionStorage.removeItem('doorChoice');
            }
        }
    }, []);

    useEffect(() => {
        if (showPrivacy || showRefund) {
            document.body.classList.add('modal-open');
        } else {
            document.body.classList.remove('modal-open');
        }
        return () => {
            document.body.classList.remove('modal-open');
        };
    }, [showPrivacy, showRefund]);

    const handleDiscountReveal = (index: number) => {
        if (clickedIndex !== null) return; // Prevent re-playing

        const otherDiscounts = [10, 25];
        // Shuffle for randomness
        otherDiscounts.sort(() => Math.random() - 0.5);
        
        const newDiscounts = [0, 0, 0];

        // The clicked door always gets 50%
        newDiscounts[index] = 50;

        // Assign the other discounts to the remaining doors
        let otherIndex = 0;
        for (let i = 0; i < 3; i++) {
            if (i !== index) {
                newDiscounts[i] = otherDiscounts[otherIndex];
                otherIndex++;
            }
        }

        setClickedIndex(index);
        setFinalDiscounts(newDiscounts);
        setDiscount(50);

        // Store the result in session storage
        sessionStorage.setItem('doorChoice', JSON.stringify({ index, discounts: newDiscounts }));

        // Scroll to the result
        const resultEl = document.getElementById('discount-result');
        if (resultEl) {
          setTimeout(() => {
            resultEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }, 800); // Wait for animation to finish
        }
    };
    
    const updateStock = useCallback(() => {
        setStock(prevStock => {
            if (prevStock > 420) {
                return prevStock - (Math.floor(Math.random() * 3) + 1);
            }
            return prevStock;
        });
    }, []);

    useEffect(() => {
        const stockInterval = setInterval(updateStock, Math.random() * 30000 + 20000);
        return () => clearInterval(stockInterval);
    }, [updateStock]);
    
    const scrollToForm = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const form = document.getElementById('order-form');
        if (form) {
            form.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const scrollToDoors = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const doors = document.getElementById('door-game');
        if (doors) {
            doors.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };

    const handlePlayVideo = () => {
        // Update the iframe src to include autoplay BEFORE hiding the overlay
        const iframe = document.getElementById('vsl-video') as HTMLIFrameElement;
        if (iframe) {
            // Completely reload the iframe with autoplay (unmuted - user clicked)
            const videoId = 'kJfkQ633-Hg';
            iframe.src = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&cc_load_policy=0&fs=0&disablekb=1&playsinline=1&widget_referrer=0&origin=${window.location.origin}&enablejsapi=1`;
        }
        // Hide the thumbnail overlay
        setVideoPlaying(true);

        // Start checking video progress
        startVideoProgressTracking();
    };

    const startVideoProgressTracking = () => {
        // Simulate video progress tracking (since YouTube API has CORS limitations)
        // In production, you'd use YouTube IFrame API properly
        let progress = 0;
        const interval = setInterval(() => {
            progress += 1;
            setVideoWatchedPercent(progress);

            // Show offer at 33% (assuming ~11 minute video = 660 seconds, 33% = 218 seconds)
            // We'll simulate 1% every 7 seconds (660/100 = 6.6)
            if (progress >= 33 && !showOffer) {
                setShowOffer(true);
                clearInterval(interval);
            }

            if (progress >= 100) {
                clearInterval(interval);
            }
        }, 7000); // Update every 7 seconds to reach 33% in ~3.85 minutes
    };
    
    const originalPrice = 1898;
    const finalPrice = 949;
    
    const summaryPoints = [
        "مكونات طبيعية - كريم موضعي للاستخدام الخارجي",
        "سهل الاستخدام - يُطبق على المنطقة المصابة مرتين يومياً",
        `السعر اليوم: <span class="font-bold text-red-600 text-lg">${finalPrice} جنيه</span> بدلاً من <span class="line-through">${originalPrice} جنيه</span>`,
        "دفع عند الاستلام - لا مخاطرة عليك",
        "توصيل مجاني - لكل محافظات مصر",
        `${stock} عبوة متبقية - اطلب الآن للحصول على العرض`
    ];


    return (
        <>
            <Header />
            <main className="max-w-4xl mx-auto bg-white shadow-lg">

                {/* VSL Video Section */}
                <div className="bg-gradient-to-br from-slate-900 to-slate-800 py-8 px-5">
                    <div className="text-center mb-6">
                        <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-3 leading-tight">
                            اكتشاف طبي يساعد المصريين على دعم راحة المفاصل بشكل طبيعي
                        </h1>
                        <p className="text-xl md:text-2xl text-yellow-300 font-bold">
                            آلاف جربوه... والنتائج كانت مذهلة (تعرف على السر)
                        </p>
                        <p className="text-lg text-gray-300 mt-3">
                            (شاهد الفيديو حتى النهاية لمعرفة التفاصيل والعرض الخاص)
                        </p>
                    </div>

                    {/* Video Player with Custom Thumbnail */}
                    <div
                        className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-lg"
                        style={{ paddingBottom: '56.25%' }}
                        onContextMenu={(e) => e.preventDefault()}
                    >
                        <iframe
                            id="vsl-video"
                            className="absolute top-0 left-0 w-full h-full shadow-2xl"
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                border: 'none'
                            }}
                            src="https://www.youtube-nocookie.com/embed/kJfkQ633-Hg?autoplay=0&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&cc_load_policy=0&fs=0&disablekb=1&playsinline=1&widget_referrer=0&origin=https://yoursite.com&enablejsapi=0"
                            title="Joint Flexi Video Sales Letter"
                            frameBorder="0"
                            sandbox="allow-scripts allow-same-origin allow-presentation"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            referrerPolicy="strict-origin-when-cross-origin"
                        />

                        {/* Transparent overlays to block UI elements without being visible */}
                        {videoPlaying && (
                            <>
                                {/* Block channel name and avatar (top-left) */}
                                <div
                                    className="absolute z-50"
                                    style={{
                                        top: '10px',
                                        left: '10px',
                                        width: '220px',
                                        height: '50px',
                                        background: 'transparent',
                                        pointerEvents: 'auto',
                                        cursor: 'default'
                                    }}
                                    onContextMenu={(e) => e.preventDefault()}
                                />

                                {/* Block Watch Later and Share buttons (top-right) */}
                                <div
                                    className="absolute z-50"
                                    style={{
                                        top: '10px',
                                        right: '10px',
                                        width: '150px',
                                        height: '50px',
                                        background: 'transparent',
                                        pointerEvents: 'auto',
                                        cursor: 'default'
                                    }}
                                    onContextMenu={(e) => e.preventDefault()}
                                />

                                {/* Block Watch on YouTube button (bottom area - mobile & desktop) */}
                                <div
                                    className="absolute z-50"
                                    style={{
                                        bottom: '0px',
                                        right: '0px',
                                        left: '0px',
                                        height: '80px',
                                        background: 'transparent',
                                        pointerEvents: 'auto',
                                        cursor: 'default'
                                    }}
                                    onContextMenu={(e) => e.preventDefault()}
                                />

                                {/* Block YouTube branding (bottom-left corner) */}
                                <div
                                    className="absolute z-50"
                                    style={{
                                        bottom: '45px',
                                        left: '10px',
                                        width: '120px',
                                        height: '40px',
                                        background: 'transparent',
                                        pointerEvents: 'auto',
                                        cursor: 'default'
                                    }}
                                    onContextMenu={(e) => e.preventDefault()}
                                />
                            </>
                        )}

                        {/* Custom Thumbnail Overlay */}
                        {!videoPlaying && (
                            <div
                                className="absolute top-0 left-0 w-full h-full bg-black cursor-pointer group"
                                onClick={handlePlayVideo}
                            >
                                {/* Thumbnail Image */}
                                <img
                                    src="https://img.youtube.com/vi/kJfkQ633-Hg/maxresdefault.jpg"
                                    alt="Video Thumbnail"
                                    className="w-full h-full object-cover"
                                />

                                {/* Dark Overlay */}
                                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all" />

                                {/* Play Button */}
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                    <div className="relative">
                                        {/* Pulsing Ring */}
                                        <div className="absolute inset-0 bg-red-600 rounded-full animate-ping opacity-75"></div>

                                        {/* Play Button Circle */}
                                        <div className="relative bg-gradient-to-br from-red-600 to-red-700 rounded-full w-24 h-24 md:w-32 md:h-32 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                                            {/* Play Icon */}
                                            <svg className="w-12 h-12 md:w-16 md:h-16 text-white ml-2" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M8 5v14l11-7z"/>
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                {/* Click to Play Text */}
                                <div className="absolute bottom-8 left-0 right-0 text-center">
                                    <p className="text-white text-xl md:text-2xl font-bold drop-shadow-lg">
                                        ▶️ انقر لمشاهدة الفيديو
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="text-center mt-6">
                        <p className="text-lg text-white">
                            تعرّف على المنتج ومكوناته من خلال الفيديو
                        </p>
                    </div>
                </div>

                {/* Keep Watching Message OR Offer */}
                {!showOffer ? (
                    <div className="bg-gradient-to-br from-slate-700 to-slate-900 text-white py-16 px-5 text-center">
                        <div className="max-w-2xl mx-auto">
                            <div className="mb-6">
                                <svg className="w-20 h-20 mx-auto text-yellow-400 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
                                ⏳ استمر في المشاهدة...
                            </h2>
                            <p className="text-xl text-gray-300 mb-4">
                                العرض الحصري سيظهر بعد مشاهدة الفيديو
                            </p>
                            <div className="w-full max-w-md mx-auto bg-slate-800 rounded-full h-4 mt-6">
                                <div
                                    className="bg-gradient-to-r from-yellow-400 to-orange-500 h-4 rounded-full transition-all duration-500"
                                    style={{ width: `${videoWatchedPercent}%` }}
                                />
                            </div>
                            <p className="text-sm text-gray-400 mt-3">{videoWatchedPercent}% مكتمل</p>
                        </div>
                    </div>
                ) : (
                    <div className="bg-gradient-to-br from-indigo-600 to-purple-600 text-white py-8 px-5 text-center">
                        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
                            🎯 عرض خاص لفترة محدودة
                        </h2>
                        <p className="text-xl mb-6">
                            السعر الآن {finalPrice} جنيه بدلاً من {originalPrice} جنيه
                        </p>
                        <a
                            href="#door-game"
                            onClick={scrollToDoors}
                            className="inline-block bg-yellow-400 text-gray-900 text-2xl font-extrabold py-4 px-10 rounded-full shadow-2xl hover:scale-105 transition-transform"
                        >
                            اختر العرض المناسب لك ⬇️
                        </a>
                    </div>
                )}

                {showOffer && (
                <>
                <div className="px-5 md:px-8 py-5 text-lg leading-relaxed text-gray-800">

                    {/* Key Benefits */}
                    <div className="my-8 bg-green-50 p-6 rounded-xl border-2 border-green-200">
                        <h2 className="text-3xl font-extrabold text-slate-800 mb-6 text-center">
                            ✅ ما ستحصل عليه مع Joint Flexi
                        </h2>
                        <ul className="list-none space-y-3 text-lg">
                            <li className="flex items-start"><span className="text-green-500 font-bold text-2xl ml-3">✓</span>
                                <span><strong>كريم موضعي طبيعي</strong> للاستخدام الخارجي على المفاصل</span>
                            </li>
                            <li className="flex items-start"><span className="text-green-500 font-bold text-2xl ml-3">✓</span>
                                <span><strong>مكونات طبيعية:</strong> تركيبة من مستخلصات نباتية</span>
                            </li>
                            <li className="flex items-start"><span className="text-green-500 font-bold text-2xl ml-3">✓</span>
                                <span><strong>سهل الاستخدام:</strong> يُستخدم مرتين يومياً</span>
                            </li>
                            <li className="flex items-start"><span className="text-green-500 font-bold text-2xl ml-3">✓</span>
                                <span><strong>دفع عند الاستلام:</strong> لا مخاطرة عليك</span>
                            </li>
                            <li className="flex items-start"><span className="text-green-500 font-bold text-2xl ml-3">✓</span>
                                <span><strong>توصيل مجاني:</strong> لكل محافظات مصر</span>
                            </li>
                            <li className="flex items-start"><span className="text-green-500 font-bold text-2xl ml-3">✓</span>
                                <span><strong>ضمان 30 يوماً:</strong> استرداد كامل إذا لم تكن راضياً</span>
                            </li>
                        </ul>
                        <p className="text-sm text-gray-600 mt-4 italic">
                            * النتائج الفردية قد تختلف. هذا المنتج ليس بديلاً عن الاستشارة الطبية.
                        </p>
                    </div>

                    {/* Product Image */}
                    <div className="bg-gradient-to-br from-indigo-600 to-purple-700 text-white p-8 my-8 rounded-xl text-center shadow-2xl">
                        <h3 className="text-4xl font-black mb-4">🌟 Joint Flexi</h3>
                        <img src={JointFlexProduct} alt="Joint Flexi Cream" className="max-w-xs mx-auto my-6 block" />
                        <p className="text-xl mt-4">كريم موضعي بمكونات طبيعية لراحة المفاصل</p>
                    </div>

                    {/* Testimonials - Compliant */}
                    <h2 className="text-3xl font-extrabold text-slate-800 my-8 text-center">💬 تجارب العملاء</h2>
                    <div className="space-y-6">
                        <Testimonial avatar="ف" name="فاطمة، 62 عاماً" location="القاهرة"
                            text={
                                <>
                                    <p>"استخدمت Joint Flexi لعدة أسابيع. شعرت بتحسن في راحتي اليومية وأصبح صعود الدرج أسهل بالنسبة لي."</p>
                                </>
                            }
                        />
                        <Testimonial avatar="ي" name="يوسف، 63 عاماً" location="الإسكندرية"
                            text={
                                <>
                                    <p>"جربت المنتج بناءً على نصيحة صديق. أنا راضٍ عن تجربتي معه وأستخدمه بانتظام."</p>
                                </>
                            }
                        />
                         <Testimonial avatar="ن" name="نعيمة، 60 عاماً" location="الجيزة"
                            text={
                                <>
                                    <p>"كنت أبحث عن منتج طبيعي للاستخدام الموضعي. Joint Flexi كان خياراً جيداً بالنسبة لي."</p>
                                </>
                            }
                         />
                    </div>
                    <p className="text-sm text-gray-600 mt-6 text-center italic">
                        * التجارب الشخصية للعملاء. النتائج الفردية قد تختلف من شخص لآخر.
                    </p>

                    <div className="bg-blue-50 border-r-4 border-blue-400 text-blue-800 p-5 my-8 rounded-md shadow text-center">
                        <h3 className="text-2xl font-bold mb-3">🎁 عرض خاص لفترة محدودة</h3>
                        <p className="mb-4 text-lg">احصل على Joint Flexi بسعر مخفض</p>
                        <Countdown />
                        <p className="mt-4 text-base">السعر الأصلي: {originalPrice} جنيه | السعر المخفض: {finalPrice} جنيه</p>
                    </div>

                    <div className="bg-blue-50 border-2 border-blue-400 p-5 my-8 rounded-lg text-center">
                        <p className="text-xl font-bold mb-2">📦 الكمية المتوفرة:</p>
                        <div className="text-4xl text-blue-600 font-bold my-2">{stock} عبوة</div>
                        <p className="text-lg mt-2">اطلب الآن للحصول على العرض الخاص</p>
                    </div>

                    <div id="door-game" className="my-8 text-center">
                        <h2 className="text-2xl font-bold mb-4">🎲 جرب حظك! اختر بابك واكتشف خصمك الحصري</h2>
                        <p className="text-lg mb-4 text-gray-600">👇 انقر على أي باب - قد تحصل على خصم 50%! 👇</p>
                        <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto">
                            {[0, 1, 2].map((index) => {
                                const isClicked = clickedIndex === index;
                                const hasPlayed = clickedIndex !== null;
                                const discountValue = finalDiscounts ? finalDiscounts[index] : null;

                                return (
                                    <div 
                                        key={index} 
                                        className={`door-container h-40 md:h-56 transition-transform 
                                            ${!hasPlayed ? 'hover:scale-105' : ''}
                                            ${hasPlayed && !isClicked ? 'opacity-70 scale-95' : ''}
                                            ${isClicked ? 'scale-110' : ''}`
                                        }
                                        onClick={() => handleDiscountReveal(index)}
                                    >
                                        {hasPlayed && !isClicked ? (
                                            <div className="w-full h-full flex flex-col justify-center items-center bg-gradient-to-br from-gray-400 to-gray-600 text-white rounded-lg">
                                                <div className="text-3xl font-bold">{discountValue}%</div>
                                                <div className="text-sm">خصم</div>
                                            </div>
                                        ) : (
                                            <div className={`door-inner ${isClicked ? 'is-flipped' : ''}`}>
                                                <div className="door-front">
                                                    <div className="door-emoji">🚪</div>
                                                    <div className="door-text">الباب {index + 1}</div>
                                                </div>
                                                <div className="door-back">
                                                    <div className="reward-text">{discountValue}%</div>
                                                    <div className="reward-label">خصم</div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                )
                            })}
                        </div>
                        {discount !== null && (
                            <div id="discount-result" className="mt-8 p-6 bg-gradient-to-br from-pink-500 to-red-500 text-white rounded-lg shadow-xl max-w-md mx-auto">
                                <h3 className="text-3xl font-black mb-2">🎉 مبروك!</h3>
                                <p className="text-2xl mb-3">حصلت على خصم <span className="font-bold">50</span>%!</p>
                                <p className="text-3xl font-bold"><del className="opacity-70 text-2xl">{originalPrice} جنيه</del> <span className="text-yellow-300">{finalPrice}</span> جنيه فقط!</p>
                            </div>
                        )}
                    </div>
                    
                    {discount !== null && (
                        <a href="#order-form" onClick={scrollToForm} className="block w-full text-center bg-gradient-to-r from-pink-500 to-red-600 text-white text-2xl md:text-3xl font-extrabold py-5 px-8 rounded-xl shadow-lg hover:scale-105 transition-transform animate-pop-in">
                            🛒 اطلب الآن بخصم 50%
                        </a>
                    )}

                    {/* Enhanced Guarantee Section with Badges */}
                    <div className="my-8 p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border-2 border-green-200 shadow-lg">
                        <h3 className="text-3xl font-bold text-green-800 mb-6 text-center">🛡️ ضماناتنا الحصرية لك</h3>
                        
                        {/* Guarantee Badges Grid */}
                        <div className="grid md:grid-cols-3 gap-4 mb-6">
                            {/* 30 Days Money Back */}
                            <div className="bg-white p-4 rounded-lg shadow-md border-2 border-green-300 text-center">
                                <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                                    30
                                </div>
                                <h4 className="font-bold text-green-800 mb-1">ضمان الاسترداد</h4>
                                <p className="text-sm text-green-700">30 يوماً لاسترداد المبلغ</p>
                            </div>

                            {/* Cash on Delivery */}
                            <div className="bg-white p-4 rounded-lg shadow-md border-2 border-blue-300 text-center">
                                <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white text-2xl">
                                    💳
                                </div>
                                <h4 className="font-bold text-blue-800 mb-1">دفع عند الاستلام</h4>
                                <p className="text-sm text-blue-700">لا تدفع إلا عند الاستلام</p>
                            </div>

                            {/* Free Shipping */}
                            <div className="bg-white p-4 rounded-lg shadow-md border-2 border-purple-300 text-center">
                                <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white text-2xl">
                                    🚚
                                </div>
                                <h4 className="font-bold text-purple-800 mb-1">توصيل مجاني</h4>
                                <p className="text-sm text-purple-700">لجميع محافظات مصر</p>
                            </div>
                        </div>

                        {/* Detailed Guarantee Text */}
                        <div className="bg-white p-6 rounded-lg border border-green-200">
                            <h4 className="text-xl font-bold text-green-800 mb-3 text-center">✅ لا توجد مخاطرة عليك على الإطلاق!</h4>
                            <div className="space-y-4">
                                <div className="flex items-start space-x-3 space-x-reverse">
                                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">✓</div>
                                    <div>
                                        <strong className="text-green-800">ضمان 30 يوماً لاسترداد النقود:</strong>
                                        <p className="text-green-700 mt-1">إذا لم تحصل على النتائج المطلوبة خلال 30 يوماً، سنسترد لك المبلغ كاملاً بدون أسئلة.</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3 space-x-reverse">
                                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">✓</div>
                                    <div>
                                        <strong className="text-blue-800">الدفع عند الاستلام:</strong>
                                        <p className="text-blue-700 mt-1">لن تدفع أي شيء الآن. فقط اطلب المنتج، وعندما يصلك، افحصه وتأكد أنه أصلي، وبعدها فقط ادفع للمندوب.</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3 space-x-reverse">
                                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">✓</div>
                                    <div>
                                        <strong className="text-purple-800">ضمان الجودة والأصالة:</strong>
                                        <p className="text-purple-700 mt-1">منتج أصلي 100% مع شهادة جودة. إذا لم تكن راضياً تماماً لأي سبب، فلا تستلمه ولن تدفع قرشاً واحداً.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Trust Indicators */}
                        <div className="mt-6 text-center">
                            <p className="text-green-800 font-bold text-lg">🔒 كل المخاطرة علينا - وليس عليك!</p>
                            <div className="flex justify-center items-center space-x-4 space-x-reverse mt-3 text-sm text-green-600">
                                <span>🏆 أكثر من 10,000 عميل راضٍ</span>
                                <span>⭐ تقييم 4.9/5</span>
                                <span>🇪🇬 صنع للسوق المصري</span>
                            </div>
                        </div>
                    </div>

                     <div className="grid md:grid-cols-2 gap-6 my-8">
                        <div className="bg-blue-50 border-2 border-blue-400 p-6 rounded-lg">
                            <h3 className="text-2xl font-bold text-blue-800 mb-3">📦 ما تحصل عليه:</h3>
                            <ul className="space-y-2 list-inside list-[disclosure-group] text-blue-700">
                                <li>عبوة واحدة من Joint Flexi</li>
                                <li>تركيبة من مكونات طبيعية</li>
                                <li>سهل الاستخدام الموضعي</li>
                                <li>ضمان 30 يوماً لاسترداد المبلغ</li>
                            </ul>
                        </div>
                         <div className="bg-green-50 border-2 border-green-500 p-6 rounded-lg">
                            <h3 className="text-2xl font-bold text-green-800 mb-3">✅ لماذا يختار العملاء Joint Flexi:</h3>
                            <ul className="space-y-2 list-inside list-[disclosure-group] text-green-700">
                                <li>مكونات من مصادر طبيعية</li>
                                <li>سهل الاستخدام في المنزل</li>
                                <li>دفع عند الاستلام</li>
                                <li>توصيل مجاني لجميع المحافظات</li>
                            </ul>
                        </div>
                    </div>
                     <p className="text-center font-bold text-xl my-6">جرّب Joint Flexi اليوم واستفد من العرض الخاص.</p>

                </div>
                 <div className="p-6 bg-gray-50">
                    <div className="max-w-2xl mx-auto text-center">
                        <h3 className="text-2xl font-extrabold text-slate-800 mb-4">ملخص العرض</h3>
                         <div className="bg-white p-6 rounded-lg shadow-md border text-gray-800 text-right">
                            {summaryPoints.map((item, index) => (
                                <div key={index} className={`flex justify-between items-center py-3 ${index !== summaryPoints.length - 1 ? 'border-b' : ''}`}>
                                    {item.includes('<span') ? (
                                        <p className="text-left" dangerouslySetInnerHTML={{ __html: item }} />
                                    ) : (
                                        <p>{item}</p>
                                    )}
                                    <span className="text-green-500 text-2xl flex-shrink-0 ml-4">✓</span>
                                </div>
                            ))}
                        </div>
                    </div>
                 </div>

                <OrderForm />
                </>
                )}
            </main>

            {showOffer && (
            <div className="bg-gray-100 py-8 px-5">
                <div className="max-w-4xl mx-auto">
                    <h3 className="text-2xl font-bold text-slate-800 mb-6">💬 آراء العملاء</h3>
                    <div className="space-y-5">
                        <Comment
                            avatar="ع"
                            name="عائشة محمد - القاهرة"
                            time="منذ 12 دقيقة"
                            text="سمعت عن المنتج من صديقة. أعجبني أن الدفع عند الاستلام. سأجرب المنتج قريباً إن شاء الله 🤲"
                            likes={47}
                        />
                        <Comment
                            avatar="ي"
                            name="يوسف السيد - الإسكندرية"
                            time="منذ 17 دقيقة"
                            text="جربت الكريم من شهرين. أنا راضٍ عن المنتج وأستخدمه بشكل منتظم. رائحته مقبولة وسهل الاستخدام. شكراً Joint Flexi! 🙏"
                            likes={89}
                        />
                        <Comment
                            avatar="ف"
                            name="فاطمة حسين - المغرب"
                            time="منذ 19 دقيقة"
                            text="بصراحة كنت متشككة في الأول. بس لما شفت إن الدفع عند الاستلام قلت أجرب. المنتج وصل بحالة جيدة والخدمة كانت محترمة. ربنا يبارك فيكم 💚"
                            likes={62}
                        />
                        <Comment
                            avatar="م"
                            name="موسى عبد الله - أسيوط"
                            time="منذ 24 دقيقة"
                            text="أنا عندي 54 سنة. استخدمت Joint Flexi بانتظام وأنا راضٍ عن قراري. التوصيل كان سريع والمنتج بجودة جيدة. منتج محترم 👍"
                            likes={103}
                        />
                        <Comment
                            avatar="ن"
                            name="نعيمة السيد - المنصورة"
                            time="منذ 28 دقيقة"
                            text="يا جماعة أنا طلبت من أسبوع. وصلني المنتج في يومين بس! التعبئة كانت جيدة والسعر معقول مع الخصم. راضية عن الشراء 😊"
                            likes={71}
                        />
                         <Comment
                            avatar="خ"
                            name="خالد مصطفى - دمياط"
                            time="منذ ساعة"
                            text="سؤال: المنتج ده بيتباع في الصيدليات ولا لازم أطلبه من هنا بس؟ وكام يوم بياخد لحد ما يوصل دمياط؟"
                            likes={12}
                        />
                         <Comment
                            isReply={true}
                            avatar="👨‍⚕️"
                            name="فريق Joint Flexi - الدعم الفني"
                            time="منذ 55 دقيقة"
                            text="@خالد مصطفى - أهلاً يا أستاذ خالد! Joint Flexi غير متوفر في الصيدليات لأننا نبيع مباشرة من المصنع للمستهلك (عشان نوفر السعر). التوصيل لدمياط عادةً بياخد 2-3 أيام بس. الدفع عند الاستلام، يعني مفيش أي مخاطرة. اطلب بثقة! 😊"
                            likes={45}
                        />
                         <Comment
                            avatar="ر"
                            name="رشا علي - القاهرة"
                            time="منذ ساعة و 10 دقائق"
                            text="اشتريت عبوتين من المنتج لأمي. العبوة جيدة والتوصيل كان سريع. أمي تستخدمه بانتظام وهي راضية عن المنتج ❤️"
                            likes={156}
                        />
                         <Comment
                            avatar="ع"
                            name="عماد حسن - سوهاج"
                            time="منذ ساعة و 15 دقيقة"
                            text="أنا عندي سؤال: هل المنتج ده مناسب للاستخدام الموضعي بشكل عام؟ وهل في أي احتياطات يجب معرفتها؟"
                            likes={23}
                         />
                         <Comment
                            isReply={true}
                            avatar="👨‍⚕️"
                            name="فريق Joint Flexi - الدعم الفني"
                            time="منذ ساعة و 8 دقائق"
                            text="@عماد حسن - أهلاً يا أستاذ عماد! Joint Flexi هو كريم موضعي بمكونات طبيعية للاستخدام الخارجي فقط. دائماً ننصح باستشارة الطبيب المختص قبل استخدام أي منتج جديد، خاصة إذا كان لديك حالة صحية معينة. 👍"
                            likes={67}
                        />
                    </div>
                    <p className="text-sm text-gray-600 mt-6 text-center italic">
                        * الآراء المعروضة هي تجارب شخصية للعملاء ولا تمثل وعوداً بنتائج محددة. النتائج الفردية قد تختلف. استشر طبيبك قبل استخدام أي منتج جديد.
                    </p>
                    <CtaButton onClick={scrollToForm} />
                </div>
            </div>
            )}

            {/* Important Disclaimers Section - Always rendered but toggleable */}
            <div className="bg-gray-200 py-8 px-5">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-white rounded-lg shadow-md border-2 border-gray-300">
                        {/* Toggleable Header */}
                        <button
                            onClick={() => setShowDisclaimers(!showDisclaimers)}
                            className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors rounded-t-lg"
                        >
                            <h3 className="text-xl font-bold text-gray-800">⚠️ معلومات مهمة</h3>
                            <svg
                                className={`w-6 h-6 text-gray-600 transition-transform ${showDisclaimers ? 'rotate-180' : ''}`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>

                        {/* Collapsible Content - Always in DOM */}
                        <div className={`overflow-hidden transition-all duration-300 ${showDisclaimers ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                            <div className="px-6 pb-6 text-sm text-gray-700 space-y-3">
                                <p>
                                    <strong>إخلاء المسؤولية:</strong> المعلومات المقدمة على هذا الموقع هي لأغراض تعليمية فقط ولا تُعتبر نصيحة طبية. Joint Flexi هو كريم موضعي للاستخدام الخارجي فقط ولا يُقصد به تشخيص أو علاج أو شفاء أو منع أي مرض.
                                </p>
                                <p>
                                    <strong>استشر طبيبك:</strong> قبل استخدام هذا المنتج أو أي منتج جديد، يُنصح بشدة باستشارة الطبيب المختص، خاصة إذا كنت تعاني من حالة صحية مزمنة أو تتناول أدوية بوصفة طبية.
                                </p>
                                <p>
                                    <strong>النتائج الفردية:</strong> النتائج قد تختلف من شخص لآخر. التجارب والآراء المعروضة هي تجارب شخصية ولا تمثل ضماناً أو وعداً بنتائج محددة. لا يوجد منتج يعمل بنفس الطريقة مع جميع الأشخاص.
                                </p>
                                <p>
                                    <strong>ليس بديلاً طبياً:</strong> هذا المنتج ليس بديلاً عن العلاج الطبي أو الأدوية الموصوفة من قبل طبيبك. لا تتوقف عن تناول أي دواء موصوف دون استشارة طبيبك.
                                </p>
                                <p className="text-xs text-gray-600 mt-4 italic">
                                    آخر تحديث: 2025. جميع المعلومات المقدمة هي لأغراض تعليمية عامة فقط.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer onShowPrivacy={() => setShowPrivacy(true)} onShowRefund={() => setShowRefund(true)} />

            {showPrivacy && <PrivacyPolicy onClose={() => setShowPrivacy(false)} />}
            {showRefund && <RefundPolicy onClose={() => setShowRefund(false)} />}
        </>
    );
};

export default FlexiAdvertorial;
