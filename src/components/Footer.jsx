import Link from 'next/link'
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi'
import { FaXTwitter, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa6'

export default function Footer() {
    return (
        <footer className="bg-[#080808] border-t border-[#1E1E1E]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                                <span className="font-heading text-white text-lg">D</span>
                            </div>
                            <span className="font-heading text-2xl tracking-wider">
                                DRIVE<span className="text-primary">FLEET</span>
                            </span>
                        </div>
                        <p className="text-gray-500 text-sm leading-relaxed mb-6">
                            Your premium car rental platform. Explore our curated fleet of vehicles for every occasion and journey.
                        </p>
                        <div className="flex items-center gap-3">
                            {[
                                { Icon: FaXTwitter, href: '#' },
                                { Icon: FaFacebook, href: '#' },
                                { Icon: FaInstagram, href: '#' },
                                { Icon: FaLinkedin, href: '#' },
                            ].map(({ Icon, href }, i) => (
                                <a
                                    key={i}
                                    href={href}
                                    className="w-9 h-9 rounded-lg bg-[#111] border border-[#1E1E1E] flex items-center justify-center text-gray-400 hover:text-white hover:border-primary hover:bg-primary/10 transition-all"
                                >
                                    <Icon size={15} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-heading text-lg tracking-wide mb-5">QUICK LINKS</h4>
                        <ul className="space-y-3">
                            {[
                                { href: '/', label: 'Home' },
                                { href: '/explore', label: 'Explore Cars' },
                                { href: '/add-car', label: 'List Your Car' },
                                { href: '/my-bookings', label: 'My Bookings' },
                                { href: '/my-cars', label: 'My Added Cars' },
                            ].map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} className="text-gray-500 text-sm hover:text-primary transition-colors">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Car Types */}
                    <div>
                        <h4 className="font-heading text-lg tracking-wide mb-5">CAR TYPES</h4>
                        <ul className="space-y-3">
                            {['SUV', 'Sedan', 'Luxury', 'Hatchback', 'Sports', 'Convertible'].map((type) => (
                                <li key={type}>
                                    <Link href={`/explore?type=${type}`} className="text-gray-500 text-sm hover:text-primary transition-colors">
                                        {type}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-heading text-lg tracking-wide mb-5">CONTACT US</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <FiMapPin className="text-primary mt-0.5 shrink-0" />
                                <span className="text-gray-500 text-sm">123 Fleet Street, Auto City, CA 90210</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <FiPhone className="text-primary shrink-0" />
                                <a href="tel:+15551234567" className="text-gray-500 text-sm hover:text-primary transition-colors">+1 (555) 123-4567</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <FiMail className="text-primary shrink-0" />
                                <a href="mailto:hello@drivefleet.com" className="text-gray-500 text-sm hover:text-primary transition-colors">hello@drivefleet.com</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-[#1E1E1E] flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-gray-600 text-sm">
                        © {new Date().getFullYear()} DriveFleet. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        <Link href="#" className="text-gray-600 text-sm hover:text-gray-400">Privacy Policy</Link>
                        <Link href="#" className="text-gray-600 text-sm hover:text-gray-400">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}