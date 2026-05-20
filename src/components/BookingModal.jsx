"use client";

import { useState } from "react";

import {
    Button,
    Modal,
    Surface,
} from "@heroui/react";

import { authClient } from "@/lib/auth-client";


export function BookingModal({ car }) {

    const { data: session } = authClient.useSession();

    const user = session?.user;

    // Driver State
    const [driverNeeded, setDriverNeeded] =
        useState("No");

    // Dynamic Car Price
    const carPrice =
        Number(car?.dailyRentPrice);

    // Total Price
    const totalPrice =
        driverNeeded === "Yes"
            ? carPrice + 50
            : carPrice;

    // Booking Function
    const handleBooking = async (e) => {

        e.preventDefault();

        const formData =
            new FormData(e.currentTarget);

        const bookingFormData =
            Object.fromEntries(
                formData.entries()
            );

        // Final Booking Object
        const bookingData = {

            // User Info
            userId: user?.id,
            userImage: user?.image,
            userName: user?.name,
            userEmail: user?.email,

            // Car Info
            carId: car?._id,
            carName: car?.carName,
            carImage: car?.imageUrl,
            carType: car?.carType,
            pickupLocation:
                car?.pickupLocation,

            // Booking Info
            driverNeeded,
            specialNote:
                bookingFormData.specialNote,
            totalPrice,

            // Extra
            bookingDate:
                new Date().toISOString(),

            status: "Pending",
        };

        // console.log(bookingData);

        const { data: tokenData } = await authClient.token();
        console.log(tokenData)



        // API CALL
        const res = await fetch(
            "http://localhost:6001/booking",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json",
                    authorization: `Bearer ${tokenData?.token}`,

                },

                body: JSON.stringify(bookingData),
            }
        );

        const result = await res.json();

        console.log(result);

        if (result.insertedId) {

            alert("Booking Successful ✅");

        } else {

            alert("Booking Failed ❌");
        }
    };

    return (
        <Modal>

            {/* Open Button */}
            <Button className="h-14 md:h-16 w-full rounded-2xl bg-gradient-to-r from-black to-gray-900 text-base md:text-xl font-semibold text-white shadow-lg transition hover:scale-[1.02] hover:from-blue-700 hover:to-blue-500">
                Book Now
            </Button>

            <Modal.Backdrop className="bg-black/60 backdrop-blur-sm">

                <Modal.Container placement="center">

                    <Modal.Dialog className="w-[95%] sm:max-w-2xl rounded-[24px] md:rounded-[30px] overflow-hidden border border-white/10 bg-gradient-to-br from-slate-900 via-black to-slate-800">

                        <Modal.CloseTrigger className="right-4 top-4 text-gray-400 hover:text-white" />

                        {/* Header */}
                        <Modal.Header className="border-b border-gray-200 bg-white px-5 py-6 md:px-10 md:py-8">

                            <div className="space-y-3">

                                <div className="inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-xs md:text-sm font-semibold text-blue-700">
                                    Premium Car Booking
                                </div>

                                <Modal.Heading className="text-2xl md:text-4xl font-extrabold text-gray-900">
                                    Book {car?.carName}
                                </Modal.Heading>

                                <p className="text-sm md:text-lg text-gray-500">
                                    Complete your booking
                                    information below.
                                </p>
                            </div>
                        </Modal.Header>

                        {/* Body */}
                        <Modal.Body className="bg-white px-4 py-5 md:px-10 md:py-10">

                            <Surface
                                variant="default"
                                className="rounded-[25px] border border-gray-200 bg-gradient-to-b from-white to-gray-50 p-4 md:p-8"
                            >

                                <form
                                    onSubmit={handleBooking}
                                    className="flex flex-col gap-6 md:gap-10"
                                >

                                    {/* Driver Needed */}
                                    <div className="space-y-5">

                                        <div>

                                            <h3 className="text-xl md:text-3xl font-bold text-gray-900">
                                                Driver Needed?
                                            </h3>

                                            <p className="mt-2 text-sm md:text-lg text-gray-500">
                                                Select your
                                                driving option
                                            </p>
                                        </div>

                                        <div className="grid gap-4">

                                            {/* YES */}
                                            <label
                                                className={`flex flex-col md:flex-row md:items-center md:justify-between gap-4 rounded-3xl border-2 p-4 md:p-6 cursor-pointer transition ${driverNeeded ===
                                                    "Yes"
                                                    ? "border-blue-500 bg-blue-50"
                                                    : "border-gray-200 bg-white"
                                                    }`}
                                            >

                                                <div className="flex items-start gap-4">

                                                    <input
                                                        type="radio"
                                                        name="driverNeeded"
                                                        value="Yes"
                                                        onChange={(e) =>
                                                            setDriverNeeded(
                                                                e.target.value
                                                            )
                                                        }
                                                        className="mt-1 h-5 w-5 accent-black"
                                                    />

                                                    <div>

                                                        <h4 className="text-lg md:text-2xl font-bold text-gray-900">
                                                            Yes,
                                                            Need Driver
                                                        </h4>

                                                        <p className="mt-1 text-sm md:text-lg text-gray-500">
                                                            Professional
                                                            driver
                                                            included
                                                        </p>
                                                    </div>
                                                </div>

                                                <span className="w-fit rounded-full bg-black px-4 py-2 text-sm md:text-lg font-bold text-white">
                                                    +$50/day
                                                </span>
                                            </label>

                                            {/* NO */}
                                            <label
                                                className={`flex flex-col md:flex-row md:items-center md:justify-between gap-4 rounded-3xl border-2 p-4 md:p-6 cursor-pointer transition ${driverNeeded ===
                                                    "No"
                                                    ? "border-black bg-gray-100"
                                                    : "border-gray-200 bg-white"
                                                    }`}
                                            >

                                                <div className="flex items-start gap-4">

                                                    <input
                                                        type="radio"
                                                        name="driverNeeded"
                                                        value="No"
                                                        defaultChecked
                                                        onChange={(e) =>
                                                            setDriverNeeded(
                                                                e.target.value
                                                            )
                                                        }
                                                        className="mt-1 h-5 w-5 accent-black"
                                                    />

                                                    <div>

                                                        <h4 className="text-lg md:text-2xl font-bold text-gray-900">
                                                            No,
                                                            I'll Drive
                                                        </h4>

                                                        <p className="mt-1 text-sm md:text-lg text-gray-500">
                                                            Self-drive
                                                            experience
                                                        </p>
                                                    </div>
                                                </div>
                                            </label>
                                        </div>
                                    </div>

                                    {/* Special Note */}
                                    <div className="space-y-4">

                                        <div>

                                            <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                                                Special Note
                                            </h3>

                                            <p className="mt-2 text-sm md:text-lg text-gray-500">
                                                Pickup details or
                                                special request
                                            </p>
                                        </div>

                                        <textarea
                                            name="specialNote"
                                            rows={4}
                                            placeholder="Write your instructions..."
                                            className="w-full rounded-[24px] border border-gray-200 bg-gray-50 p-4 md:p-6 text-base md:text-lg text-gray-800 outline-none focus:border-black focus:bg-white"
                                        />
                                    </div>

                                    {/* Price Summary */}
                                    <div className="rounded-[24px] border border-gray-200 bg-gradient-to-br from-gray-50 to-white p-5 md:p-8">

                                        {/* Car Price */}
                                        <div className="mb-6 flex items-center justify-between border-b border-gray-200 pb-5">

                                            <div>

                                                <h4 className="text-lg md:text-2xl font-semibold text-gray-900">
                                                    Daily Rental
                                                </h4>

                                                <p className="mt-1 text-sm md:text-lg text-gray-500">
                                                    Base rental
                                                    price
                                                </p>
                                            </div>

                                            <p className="text-2xl md:text-3xl font-bold text-gray-900">
                                                ${carPrice}
                                            </p>
                                        </div>

                                        {/* Driver Charge */}
                                        {
                                            driverNeeded ===
                                            "Yes" && (
                                                <div className="mb-6 flex items-center justify-between border-b border-gray-200 pb-5">

                                                    <div>

                                                        <h4 className="text-lg md:text-2xl font-semibold text-gray-900">
                                                            Driver
                                                            Charge
                                                        </h4>

                                                        <p className="mt-1 text-sm md:text-lg text-gray-500">
                                                            Daily
                                                            driver
                                                            service
                                                        </p>
                                                    </div>

                                                    <p className="text-2xl md:text-3xl font-bold text-gray-900">
                                                        +$50
                                                    </p>
                                                </div>
                                            )
                                        }

                                        {/* Total */}
                                        <div className="flex items-center justify-between">

                                            <div>

                                                <h3 className="text-2xl md:text-4xl font-extrabold text-gray-900">
                                                    Total
                                                </h3>

                                                <p className="mt-2 text-sm md:text-lg text-gray-500">
                                                    Per day rental
                                                </p>
                                            </div>

                                            <p className="text-3xl md:text-5xl font-extrabold text-blue-600">
                                                ${totalPrice}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Submit Button */}
                                    <Button
                                        type="submit"
                                        slot="close"
                                        className="h-14 md:h-16 w-full rounded-[24px] bg-gradient-to-r from-black to-gray-900 text-lg md:text-2xl font-bold text-white shadow-xl transition hover:scale-[1.01] hover:from-blue-700 hover:to-blue-500"
                                    >
                                        Confirm Booking
                                    </Button>
                                </form>
                            </Surface>
                        </Modal.Body>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}


