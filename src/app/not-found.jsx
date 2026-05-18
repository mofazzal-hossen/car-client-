"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function NotFound() {
    return (
        <div className="min-h-screen bg-black overflow-hidden flex items-center justify-center relative px-6">

            {/* Animated Background Glow */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                }}
                className="absolute w-[500px] h-[500px] bg-orange-500 rounded-full blur-[120px]"
            />

            {/* Stars Background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:35px_35px]" />

            {/* Main Content */}
            <motion.div
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="relative z-10 text-center max-w-3xl"
            >

                {/* 404 Text */}
                <motion.h1
                    animate={{
                        scale: [1, 1.05, 1],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                    }}
                    className="text-[120px] md:text-[220px] font-black leading-none bg-gradient-to-r from-yellow-300 via-orange-400 to-orange-600 bg-clip-text text-transparent"
                >
                    404
                </motion.h1>

                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-white text-4xl md:text-6xl font-bold mb-6"
                >
                    Lost In Space 🚀
                </motion.h2>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="text-gray-400 text-lg md:text-xl leading-relaxed mb-10"
                >
                    The page you are looking for vanished into another galaxy.
                    Maybe it was abducted by aliens 👽
                </motion.p>

                {/* Buttons */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >

                    <Link
                        href="/"
                        className="bg-orange-500 hover:bg-orange-400 transition-all duration-300 text-black px-8 py-4 rounded-full font-bold shadow-lg shadow-orange-500/30"
                    >
                        Back Home
                    </Link>

                    <button
                        onClick={() => window.history.back()}
                        className="border border-gray-700 hover:border-orange-400 hover:text-orange-400 transition-all duration-300 px-8 py-4 rounded-full text-white bg-gray-900/50 backdrop-blur-md"
                    >
                        Go Back
                    </button>

                </motion.div>

                {/* Floating Planet */}
                <motion.div
                    animate={{
                        y: [0, -20, 0],
                        rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                    }}
                    className="mt-20 flex justify-center"
                >
                    <div className="relative w-40 h-40 rounded-full bg-gradient-to-br from-yellow-300 via-orange-400 to-orange-600 shadow-[0_0_100px_rgba(255,165,0,0.8)]">

                        {/* Planet Ring */}
                        <div className="absolute inset-0 border-[10px] border-orange-200/40 rounded-full scale-125 rotate-12"></div>

                    </div>
                </motion.div>

            </motion.div>
        </div>
    );
}