import React, { useState, useEffect, useCallback } from 'react';
import { Header } from './components/Header';
import { Testimonial } from './components/Testimonial';
import { Comment } from './components/Comment';
import { Countdown } from './components/Countdown';
import { MotionEnergyOrderForm } from './components/MotionEnergyOrderForm';
import { CtaButton } from './components/CtaButton';
import { Footer } from './components/Footer';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { RefundPolicy } from './components/RefundPolicy';


// Product image
const MotionEnergyProduct = '/assets/motion-energy-product.png';

// YouTube Video ID for Motion Energy VSL
const YOUTUBE_VIDEO_ID = 'k-aE3yRzRrM';


const MotionEnergyAdvertorial: React.FC = () => {
    const [stock, setStock] = useState(247);
    const [discount, setDiscount] = useState<number | null>(null);
    const [clickedIndex, setClickedIndex] = useState<number | null>(null);
    const [finalDiscounts, setFinalDiscounts] = useState<number[] | null>(null);
    const [showPrivacy, setShowPrivacy] = useState(false);
    const [showRefund, setShowRefund] = useState(false);
    const [videoPlaying, setVideoPlaying] = useState(true);
    const [isMuted, setIsMuted] = useState(true);
    const [videoWatchedPercent, setVideoWatchedPercent] = useState(0);
    const [showOffer, setShowOffer] = useState(false);
    const [showDisclaimers, setShowDisclaimers] = useState(false);
    const [videoEnded, setVideoEnded] = useState(false);
    const [videoStartTime, setVideoStartTime] = useState(0);

    useEffect(() => {
        // Check session storage on initial load for door choice
        const storedChoice = sessionStorage.getItem('motionEnergyDoorChoice');
        if (storedChoice) {
            try {
                const { index, discounts } = JSON.parse(storedChoice);
                setClickedIndex(index);
                setFinalDiscounts(discounts);
                setDiscount(50);
            } catch (error) {
                console.error("Failed to parse door choice from sessionStorage", error);
                sessionStorage.removeItem('motionEnergyDoorChoice');
            }
        }

        // Check session storage for video progress state
        const storedVideoProgress = sessionStorage.getItem('motionEnergyVideoProgress');
        if (storedVideoProgress) {
            try {
                const { secondsWatched, offerShown, ended } = JSON.parse(storedVideoProgress);
                if (offerShown) {
                    setShowOffer(true);
                }
                if (ended) {
                    setVideoEnded(true);
                }
                setVideoWatchedPercent(Math.min(Math.round((secondsWatched / 600) * 100), 100));
                // Set video start time so YouTube starts from saved position
                setVideoStartTime(secondsWatched);
                // Start tracking from where we left off
                startVideoProgressTracking(secondsWatched);
            } catch (error) {
                console.error("Failed to parse video progress from sessionStorage", error);
                sessionStorage.removeItem('motionEnergyVideoProgress');
                startVideoProgressTracking(0);
            }
        } else {
            // Start fresh tracking
            startVideoProgressTracking(0);
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
        if (clickedIndex !== null) return;

        const otherDiscounts = [10, 25];
        otherDiscounts.sort(() => Math.random() - 0.5);

        const newDiscounts = [0, 0, 0];
        newDiscounts[index] = 50;

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

        sessionStorage.setItem('motionEnergyDoorChoice', JSON.stringify({ index, discounts: newDiscounts }));

        const resultEl = document.getElementById('discount-result');
        if (resultEl) {
            setTimeout(() => {
                resultEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }, 800);
        }
    };

    const updateStock = useCallback(() => {
        setStock(prevStock => {
            if (prevStock > 180) {
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
        const iframe = document.getElementById('vsl-video') as HTMLIFrameElement;
        if (iframe) {
            iframe.src = `https://www.youtube-nocookie.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&cc_load_policy=0&fs=0&disablekb=1&playsinline=1&widget_referrer=0&origin=${window.location.origin}&enablejsapi=1`;
        }
        setVideoPlaying(true);
        setIsMuted(false);
        startVideoProgressTracking();
    };

    const handleUnmute = () => {
        const iframe = document.getElementById('vsl-video') as HTMLIFrameElement;
        if (iframe && iframe.contentWindow) {
            const playMessage = JSON.stringify({
                event: 'command',
                func: 'playVideo'
            });
            iframe.contentWindow.postMessage(playMessage, '*');

            const unmuteMessage = JSON.stringify({
                event: 'command',
                func: 'unMute'
            });
            iframe.contentWindow.postMessage(unmuteMessage, '*');

            const volumeMessage = JSON.stringify({
                event: 'command',
                func: 'setVolume',
                args: [100]
            });
            iframe.contentWindow.postMessage(volumeMessage, '*');

            setIsMuted(false);
        }
    };

    const startVideoProgressTracking = (startFrom: number = 0) => {
        // Show offer after 3:30 (210 seconds) of video playback
        const OFFER_REVEAL_TIME = 210;
        // Video duration approximately 10 minutes (600 seconds)
        const VIDEO_DURATION = 600;
        let secondsWatched = startFrom;

        // If already past the thresholds, set states immediately
        if (secondsWatched >= OFFER_REVEAL_TIME) {
            setShowOffer(true);
        }
        if (secondsWatched >= VIDEO_DURATION) {
            setVideoEnded(true);
            return; // No need to start interval if video already ended
        }

        const interval = setInterval(() => {
            secondsWatched += 1;
            const percent = Math.min(Math.round((secondsWatched / VIDEO_DURATION) * 100), 100);
            setVideoWatchedPercent(percent);

            // Save progress to sessionStorage every 5 seconds
            if (secondsWatched % 5 === 0) {
                sessionStorage.setItem('motionEnergyVideoProgress', JSON.stringify({
                    secondsWatched,
                    offerShown: secondsWatched >= OFFER_REVEAL_TIME,
                    ended: secondsWatched >= VIDEO_DURATION
                }));
            }

            if (secondsWatched >= OFFER_REVEAL_TIME) {
                setShowOffer(true);
            }

            if (secondsWatched >= VIDEO_DURATION) {
                setVideoEnded(true);
                sessionStorage.setItem('motionEnergyVideoProgress', JSON.stringify({
                    secondsWatched,
                    offerShown: true,
                    ended: true
                }));
                clearInterval(interval);
            }
        }, 1000);
    };

    const originalPrice = 17998;
    const finalPrice = 8999;

    const summaryPoints = [
        "بلسم طبيعي 100% - مكونات آسيوية فريدة",
        "سهل الاستخدام - يُطبق على المنطقة المصابة مرتين يومياً",
        `السعر اليوم: <span class="font-bold text-red-600 text-lg">${finalPrice} DZD</span> بدلاً من <span class="line-through">${originalPrice} DZD</span>`,
        "دفع عند الاستلام - لا مخاطرة عليك",
        "توصيل سريع - لجميع المدن",
        `${stock} عبوة متبقية فقط - اطلب الآن!`
    ];


    return (
        <>
            <Header title="📰 أخبار الصحة الجزائرية" />
            <main className="max-w-4xl mx-auto bg-white shadow-lg">

                {/* VSL Video Section */}
                <div className="bg-gradient-to-br from-orange-900 to-red-800 py-8 px-5">
                    <div className="text-center mb-6">
                        <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-3 leading-tight">
                            طبيب جزائري يكشف عن سر آسيوي قديم لآلام المفاصل
                        </h1>
                        <p className="text-xl md:text-2xl text-yellow-300 font-bold">
                            "بعد سنتين من البحث... اكتشفت ما أخفاه الأطباء عنك!"
                        </p>
                        <p className="text-lg text-gray-300 mt-3">
                            (شاهد الفيديو كاملاً لتكتشف الحل الذي غيّر حياة الآلاف)
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
                            src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&cc_load_policy=0&fs=0&disablekb=1&playsinline=1&widget_referrer=0&origin=${typeof window !== 'undefined' ? window.location.origin : ''}&enablejsapi=1&start=${videoStartTime}`}
                            title="Video Sales Letter"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            referrerPolicy="strict-origin-when-cross-origin"
                        />

                        {/* Full overlay to block all clicks on YouTube video */}
                        {videoPlaying && !videoEnded && (
                            <div
                                className="absolute inset-0 z-40"
                                style={{
                                    background: 'transparent',
                                    pointerEvents: 'auto',
                                    cursor: 'default'
                                }}
                                onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                }}
                                onContextMenu={(e) => e.preventDefault()}
                            />
                        )}

                        {/* Video Ended CTA Overlay */}
                        {videoEnded && (
                            <div
                                className="absolute inset-0 z-50 flex items-center justify-center"
                                style={{
                                    background: 'rgba(0, 0, 0, 0.85)',
                                }}
                            >
                                <div className="text-center p-8">
                                    <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
                                        🎉 شاهدت الفيديو كاملاً!
                                    </h2>
                                    <p className="text-xl text-gray-200 mb-8">
                                        الآن احصل على Motion Energy بخصم 50%
                                    </p>
                                    <a
                                        href="#order-form"
                                        onClick={scrollToForm}
                                        className="inline-block bg-gradient-to-r from-orange-500 to-red-600 text-white text-2xl md:text-3xl font-extrabold py-5 px-12 rounded-full shadow-2xl hover:scale-105 transition-transform animate-pulse"
                                    >
                                        🛒 احصل على العرض الآن
                                    </a>
                                </div>
                            </div>
                        )}

                        {/* Unmute Overlay */}
                        {videoPlaying && isMuted && (
                            <div
                                className="absolute top-2 md:top-4 left-0 right-0 z-50 flex justify-center cursor-pointer px-2"
                                onClick={handleUnmute}
                            >
                                <div className="bg-gradient-to-r from-orange-600 to-red-700 text-white px-4 py-2 md:px-6 md:py-3 rounded-xl flex items-center gap-2 md:gap-3 shadow-xl hover:from-orange-700 hover:to-red-800 transition-all transform hover:scale-105 border-2 border-white animate-[wiggle_1s_ease-in-out_infinite]"
                                    style={{ animation: 'wiggle 1s ease-in-out infinite' }}>
                                    <div className="bg-white rounded-full p-1.5 md:p-2">
                                        <svg className="w-5 h-5 md:w-7 md:h-7 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                                        </svg>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-sm md:text-lg font-bold">🔊 انقر لتشغيل الصوت</p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Custom Thumbnail Overlay */}
                        {!videoPlaying && (
                            <div
                                className="absolute top-0 left-0 w-full h-full bg-black cursor-pointer group"
                                onClick={handlePlayVideo}
                            >
                                <img
                                    src={`https://img.youtube.com/vi/${YOUTUBE_VIDEO_ID}/maxresdefault.jpg`}
                                    alt="Video Thumbnail"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all" />
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                    <div className="relative">
                                        <div className="absolute inset-0 bg-orange-600 rounded-full animate-ping opacity-75"></div>
                                        <div className="relative bg-gradient-to-br from-orange-600 to-red-700 rounded-full w-24 h-24 md:w-32 md:h-32 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                                            <svg className="w-12 h-12 md:w-16 md:h-16 text-white ml-2" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M8 5v14l11-7z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
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
                            اكتشف السر الذي غيّر حياة أكثر من 17,000 شخص يعانون من آلام المفاصل
                        </p>
                    </div>
                </div>

                {/* Keep Watching Message OR Offer */}
                {!showOffer ? (
                    <div className="bg-gradient-to-br from-orange-50 to-orange-100 text-slate-800 py-10 px-5 text-center border-t-4 border-orange-500">
                        <div className="max-w-2xl mx-auto">
                            <h2 className="text-2xl md:text-3xl font-extrabold mb-6 text-slate-900">
                                🔒 ما ستكتشفه في هذا الفيديو القصير:
                            </h2>
                            <div className="space-y-4 text-right">
                                <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border border-orange-200">
                                    <span className="text-2xl ml-3">🛑</span>
                                    <p className="font-semibold text-lg">لماذا تفشل المسكنات والعلاجات التقليدية في إنهاء الألم (الحقيقة الصادمة).</p>
                                </div>
                                <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border border-orange-200">
                                    <span className="text-2xl ml-3">🌏</span>
                                    <p className="font-semibold text-lg">السر الآسيوي القديم الذي يخفيه الأطباء ويعالج جذور المشكلة.</p>
                                </div>
                                <div className="flex items-start bg-white p-4 rounded-lg shadow-sm border border-orange-200">
                                    <span className="text-2xl ml-3">💪</span>
                                    <p className="font-semibold text-lg">كيف تستعيد نشاطك وحركتك الطبيعية في أقل من 30 يوماً بدون جراحة.</p>
                                </div>
                            </div>
                            <div className="mt-8 flex items-center justify-center gap-2 text-red-600 font-bold animate-pulse">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                                <span>تأكد من تشغيل الصوت للاستماع للشرح</span>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="bg-gradient-to-br from-orange-600 to-red-600 text-white py-8 px-5 text-center">
                        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
                            🎯 عرض خاص لفترة محدودة - خصم 50%!
                        </h2>
                        <p className="text-xl mb-6">
                            السعر الآن {finalPrice} DZD بدلاً من {originalPrice} DZD
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

                            {/* The Story */}
                            <div className="my-8 bg-orange-50 p-6 rounded-xl border-2 border-orange-200">
                                <h2 className="text-2xl font-extrabold text-slate-800 mb-4 text-center">
                                    📖 قصة اختراع Motion Energy
                                </h2>
                                <div className="space-y-4 text-gray-700">
                                    <p>
                                        في عام 2007، تم تشخيص زوجة الدكتور عماد صالح بالتهاب المفصل التنكسي في الركبة. جربت كل شيء: علاجاً طبيعياً ودهانات وكريمات ومسكنات ومكملات غذائية... ولكن بلا فائدة.
                                    </p>
                                    <p>
                                        فقرر الدكتور عماد أن يبحث عن الحل بنفسه. درس كل المواد المتعلقة بأمراض المفاصل واكتشف أسرار أحسن المختصين الآسيويين في هذا المجال.
                                    </p>
                                    <p className="font-bold text-orange-700">
                                        وفي ديسمبر 2009، أدرك أنه من خلال مزج مكونات بعينها يمكنه الحصول على منتج سوف يزيل آلام المفاصل للأبد!
                                    </p>
                                    <p>
                                        بعد أسبوعين فقط من استخدام زوجته للتركيبة، اختفت الالتهابات في مفاصلها تماماً وعادت لممارسة حياتها الطبيعية!
                                    </p>
                                </div>
                            </div>

                            {/* Key Benefits */}
                            <div className="my-8 bg-green-50 p-6 rounded-xl border-2 border-green-200">
                                <h2 className="text-3xl font-extrabold text-slate-800 mb-6 text-center">
                                    ✅ ما يعالجه Motion Energy
                                </h2>
                                <ul className="list-none space-y-3 text-lg">
                                    <li className="flex items-start"><span className="text-green-500 font-bold text-2xl ml-3">✓</span>
                                        <span><strong>التهاب المفاصل</strong> - يخفف الألم والالتهاب</span>
                                    </li>
                                    <li className="flex items-start"><span className="text-green-500 font-bold text-2xl ml-3">✓</span>
                                        <span><strong>الفصال العظمي</strong> - يدعم صحة الغضاريف</span>
                                    </li>
                                    <li className="flex items-start"><span className="text-green-500 font-bold text-2xl ml-3">✓</span>
                                        <span><strong>هشاشة العظام</strong> - يقوي المفاصل</span>
                                    </li>
                                    <li className="flex items-start"><span className="text-green-500 font-bold text-2xl ml-3">✓</span>
                                        <span><strong>داء مفصل الركبة</strong> - يحسن الحركة</span>
                                    </li>
                                    <li className="flex items-start"><span className="text-green-500 font-bold text-2xl ml-3">✓</span>
                                        <span><strong>الداء العظمي الغضروفي</strong> - يدعم التعافي</span>
                                    </li>
                                    <li className="flex items-start"><span className="text-green-500 font-bold text-2xl ml-3">✓</span>
                                        <span><strong>إصابات الغضروف المفصلي</strong> - يساعد على الشفاء</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Ingredients */}
                            <div className="my-8 bg-blue-50 p-6 rounded-xl border-2 border-blue-200">
                                <h2 className="text-2xl font-extrabold text-slate-800 mb-4 text-center">
                                    🌿 المكونات الطبيعية الفريدة
                                </h2>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                    <div className="bg-white p-3 rounded-lg text-center shadow">
                                        <span className="text-2xl">🌱</span>
                                        <p className="font-bold text-gray-800">خلاصة الشارب الذهبي</p>
                                    </div>
                                    <div className="bg-white p-3 rounded-lg text-center shadow">
                                        <span className="text-2xl">🌲</span>
                                        <p className="font-bold text-gray-800">زيت التنوب</p>
                                    </div>
                                    <div className="bg-white p-3 rounded-lg text-center shadow">
                                        <span className="text-2xl">💨</span>
                                        <p className="font-bold text-gray-800">الكافور</p>
                                    </div>
                                    <div className="bg-white p-3 rounded-lg text-center shadow">
                                        <span className="text-2xl">🌶️</span>
                                        <p className="font-bold text-gray-800">زيت الفلفل الحريف</p>
                                    </div>
                                    <div className="bg-white p-3 rounded-lg text-center shadow">
                                        <span className="text-2xl">🍃</span>
                                        <p className="font-bold text-gray-800">زيت الكالبتوس</p>
                                    </div>
                                    <div className="bg-white p-3 rounded-lg text-center shadow">
                                        <span className="text-2xl">🌿</span>
                                        <p className="font-bold text-gray-800">روزماري وزنجبيل</p>
                                    </div>
                                </div>
                            </div>

                            {/* Product Image */}
                            <div className="bg-gradient-to-br from-orange-600 to-red-700 text-white p-8 my-8 rounded-xl text-center shadow-2xl">
                                <h3 className="text-4xl font-black mb-4">🌟 Motion Energy</h3>
                                <img src={MotionEnergyProduct} alt="Motion Energy Balm" className="max-w-xs mx-auto my-6 block rounded-lg" />
                                <p className="text-xl mt-4">البلسم الثوري المصنوع من مكونات آسيوية فريدة</p>
                            </div>

                            {/* Testimonials */}
                            <h2 className="text-3xl font-extrabold text-slate-800 my-8 text-center">💬 تجارب العملاء</h2>
                            <div className="space-y-6">
                                <Testimonial avatar="ه" name="هالة عبد الودود" location="الجزائر"
                                    text={
                                        <>
                                            <p>"أنا ممتنة جداً على هذا المنتج. كنت أبحث عنه فترة طويلة والطرد وصل بسرعة. شكراً فعلاً!"</p>
                                        </>
                                    }
                                />
                                <Testimonial avatar="س" name="سلوى إبراهيم" location="المغرب"
                                    text={
                                        <>
                                            <p>"عالجت الفصال العظمي بفضل هذا البلسم. شكراً كثير جداً!"</p>
                                        </>
                                    }
                                />
                                <Testimonial avatar="و" name="وداد عبد الحليم" location="الجزائر"
                                    text={
                                        <>
                                            <p>"أنا سعيدة جداً لأن المنتج ناجح في علاج آلام المفاصل. ما عدت أحس بألم في كوعي أو ركبتي."</p>
                                        </>
                                    }
                                />
                            </div>
                            <p className="text-sm text-gray-600 mt-6 text-center italic">
                                * التجارب الشخصية للعملاء. النتائج الفردية قد تختلف من شخص لآخر.
                            </p>

                            <div className="bg-orange-50 border-r-4 border-orange-400 text-orange-800 p-5 my-8 rounded-md shadow text-center">
                                <h3 className="text-2xl font-bold mb-3">🎁 عرض خاص - خصم 50%</h3>
                                <p className="mb-4 text-lg">احصل على Motion Energy بسعر مخفض قبل انتهاء العرض!</p>
                                <Countdown />
                                <p className="mt-4 text-base">السعر الأصلي: {originalPrice} DZD | السعر المخفض: {finalPrice} DZD</p>
                            </div>

                            <div className="bg-orange-50 border-2 border-orange-400 p-5 my-8 rounded-lg text-center">
                                <p className="text-xl font-bold mb-2">📦 الكمية المتوفرة:</p>
                                <div className="text-4xl text-orange-600 font-bold my-2">{stock} عبوة</div>
                                <p className="text-lg mt-2">الكمية محدودة - اطلب الآن!</p>
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
                                    <div id="discount-result" className="mt-8 p-6 bg-gradient-to-br from-orange-500 to-red-500 text-white rounded-lg shadow-xl max-w-md mx-auto">
                                        <h3 className="text-3xl font-black mb-2">🎉 مبروك!</h3>
                                        <p className="text-2xl mb-3">حصلت على خصم <span className="font-bold">50</span>%!</p>
                                        <p className="text-3xl font-bold"><del className="opacity-70 text-2xl">{originalPrice} DZD</del> <span className="text-yellow-300">{finalPrice}</span> DZD فقط!</p>
                                    </div>
                                )}
                            </div>

                            {discount !== null && (
                                <a href="#order-form" onClick={scrollToForm} className="block w-full text-center bg-gradient-to-r from-orange-500 to-red-600 text-white text-2xl md:text-3xl font-extrabold py-5 px-8 rounded-xl shadow-lg hover:scale-105 transition-transform animate-pop-in">
                                    🛒 اطلب الآن بخصم 50%
                                </a>
                            )}

                            {/* Guarantee Section */}
                            <div className="my-8 p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border-2 border-green-200 shadow-lg">
                                <h3 className="text-3xl font-bold text-green-800 mb-6 text-center">🛡️ ضماناتنا لك</h3>

                                <div className="grid md:grid-cols-3 gap-4 mb-6">
                                    <div className="bg-white p-4 rounded-lg shadow-md border-2 border-green-300 text-center">
                                        <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                                            ✓
                                        </div>
                                        <h4 className="font-bold text-green-800 mb-1">منتج أصلي</h4>
                                        <p className="text-sm text-green-700">100% أصلي ومضمون</p>
                                    </div>

                                    <div className="bg-white p-4 rounded-lg shadow-md border-2 border-blue-300 text-center">
                                        <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white text-2xl">
                                            💳
                                        </div>
                                        <h4 className="font-bold text-blue-800 mb-1">دفع عند الاستلام</h4>
                                        <p className="text-sm text-blue-700">لا تدفع إلا عند الاستلام</p>
                                    </div>

                                    <div className="bg-white p-4 rounded-lg shadow-md border-2 border-purple-300 text-center">
                                        <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white text-2xl">
                                            🚚
                                        </div>
                                        <h4 className="font-bold text-purple-800 mb-1">توصيل سريع</h4>
                                        <p className="text-sm text-purple-700">لجميع المدن</p>
                                    </div>
                                </div>

                                <div className="mt-6 text-center">
                                    <p className="text-green-800 font-bold text-lg">🔒 المخاطرة صفر - منتج أصلي وضمان الجودة!</p>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6 my-8">
                                <div className="bg-blue-50 border-2 border-blue-400 p-6 rounded-lg">
                                    <h3 className="text-2xl font-bold text-blue-800 mb-3">📦 ما تحصل عليه:</h3>
                                    <ul className="space-y-2 list-inside list-[disclosure-group] text-blue-700">
                                        <li>عبوة Motion Energy الأصلية</li>
                                        <li>تركيبة آسيوية فريدة</li>
                                        <li>مكونات طبيعية 100%</li>
                                        <li>توصيل سريع لباب منزلك</li>
                                    </ul>
                                </div>
                                <div className="bg-green-50 border-2 border-green-500 p-6 rounded-lg">
                                    <h3 className="text-2xl font-bold text-green-800 mb-3">✅ لماذا Motion Energy:</h3>
                                    <ul className="space-y-2 list-inside list-[disclosure-group] text-green-700">
                                        <li>أكثر من 17,000 عميل سعيد</li>
                                        <li>مكونات من آسيا</li>
                                        <li>نتائج سريعة وفعالة</li>
                                        <li>دفع عند الاستلام</li>
                                    </ul>
                                </div>
                            </div>
                            <p className="text-center font-bold text-xl my-6">لا تنتظر أكثر - اطلب Motion Energy الآن!</p>

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

                        <MotionEnergyOrderForm />
                    </>
                )}
            </main>

            {showOffer && (
                <div className="bg-gray-100 py-8 px-5">
                    <div className="max-w-4xl mx-auto">
                        <h3 className="text-2xl font-bold text-slate-800 mb-6">💬 تعليقات العملاء</h3>
                        <div className="space-y-5">
                            <Comment
                                avatar="س"
                                name="سعيد محسن - الجزائر"
                                time="منذ 12 دقيقة"
                                text="شكراً على البلسم ده! مش بس أنقذ زوجتي، ده كمان أنقذ ناس كثيرة. أنا قررت أجرب Motion Energy لعمودي الفقري والبلسم ده ساعدني فعلاً 👍"
                                likes={47}
                            />
                            <Comment
                                avatar="ه"
                                name="هبة عصام - المغرب"
                                time="منذ 17 دقيقة"
                                text="اشتروا Motion Energy ومش هتندموا أبداً. أنا كمان كان عندي مشاكل في المفاصل لدرجة مكنتش قادرة أمشي. لحسن الحظ ماما لقت البلسم ده ودلوقتي ما عندي مشكلة مع مفاصلي! 🙏"
                                likes={89}
                            />
                            <Comment
                                avatar="ف"
                                name="فوزية إسماعيل - الجزائر"
                                time="منذ 19 دقيقة"
                                text="لو ما كنت شوفت النتيجة بعيني ما كنت صدقت! زوجي عاش خمس سنين مع نفس المشكلة وعانى بشدة وبعدين صار يجري كأنه عنده 18 سنة! الطرد وصل بسرعة 💚"
                                likes={62}
                            />
                            <Comment
                                avatar="و"
                                name="وفاء كامل - المغرب"
                                time="منذ 24 دقيقة"
                                text="النتيجة فعلاً مذهلة وفاقت كل التوقعات. عرق النسا راح للأبد! طلبت المنتج لأصدقائي كمان 😊"
                                likes={103}
                            />
                            <Comment
                                avatar="ج"
                                name="جورج هاني - الجزائر"
                                time="منذ ساعة"
                                text="أنا طلبت المنتج ده من صفحتكم وهو بالفعل ساعدني جداً. لو كنتوا تعانون من مشكلات المفاصل مش هتلقوا أحسن من ده. كمان بيوصل بسرعة، طردي وصل في 3 أيام بس! ❤️"
                                likes={71}
                            />
                        </div>
                        <p className="text-sm text-gray-600 mt-6 text-center italic">
                            * الآراء المعروضة هي تجارب شخصية للعملاء ولا تمثل وعوداً بنتائج محددة.
                        </p>
                        <CtaButton onClick={scrollToForm} />
                    </div>
                </div>
            )}

            <Footer onShowPrivacy={() => setShowPrivacy(true)} onShowRefund={() => setShowRefund(true)}>
                <div className="max-w-4xl mx-auto text-right" dir="rtl">
                    <div className="bg-slate-700/50 rounded-lg shadow-inner border border-slate-600">
                        <button
                            onClick={() => setShowDisclaimers(!showDisclaimers)}
                            className="w-full p-4 text-right flex justify-between items-center hover:bg-slate-700 transition-colors rounded-t-lg"
                        >
                            <h3 className="text-lg font-bold text-gray-300">⚠️ معلومات مهمة</h3>
                            <svg
                                className={`w-5 h-5 text-gray-400 transition-transform ${showDisclaimers ? 'rotate-180' : ''}`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>

                        <div className={`overflow-hidden transition-all duration-300 ${showDisclaimers ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                            <div className="px-4 pb-4 text-sm text-gray-400 space-y-2">
                                <p>
                                    <strong>إخلاء المسؤولية:</strong> المعلومات المقدمة على هذا الموقع هي لأغراض تعليمية فقط ولا تُعتبر نصيحة طبية. Motion Energy هو بلسم موضعي للاستخدام الخارجي فقط.
                                </p>
                                <p>
                                    <strong>استشر طبيبك:</strong> قبل استخدام هذا المنتج أو أي منتج جديد، يُنصح بشدة باستشارة الطبيب المختص.
                                </p>
                                <p>
                                    <strong>النتائج الفردية:</strong> النتائج قد تختلف من شخص لآخر. التجارب والآراء المعروضة هي تجارب شخصية.
                                </p>
                                <p className="text-xs text-gray-500 mt-2 italic">
                                    آخر تحديث: 2025. جميع المعلومات المقدمة هي لأغراض تعليمية عامة فقط.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Footer>

            {showPrivacy && <PrivacyPolicy onClose={() => setShowPrivacy(false)} />}
            {showRefund && <RefundPolicy onClose={() => setShowRefund(false)} />}
        </>
    );
};

export default MotionEnergyAdvertorial;
