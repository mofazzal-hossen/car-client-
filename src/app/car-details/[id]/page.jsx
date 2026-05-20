import Link from "next/link";
import { ArrowLeft, Calendar, Car, CheckCircle, MapPin, Users } from "lucide-react";
import Image from "next/image";
import { BookingModal } from "@/components/BookingModal";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { g } from "framer-motion/client";

const CarDetailsPage = async ({ params }) => {
    const { id } = await params;
    const { token } = await auth.api.getToken({
        headers: await headers()
    })
    console.log(token);

    const res = await fetch(`http://localhost:6001/AddCar/${id}`, {
        cache: "no-store",
        headers: {
            authorization: `Bearer ${token}`
        }
    }
    );
    if (!res.ok) {
        throw new Error("Failed to fetch car");
    }

    const car = await res.json();
    const { _id, imageUrl, dailyRentPrice, carName, carType, seatCapacity, pickupLocation, availability, departureDate, description } = car;


    console.log(car);

    // const car = await res.json();
    // console.log(car);

    return (

        <div className="min-h-screen bg-[#0f172a] text-white px-4 py-12">

            <div className="max-w-7xl mx-auto">

                {/* Back Button */}
                <Link
                    href="/explore-cars"
                    className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-500 transition mb-10"
                >
                    <ArrowLeft size={20} />
                    Back to Explore
                </Link>

                {/* Main Card */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 bg-[#111827] border border-white/10 rounded-[32px] p-6 lg:p-8 shadow-2xl">

                    {/* Image */}
                    <div>
                        <Image
                            src={imageUrl}
                            alt={carName}
                            width={1200}
                            height={650}
                            className="w-full h-auto object-cover rounded-[28px]"
                        />
                    </div>

                    {/* Content */}
                    <div className="space-y-8">

                        {/* Top */}
                        <div className="flex items-start justify-between gap-5">

                            <div>
                                <h1 className="text-5xl font-bold leading-tight">
                                    {carName}
                                </h1>

                                <div className="mt-4">
                                    <span className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-slate-200">
                                        {carType}
                                    </span>
                                </div>
                            </div>

                            {/* Status */}
                            <div>
                                <span
                                    className={`flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold ${car.availability === "Available"
                                        ? "bg-green-500"
                                        : "bg-red-500"
                                        }`}
                                >
                                    <CheckCircle size={18} />
                                    {car.availability}
                                </span>
                            </div>
                        </div>

                        {/* Price */}
                        <div>
                            <h2 className="text-6xl font-bold text-blue-500">
                                ${car.dailyRentPrice}

                                <span className="text-3xl text-slate-400">
                                    /day
                                </span>
                            </h2>
                        </div>

                        {/* Info Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                            {/* Seats */}
                            <div className="flex items-center gap-4 rounded-3xl bg-white/5 border border-white/10 p-5">
                                <div className="rounded-2xl bg-blue-500/20 p-4 text-blue-400">
                                    <Users size={28} />
                                </div>

                                <div>
                                    <p className="text-slate-400 text-sm">
                                        Seat Capacity
                                    </p>

                                    <h3 className="text-2xl font-semibold">
                                        {seatCapacity} Seats
                                    </h3>
                                </div>
                            </div>

                            {/* Pickup */}
                            <div className="flex items-center gap-4 rounded-3xl bg-white/5 border border-white/10 p-5">
                                <div className="rounded-2xl bg-blue-500/20 p-4 text-blue-400">
                                    <MapPin size={28} />
                                </div>

                                <div>
                                    <p className="text-slate-400 text-sm">
                                        Pickup Location
                                    </p>

                                    <h3 className="text-xl font-semibold">
                                        {pickupLocation}
                                    </h3>
                                </div>
                            </div>

                            {/* Booking */}
                            <div className="flex items-center gap-4 rounded-3xl bg-white/5 border border-white/10 p-5">
                                <div className="rounded-2xl bg-blue-500/20 p-4 text-blue-400">
                                    <Car size={28} />
                                </div>

                                <div>
                                    <p className="text-slate-400 text-sm">
                                        Booking
                                    </p>

                                    <h3 className="text-2xl font-semibold">
                                        Ready to Rent
                                    </h3>
                                </div>
                            </div>

                            {/* Date */}
                            <div className="flex items-center gap-4 rounded-3xl bg-white/5 border border-white/10 p-5">
                                <div className="rounded-2xl bg-blue-500/20 p-4 text-blue-400">
                                    <Calendar size={28} />
                                </div>

                                <div>
                                    <p className="text-slate-400 text-sm">
                                        Available From
                                    </p>

                                    <h3 className="text-xl font-semibold">
                                        {departureDate}
                                    </h3>
                                </div>
                            </div>
                        </div>

                        {/* Description */}
                        <div>
                            <h2 className="text-3xl font-bold mb-4">
                                Description
                            </h2>

                            <p className="text-slate-300 text-lg leading-9">
                                {description}
                            </p>
                        </div>

                        {/* Button */}


                        <div>
                            <BookingModal car={car} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarDetailsPage;