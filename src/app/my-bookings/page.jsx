import Image from "next/image";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const MyBookingCar = async () => {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    const user = session?.user;

    if (!user?.id) {
        return (
            <div className="p-6 text-red-500">
                Please login to view your bookings
            </div>
        );
    }

    const res = await fetch(
        `http://localhost:6001/booking/${user.id}`,
        { cache: "no-store" }
    );

    if (!res.ok) {
        return <div className="p-6">Failed to load bookings</div>;
    }

    const bookings = await res.json();

    return (
        <div className="max-w-7xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6">
                My Bookings
            </h1>

            {bookings.length === 0 ? (
                <p className="text-gray-500">
                    No bookings found
                </p>
            ) : (
                <div className="grid md:grid-cols-2 gap-6">
                    {bookings.map((b) => (
                        <div
                            key={b._id}
                            className="border rounded-xl shadow-sm p-4 hover:shadow-md transition"
                        >
                            {/* Car Image */}


                            <Image
                                src={b.carImage}
                                alt={b.carName}
                                width={500}
                                height={300}
                                className="rounded-lg object-cover"
                            />

                            {/* Car Name */}
                            <h2 className="text-xl font-semibold mt-3">
                                🚗 {b.carName}
                            </h2>

                            {/* Car Type */}
                            <p className="text-sm text-gray-600">
                                Type: {b.carType}
                            </p>

                            {/* Price */}
                            <p className="mt-2 font-medium">
                                💰 Total Price: ${b.totalPrice}
                            </p>

                            {/* Pickup Location */}
                            <p className="text-gray-600">
                                📍 Pickup: {b.pickupLocation}
                            </p>

                            {/* Driver */}
                            <p className="text-gray-600">
                                👨‍✈️ Driver Needed: {b.driverNeeded}
                            </p>

                            {/* Booking Date */}
                            <p className="text-gray-600">
                                📅 Date:{" "}
                                {new Date(b.bookingDate).toLocaleString()}
                            </p>

                            {/* Status */}
                            <div className="mt-2">
                                <span
                                    className={`px-3 py-1 rounded-full text-sm font-medium ${b.status === "Pending"
                                        ? "bg-yellow-100 text-yellow-700"
                                        : b.status === "Confirmed"
                                            ? "bg-green-100 text-green-700"
                                            : "bg-red-100 text-red-700"
                                        }`}
                                >
                                    {b.status}
                                </span>
                            </div>

                            {/* Special Note */}
                            {b.specialNote && (
                                <p className="mt-2 text-sm text-gray-500">
                                    📝 {b.specialNote}
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MyBookingCar;