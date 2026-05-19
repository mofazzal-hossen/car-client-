import Banner from "@/components/homeComponents/Banner";
import Process from "@/components/homeComponents/Process";
import WhyDriveFleet from "@/components/homeComponents/WhyDriveFleet";
import ExploreCarsCard from "@/components/ExploreCarsCard";
import Link from "next/link";

export default async function Home() {

  const res = await fetch("http://localhost:6001/AddCar", {
    cache: "no-store",
  });

  const cars = await res.json();

  return (
    <>

      <Banner />

      {/* Explore Cars Section */}
      <section className="bg-slate-900 py-20 px-4">

        <div className="max-w-7xl mx-auto">

          {/* Heading */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-12">

            <div>
              <h1 className="text-5xl font-bold text-white">
                Explore Cars
              </h1>

              <p className="text-slate-400 mt-3">
                Discover premium and luxury cars for your next ride
              </p>
            </div>

            <Link
              href="/explore-cars"
              className="bg-cyan-500 hover:bg-cyan-600 transition-all duration-300 text-white px-7 py-4 rounded-2xl w-fit"
            >
              View All Cars
            </Link>

          </div>

          {/* Cars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

            {
              cars.slice(0, 6).map((car) => (
                <ExploreCarsCard
                  key={car._id}
                  car={car}
                />
              ))
            }

          </div>

        </div>

      </section>

      <Process />

      <WhyDriveFleet />

    </>
  );
}