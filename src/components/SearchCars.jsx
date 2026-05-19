"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const SearchCars = () => {

    const [search, setSearch] = useState("");
    const router = useRouter();

    const handleSearch = (e) => {
        e.preventDefault();

        router.push(`/explore-cars?search=${search}`);
    };

    return (
        <form
            onSubmit={handleSearch}
            className="flex items-center gap-3"
        >
            <input
                type="text"
                placeholder="Search cars..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="border px-4 py-3 rounded-xl w-full"
            />

            <button
                type="submit"
                className="bg-cyan-500 text-white px-6 py-3 rounded-xl"
            >
                Search
            </button>
        </form>
    );
};

export default SearchCars;