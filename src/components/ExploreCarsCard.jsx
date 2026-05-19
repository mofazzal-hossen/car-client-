import { MapPin, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ExploreCarsCard = ({ car }) => {
    return (
        <div className="group overflow-hidden rounded-[32px] border border-gray-200 bg-[#111827] shadow-sm transition hover:-translate-y-2 hover:shadow-2xl">

            {/* Image */}
            <div className="relative overflow-hidden h-65">
                <Image
                    src={car.imageUrl}
                    alt={car.carName}
                    fill
                    sizes="100vw"
                    className="object-cover transition duration-500 group-hover:scale-110"
                />

                {/* Availability */}
                <div className="absolute top-5 right-5">
                    <span
                        className={`rounded-full px-5 py-2 text-sm font-semibold text-white shadow-lg ${car.availability === "Available"
                            ? "bg-green-500"
                            : "bg-red-500"
                            }`}
                    >
                        {car.availability}
                    </span>
                </div>

                {/* Car Type */}
                <div className="absolute bottom-5 left-5">
                    <span className="rounded-full bg-black/60 backdrop-blur-md px-4 py-2 text-sm font-medium text-white border border-white/20">
                        {car.carType}
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="space-y-6 p-7">

                {/* Title */}
                <div>
                    <h2 className="text-3xl font-bold text-gray-900 leading-tight">
                        {car.carName}
                    </h2>

                    <p className="mt-2 text-gray-500">
                        Premium rental car for comfortable journeys.
                    </p>
                </div>

                {/* Info */}
                <div className="flex flex-wrap items-center gap-6 text-gray-600">

                    <div className="flex items-center gap-2">
                        <Users size={22} />

                        <span className="text-lg">
                            {car.seatCapacity} Seats
                        </span>
                    </div>

                    <div className="flex items-center gap-2">
                        <MapPin size={22} />

                        <span className="text-lg">
                            {car.pickupLocation}
                        </span>
                    </div>
                </div>

                {/* Description */}
                <p className="line-clamp-2 text-lg leading-8 text-gray-600">
                    {car.description}
                </p>

                {/* Price */}
                <div className="flex items-center justify-between border-t border-gray-200 pt-5">

                    <div>
                        <h2 className="text-5xl font-bold text-blue-600">
                            ${car.dailyRentPrice}

                            <span className="text-2xl text-gray-500 font-medium">
                                /day
                            </span>
                        </h2>

                        <p className="mt-2 text-sm text-gray-500">
                            Available from:

                            <span className="ml-1 font-semibold text-gray-700">
                                {car.departureDate}
                            </span>
                        </p>
                    </div>

                </div>

                <Link href={`/car-details/${car._id}`}>
                    <button className="rounded-2xl bg-black px-6 py-4 text-lg font-semibold text-white transition hover:bg-blue-600">
                        View Details
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default ExploreCarsCard;