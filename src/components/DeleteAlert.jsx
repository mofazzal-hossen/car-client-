"use client";

import { useRouter } from "next/navigation";

import { MdDelete } from "react-icons/md";

export function DeleteAlert({ response }) {

    const { carName, _id } = response;

    const router = useRouter();

    const handleDelete = async () => {

        const confirmDelete = confirm(
            `Are you sure you want to delete ${carName}?`
        );

        if (!confirmDelete) {
            return;
        }

        try {

            const res = await fetch(
                `http://localhost:6001/booking/${_id}`,
                {
                    method: "DELETE",
                }
            );

            const data = await res.json();

            console.log(data);

            if (data.deletedCount > 0) {

                alert("Booking Deleted Successfully");

                router.refresh();

                // optional
                // router.push("/");
            }

        } catch (error) {

            console.error("Delete failed:", error);

        }
    };

    return (
        <button
            onClick={handleDelete}
            className="flex items-center gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-2 font-medium text-red-600 transition hover:bg-red-100"
        >

            <MdDelete className="text-xl" />

            Delete

        </button>
    );
}