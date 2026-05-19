import React from 'react'

const Process = () => {
    return (
        <div>

            <section className="bg-[#050505] border-y border-white/10 py-24">

                <div className="max-w-7xl mx-auto px-5">

                    {/* Heading */}
                    <div className="text-center mb-20">

                        <p className="text-[#c9a227] uppercase tracking-[5px] text-sm font-semibold mb-5">
                            Process
                        </p>

                        <h2 className="text-[70px] leading-none font-black uppercase text-[#e8e3dc]">
                            How It Works
                        </h2>

                        <p className="text-[#8f8f8f] text-[22px] mt-6">
                            Renting a car has never been this simple.
                        </p>

                    </div>

                    {/* Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10">

                        {[
                            {
                                icon: "🔍",
                                title: "Browse & Choose",
                                desc: "Explore our fleet with advanced filters. Find the perfect car for your trip.",
                            },

                            {
                                icon: "📅",
                                title: "Book Instantly",
                                desc: "Select your dates, add special requests, and confirm your booking in seconds.",
                            },

                            {
                                icon: "🔑",
                                title: "Pick Up & Drive",
                                desc: "Arrive at the pickup point, get your keys, and hit the open road.",
                            },

                            {
                                icon: "💳",
                                title: "Pay Transparently",
                                desc: "No hidden fees. Pay exactly what you see. Full refund on cancellation.",
                            },
                        ].map((item, i) => (

                            <div
                                key={i}
                                className="relative min-h-50 bg-[#070707] border border-[#232323] rounded-[28px] p-5 overflow-hidden"
                            >

                                {/* Big Number */}
                                <h1 className="absolute top-10 right-5 flex  text-[90px] leading-none font-black text-[#3a3212]/40">
                                    {String(i + 1).padStart(2, "0")}
                                </h1>

                                {/* Icon */}
                                <div className="text-[82px] ">
                                    {item.icon}
                                </div>

                                {/* Title */}
                                <h3 className="text-[26px] font-bold text-[#ece7df] mb-6 leading-tight">
                                    {item.title}
                                </h3>

                                {/* Description */}
                                <p className="text-[#8a8a8a] text-[19px] ">
                                    {item.desc}
                                </p>

                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Process
