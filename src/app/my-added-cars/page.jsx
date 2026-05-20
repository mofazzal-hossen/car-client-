import { DeleteAlert } from "@/components/DeleteAlert";
import { EditForm } from "@/components/EditForm";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";

const MyAddCar = async () => {

    const session = await auth.api.getSession({
        headers: await headers(),
    });

    const user = session?.user;
    console.log(user)

    // ✅ fetch user cars
    const res = await fetch(
        `http://localhost:6001/my-addCar?email=${user?.email}`,
        {
            cache: "no-store",
        }
    );

    const cars = await res.json();
    console.log(cars)

    return (
        <div className="max-w-6xl mx-auto p-6">

            <h1 className="text-3xl font-bold mb-6">
                My Added Cars
            </h1>

            <div className="grid md:grid-cols-3 gap-5">

                {cars.map((car) => (

                    <div
                        key={car._id}
                        className="border rounded-xl p-4 shadow"
                    >

                        {/* IMAGE */}
                        <Image
                            src={car.imageUrl}
                            alt={car.carName}
                            width={500}
                            height={300}
                            className="w-full h-44 object-cover rounded-lg"
                        />

                        {/* INFO */}
                        <h2 className="text-xl font-bold mt-2">
                            {car.carName}
                        </h2>

                        <p>Type: {car.carType}</p>

                        <p>Price: ${car.price}</p>

                        <p>Location: {car.location}</p>

                        <p className="text-sm text-gray-500">
                            {car.description}
                        </p>

                        <p className="mt-1">
                            Status: {car.availability}
                        </p>



                        <div className="flex gap-2 mt-3">
                            <DeleteAlert response={car} />
                            <EditForm response={car} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyAddCar;