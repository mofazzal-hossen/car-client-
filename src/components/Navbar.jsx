"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { authClient } from "@/lib/auth-client";

const Avatar = ({ children, className = "" }) => (
    <div className={`relative inline-flex h-10 w-10 shrink-0 overflow-hidden rounded-full bg-white/5 ${className}`}>
        {children}
    </div>
);

const AvatarImage = ({ src, alt }) => (
    <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        unoptimized
        sizes="40px"
    />
);

const AvatarFallback = ({ children }) => (
    <div className="flex h-full w-full items-center justify-center bg-slate-600 text-sm font-medium text-white">
        {children}
    </div>
);

const Navbar = () => {
    const router = useRouter();
    const { data: session } = authClient.useSession();
    const user = session?.user;

    const [open, setOpen] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    // 🌙 Theme state
    const [theme, setTheme] = useState("dark");

    // Load theme
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") || "dark";
        setTheme(savedTheme);
        document.documentElement.classList.toggle(
            "dark",
            savedTheme === "dark"
        );
    }, []);

    // Toggle theme
    const toggleTheme = () => {
        const newTheme = theme === "dark" ? "light" : "dark";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
        document.documentElement.classList.toggle("dark", newTheme === "dark");
    };

    const handleSignOut = async () => {
        await authClient.signOut();
        router.push("/login");
    };

    const navItems = [
        { name: "Home", path: "/" },
        { name: "Explore Cars", path: "/explore-cars" },
        { name: "Add Car", path: "/add-car" },
        { name: "My Bookings", path: "/my-bookings" },
    ];

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#140804]/90 backdrop-blur-md dark:bg-black/80">
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 lg:px-8">

                {/* Logo */}
                <Link href="/" className="text-3xl font-bold text-white">
                    🚗 DriveFleet
                </Link>

                {/* Desktop Nav */}
                <div className="hidden items-center gap-8 text-white font-medium md:flex">
                    {navItems.map((item) => (
                        <Link
                            key={item.path}
                            href={item.path}
                            className="transition hover:text-orange-400"
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>

                {/* Right Side */}
                <div className="hidden items-center gap-3 md:flex">

                    {/* 🌙 Theme Toggle Button */}
                    <button
                        onClick={toggleTheme}
                        className="rounded-full border border-white/20 px-3 py-2 text-white transition hover:bg-white hover:text-black"
                    >
                        {theme === "dark" ? "🌙" : "☀️"}
                    </button>

                    {!user ? (
                        <>
                            <Link
                                href="/login"
                                className="rounded-full border border-white/20 px-5 py-2 text-white hover:bg-white hover:text-black transition"
                            >
                                Login
                            </Link>

                            <Link
                                href="/register"
                                className="rounded-full bg-[#ff1e1e] px-6 py-2 text-white hover:bg-red-700 transition"
                            >
                                Register
                            </Link>
                        </>
                    ) : (
                        <div className="relative">
                            <button
                                onClick={() => setDropdown(!dropdown)}
                                className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 p-1 hover:bg-white/10"
                            >
                                <Avatar>
                                    {user?.image ? (
                                        <AvatarImage src={user.image} alt={user?.name} />
                                    ) : (
                                        <AvatarFallback>
                                            {user?.name?.charAt(0) ?? "U"}
                                        </AvatarFallback>
                                    )}
                                </Avatar>

                                <ChevronDown
                                    size={18}
                                    className={`text-white transition-transform ${dropdown ? "rotate-180" : ""}`}
                                />
                            </button>

                            {dropdown && (
                                <div className="absolute right-0 mt-4 w-56 flex flex-col gap-3 rounded-2xl border border-white/10 bg-[#1b0d08] p-4 text-white shadow-xl">

                                    <div className="flex items-center gap-3">
                                        <Avatar>
                                            {user?.image ? (
                                                <AvatarImage src={user.image} alt={user?.name} />
                                            ) : (
                                                <AvatarFallback>
                                                    {user?.name?.charAt(0) ?? "U"}
                                                </AvatarFallback>
                                            )}
                                        </Avatar>

                                        <div>
                                            <p className="text-sm font-semibold">{user?.name}</p>
                                            <p className="text-xs text-slate-300">{user?.email}</p>
                                        </div>
                                    </div>

                                    <Link href="/add-car" className="hover:text-orange-400">
                                        Add Car
                                    </Link>

                                    <Link href="/my-bookings" className="hover:text-orange-400">
                                        My Bookings
                                    </Link>

                                    <Link href="/my-added-cars" className="hover:text-orange-400">
                                        My Added Cars
                                    </Link>

                                    <button
                                        onClick={handleSignOut}
                                        className="text-left text-red-400 hover:text-red-500"
                                    >
                                        Logout
                                    </button>
                                </div>
                            )}
                        </div>
                    )}
                </div>

                {/* Mobile Button */}
                <button
                    onClick={() => setOpen(!open)}
                    className="text-white md:hidden"
                >
                    {open ? <X size={30} /> : <Menu size={30} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="border-t border-white/10 bg-[#140804] px-4 py-6 text-white md:hidden">

                    {/* Theme Button Mobile */}
                    <button
                        onClick={toggleTheme}
                        className="mb-4 rounded-full border border-white/20 px-4 py-2"
                    >
                        {theme === "dark" ? "🌙 Dark Mode" : "☀️ Light Mode"}
                    </button>

                    <div className="flex flex-col gap-5 font-medium">

                        {navItems.map((item) => (
                            <Link key={item.path} href={item.path}>
                                {item.name}
                            </Link>
                        ))}

                        {user ? (
                            <>
                                <Link href="/my-added-cars">My Added Cars</Link>

                                <button
                                    onClick={handleSignOut}
                                    className="text-left text-red-400"
                                >
                                    Logout
                                </button>
                            </>
                        ) : (
                            <>
                                <Link href="/login">Login</Link>
                                <Link href="/register">Register</Link>
                            </>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;