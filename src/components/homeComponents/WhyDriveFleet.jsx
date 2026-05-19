import React from "react";
import { Card } from "@heroui/react";

import {
    FaShieldAlt,
    FaBolt,
    FaWrench,
    FaMoneyBillWave,
    FaHandSparkles,
    FaLeaf,
} from "react-icons/fa";

export default function WhyDriveFleet() {

    const benefits = [
        {
            icon: <FaShieldAlt className="text-orange-400 text-xl" />,
            title: "Fully Insured",
            desc: "Every vehicle comes with comprehensive insurance coverage for worry-free driving.",
        },

        {
            icon: <FaBolt className="text-yellow-500 text-xl" />,
            title: "Instant Booking",
            desc: "Confirm your reservation in under 2 minutes with our streamlined platform.",
        },

        {
            icon: <FaWrench className="text-gray-400 text-xl" />,
            title: "Roadside Assist",
            desc: "24/7 emergency roadside assistance anywhere in the country.",
        },

        {
            icon: <FaMoneyBillWave className="text-yellow-600 text-xl" />,
            title: "Best Price Guarantee",
            desc: "Find a lower price elsewhere? We will match it, no questions asked.",
        },

        {
            icon: <FaHandSparkles className="text-amber-600 text-xl" />,
            title: "Sanitized Cars",
            desc: "Every vehicle is deep-cleaned and sanitized before each rental.",
        },

        {
            icon: <FaLeaf className="text-green-500 text-xl" />,
            title: "Eco-Friendly Options",
            desc: "Choose from our growing fleet of hybrid and electric vehicles.",
        },
    ];

    return (

        <section className="bg-[#0D0D0D] text-white py-24 px-4 md:px-8">

            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-20">

                <span className="text-[#D4AF37] font-semibold text-sm tracking-[5px] uppercase block mb-4">
                    Benefits
                </span>

                <h2 className="text-5xl md:text-7xl font-black uppercase mb-6 text-[#E7E1D9]">
                    Why DriveFleet?
                </h2>

                <p className="text-gray-400 text-lg md:text-xl">
                    We are more than just a rental — we are your road companion.
                </p>

            </div>

            {/* Cards */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">

                {benefits.map((item, index) => (

                    <Card
                        key={index}
                        className="bg-[#141414] border border-[#232323] rounded-2xl p-7 hover:border-[#3a3a3a] transition-all duration-300"
                    >

                        <div className="flex items-start gap-5">

                            {/* Icon */}
                            <div className="w-14 h-14 rounded-xl bg-[#1A1A14] border border-[#3a3212]/30 flex items-center justify-center flex-shrink-0">
                                {item.icon}
                            </div>

                            {/* Text */}
                            <div>

                                <h3 className="text-2xl font-bold text-white mb-3">
                                    {item.title}
                                </h3>

                                <p className="text-gray-400 leading-8 text-[15px]">
                                    {item.desc}
                                </p>

                            </div>

                        </div>

                    </Card>
                ))}
            </div>
        </section>
    );
}