import ExploreCarsCard from "@/components/ExploreCarsCard";
import SearchCars from "@/components/SearchCars";

const RantAllCar = async ({ searchParams }) => {

    const params = await searchParams;
    const search = params.search;

    // Fetch Cars
    const res = await fetch(
        `http://localhost:6001/AddCar?search=${search}`,
        {
            cache: "no-store",
        }
    );

    const response = await res.json();
    return (
        <div className="min-h-screen bg-[#0b0b0f] py-16 px-4">

            {/* Header */}
            <div className="max-w-7xl mx-auto mb-12">

                <h1 className="text-5xl font-bold text-white">
                    🚗 Rent All Cars
                </h1>
                <SearchCars />

                <p className="mt-4 text-slate-400">
                    Choose the perfect car for your next journey.
                </p>
            </div>

            {/* Cars Grid */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

                {
                    response.map((car) => (
                        <ExploreCarsCard
                            key={car._id}
                            car={car}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default RantAllCar;