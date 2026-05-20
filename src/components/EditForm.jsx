"use client";

import { Button, FieldError, Input, Label, Modal, Surface, TextArea, TextField } from "@heroui/react";

import { BiEdit } from "react-icons/bi";

export function EditForm({ response }) {

    const {
        _id,
        carName,
        pickupLocation,
        driverNeeded,
        specialNote,
        totalPrice,
        status,
    } = response;

    // UPDATE FUNCTION
    const onSubmit = async (e) => {

        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const updateData = Object.fromEntries(formData.entries());

        console.log(updateData);

        // API CALL
        const res = await fetch(
            `http://localhost:6001/AddCar/${_id}`,
            {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(updateData),
            }
        );

        const data = await res.json();

        console.log(data);

        alert("Booking Updated Successfully");
    };

    return (
        <Modal>

            {/* Edit Button */}
            <Modal.Trigger>
                <button className="flex items-center gap-2 rounded-xl border border-gray-300 px-4 py-2 font-medium transition hover:bg-gray-100">

                    <BiEdit className="text-xl" />

                    Edit

                </button>
            </Modal.Trigger>

            <Modal.Backdrop>

                <Modal.Container placement="center">

                    <Modal.Dialog className="sm:max-w-2xl rounded-3xl bg-mauve-800 p-6">

                        <Modal.CloseTrigger />

                        {/* Header */}
                        <Modal.Header>

                            <div>

                                <Modal.Heading className="text-3xl font-bold text-white">
                                    Edit Booking
                                </Modal.Heading>

                                <p className="mt-2 text-gray-500">
                                    Update your booking information
                                </p>
                            </div>

                        </Modal.Header>

                        {/* Body */}
                        <Modal.Body>

                            <Surface
                                variant="default"
                                className="rounded-3xl bg-gray-50 p-6"
                            >

                                <form
                                    onSubmit={onSubmit}
                                    className="space-y-6"
                                >

                                    {/* Car Name */}
                                    <TextField
                                        defaultValue={carName}
                                        name="carName"
                                        isRequired
                                    >
                                        <Label className=" text-black">Car Name</Label>

                                        <Input
                                            className="rounded-2xl"
                                            placeholder="Car Name"
                                        />

                                        <FieldError />
                                    </TextField>

                                    {/* Pickup Location */}
                                    <TextField
                                        defaultValue={pickupLocation}
                                        name="pickupLocation"
                                        isRequired
                                    >
                                        <Label className=" text-black">Pickup Location</Label>

                                        <Input
                                            className="rounded-2xl"
                                            placeholder="Pickup Location"
                                        />

                                        <FieldError />
                                    </TextField>

                                    {/* Driver Needed */}
                                    <div className="space-y-2">

                                        <label className="text-sm font-medium text-black">
                                            Driver Needed
                                        </label>

                                        <select
                                            name="driverNeeded"
                                            defaultValue={driverNeeded}
                                            className="h-14 w-full rounded-2xl border border-gray-300 bg-mauve-800 px-4 outline-none"
                                        >
                                            <option value="Yes">
                                                Yes
                                            </option>

                                            <option value="No">
                                                No
                                            </option>
                                        </select>
                                    </div>

                                    {/* Total Price */}
                                    <TextField
                                        defaultValue={totalPrice}
                                        name="totalPrice"
                                        type="number"
                                        isRequired
                                    >
                                        <Label className=" text-black">Total Price</Label>

                                        <Input
                                            type="number"
                                            className="rounded-2xl"
                                            placeholder="Total Price"
                                        />

                                        <FieldError />
                                    </TextField>

                                    {/* Status */}
                                    <div className="space-y-2">

                                        <label className="text-sm font-medium text-black">
                                            Booking Status
                                        </label>

                                        <select
                                            name="status"
                                            defaultValue={status}
                                            className="h-14 w-full rounded-2xl border border-gray-300 bg-mauve-800 px-4 outline-none"
                                        >
                                            <option value="Pending">
                                                Pending
                                            </option>

                                            <option value="Approved">
                                                Approved
                                            </option>

                                            <option value="Cancelled">
                                                Cancelled
                                            </option>
                                        </select>
                                    </div>

                                    {/* Special Note */}
                                    <TextField
                                        defaultValue={specialNote}
                                        name="specialNote"
                                    >
                                        <Label>Special Note</Label>

                                        <TextArea
                                            placeholder="Write special request..."
                                            className="rounded-2xl"
                                        />

                                        <FieldError />
                                    </TextField>

                                    {/* Submit */}
                                    <Button
                                        type="submit"
                                        className="h-14 w-full rounded-2xl bg-black text-lg font-semibold text-white hover:bg-blue-700"
                                    >
                                        Update Booking
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