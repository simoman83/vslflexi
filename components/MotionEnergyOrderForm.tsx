import React from 'react';

// Order form for Motion Energy product targeting Morocco/Algeria market
interface MotionEnergyOrderFormProps { }

export const MotionEnergyOrderForm: React.FC<MotionEnergyOrderFormProps> = () => {
    // Regex for Moroccan/Algerian phone numbers
    // Morocco: 06xxxxxxxx, 07xxxxxxxx, 05xxxxxxxx (landlines)
    // Algeria: 05xxxxxxxx, 06xxxxxxxx, 07xxxxxxxx
    const phoneRegex = /^(0[567][0-9]{8})$/;

    return (
        <div id="order-form" className="bg-gradient-to-br from-orange-500 to-red-600 p-6 md:p-10 my-8">
            <div className="max-w-2xl mx-auto">
                <h2 className="text-white text-3xl md:text-4xl font-extrabold text-center mb-6">🎁 اطلب Motion Energy الآن!</h2>

                <form
                    action="https://moab.lovestoblog.com/apidzmotion.php"
                    method="GET"
                    className="bg-white p-8 rounded-xl shadow-2xl space-y-5"
                >
                    <div>
                        <label className="block text-gray-700 font-bold mb-2 text-lg" htmlFor="name">👤 الاسم الكامل:</label>
                        <input
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-400"
                            id="name"
                            name="name"
                            type="text"
                            placeholder="أدخل اسمك الكامل"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-bold mb-2 text-lg" htmlFor="phone">📱 رقم الهاتف:</label>
                        <input
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-400"
                            id="phone"
                            name="phone"
                            type="tel"
                            placeholder="مثال: 0612345678"
                            required
                            pattern={phoneRegex.source}
                            title="الرجاء إدخال رقم هاتف صحيح (10 أرقام تبدأ ب 05، 06 أو 07)"
                        />
                    </div>

                    <div className="bg-gradient-to-br from-orange-50 to-red-50 p-4 rounded-lg text-center my-4 border-2 border-orange-200">
                        <p className="text-gray-700 text-lg font-bold mb-2">عرض خاص - خصم 50%!</p>
                        <p className="text-5xl font-extrabold text-red-600">8999 DZD</p>
                        <p className="text-xl text-gray-500 line-through">17998 DZD</p>
                        <p className="text-green-600 font-bold mt-2">🚚 توصيل سريع + الدفع عند الاستلام</p>
                    </div>

                    {/* Hidden inputs for form processing */}
                    <input type="hidden" name="i" value="3" />
                    <input type="hidden" name="submit" value="submit" />
                    <input type="hidden" name="subacc" value="" />
                    <input type="hidden" name="product" value="motion_energy" />

                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-extrabold text-2xl py-4 rounded-lg shadow-lg transition-transform transform hover:scale-105"
                    >
                        ✅ اطلب الآن - ادفع عند الاستلام
                    </button>

                    <p className="text-center text-gray-500 text-sm mt-4">
                        🔒 معلوماتك محمية. سيتم التواصل معك قريباً لتأكيد الطلب.
                    </p>
                </form>
            </div>
        </div>
    );
};
