"use client";

import { Button, Card, FieldError, Input, Label, TextArea, TextField } from "@heroui/react";

import { Car, DollarSign, Users, MapPin, Image as ImageIcon, FileText, CheckCircle } from "lucide-react";
const AddCar = () => {

    const onSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const carData = Object.fromEntries(
            formData.entries()
        );

        console.log(carData);

        // API Call
        //     const res = await fetch(
        //         "http://localhost:6001/add-car",
        //         {
        //             method: "POST",
        //             headers: {
        //                 "Content-Type": "application/json",
        //             },
        //             body: JSON.stringify(carData),
        //         }
        //     );

        //     const data = await res.json();

        //     console.log(data);
    };

    return (
        <section
            className="min-h-screen bg-cover bg-center bg-no-repeat relative"
            style={{
                backgroundImage: `url("https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop")`,
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/70"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">

                {/* Heading */}
                <div className="text-center mb-12">

                    <h1 className="text-5xl font-black text-white mb-4">
                        Add Car Listing
                    </h1>

                    <p className="text-white/70 text-lg">
                        Add your premium car for rental services.
                    </p>

                </div>

                {/* Form Card */}
                <Card className="bg-white/10 backdrop-blur-xl border border-white/10 shadow-2xl">

                    <form
                        onSubmit={onSubmit}
                        className="p-10 space-y-8"
                    >

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                            {/* Car Name */}
                            <TextField
                                name="carName"
                                isRequired
                            >
                                <Label className="text-white">
                                    Car Name
                                </Label>

                                <div className="relative">

                                    <Car
                                        size={18}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60 z-10"
                                    />

                                    <Input
                                        placeholder="BMW M4"
                                        className="pl-10 rounded-2xl"
                                    />

                                </div>

                                <FieldError />
                            </TextField>

                            {/* Daily Rent */}
                            <TextField
                                name="dailyRentPrice"
                                type="number"
                                isRequired
                            >
                                <Label className="text-white">
                                    Daily Rent Price
                                </Label>

                                <div className="relative">

                                    <DollarSign
                                        size={18}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60 z-10"
                                    />

                                    <Input
                                        type="number"
                                        placeholder="$120"
                                        className="pl-10 rounded-2xl"
                                    />

                                </div>

                                <FieldError />
                            </TextField>

                            {/* Car Type */}
                            <div className="space-y-2">

                                <label className="text-sm text-white">
                                    Car Type
                                </label>

                                <select
                                    name="carType"
                                    className="w-full h-14 rounded-2xl bg-white/10 border border-white/20 px-4 text-white outline-none"
                                    required
                                >
                                    <option value="" className="text-black">
                                        Select Car Type
                                    </option>

                                    <option value="SUV" className="text-black">
                                        SUV
                                    </option>

                                    <option value="Sedan" className="text-black">
                                        Sedan
                                    </option>

                                    <option value="Luxury" className="text-black">
                                        Luxury
                                    </option>

                                    <option value="Sports" className="text-black">
                                        Sports
                                    </option>

                                    <option value="Convertible" className="text-black">
                                        Convertible
                                    </option>

                                    <option value="Hatchback" className="text-black">
                                        Hatchback
                                    </option>
                                </select>
                            </div>

                            {/* Seat Capacity */}
                            <TextField
                                name="seatCapacity"
                                type="number"
                                isRequired
                            >
                                <Label className="text-white">
                                    Seat Capacity
                                </Label>

                                <div className="relative">

                                    <Users
                                        size={18}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60 z-10"
                                    />

                                    <Input
                                        type="number"
                                        placeholder="4"
                                        className="pl-10 rounded-2xl"
                                    />

                                </div>

                                <FieldError />
                            </TextField>

                            {/* Image URL */}
                            <TextField
                                name="imageUrl"
                                isRequired
                            >
                                <Label className="text-white">
                                    Image URL
                                </Label>

                                <div className="relative">

                                    <ImageIcon
                                        size={18}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60 z-10"
                                    />

                                    <Input
                                        type="url"
                                        placeholder="https://..."
                                        className="pl-10 rounded-2xl"
                                    />

                                </div>

                                <FieldError />
                            </TextField>

                            {/* Pickup Location */}
                            <TextField
                                name="pickupLocation"
                                isRequired
                            >
                                <Label className="text-white">
                                    Pickup Location
                                </Label>

                                <div className="relative">

                                    <MapPin
                                        size={18}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60 z-10"
                                    />

                                    <Input
                                        placeholder="Dhaka"
                                        className="pl-10 rounded-2xl"
                                    />

                                </div>

                                <FieldError />
                            </TextField>

                            {/* Availability */}
                            <div className="space-y-2">

                                <label className="text-sm text-white">
                                    Availability Status
                                </label>

                                <select
                                    name="availability"
                                    className="w-full h-14 rounded-2xl bg-white/10 border border-white/20 px-4 text-white outline-none"
                                    required
                                >
                                    <option value="" className="text-black">
                                        Select Status
                                    </option>

                                    <option value="Available" className="text-black">
                                        Available
                                    </option>

                                    <option value="Unavailable" className="text-black">
                                        Unavailable
                                    </option>
                                </select>
                            </div>

                            {/* Description */}
                            <div className="md:col-span-2">

                                <TextField
                                    name="description"
                                    isRequired
                                >
                                    <Label className="text-white">
                                        Description
                                    </Label>

                                    <div className="relative">

                                        <FileText
                                            size={18}
                                            className="absolute left-4 top-5 text-white/60 z-10"
                                        />

                                        <TextArea
                                            placeholder="Describe the car..."
                                            className="pl-10 rounded-3xl"
                                        />

                                    </div>

                                    <FieldError />
                                </TextField>

                            </div>
                        </div>

                        {/* Submit Button */}
                        <Button
                            type="submit"
                            className="w-full bg-[#ff1e1e] text-white rounded-2xl h-14 text-lg font-semibold"
                        >
                            <CheckCircle size={20} />
                            Add Car Listing
                        </Button>

                    </form>
                </Card>
            </div>
        </section>
    );
};

export default AddCar;