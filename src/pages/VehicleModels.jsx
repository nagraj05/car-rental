import CallBanner from "../components/CallBanner";
import carsData from "../data/CarsData";

export default function VehicleModels() {
  return (
    <div className="bg-slate-100 pt-6">
      <h1 className="text-4xl font-rob font-bold text-center">
        Our Car Models
      </h1>
      <div className="flex flex-wrap justify-center  w-4/5 mx-auto">
        {carsData.map((car) => (
          <div
            key={car.id}
            className="max-w-xs bg-white rounded-lg overflow-hidden shadow-lg m-4 pt-6 "
          >
            <img className="w-full px-6 py-4" src={car.image} alt={car.name} />
            <div className="px-6 py-4  ">
              <h1 className="font-bold text-xl mb-2">{car.name}</h1>
              <div className="">
                <p className="text-gray-700 text-base">
                  <span className="font-bold">Price</span>: ₹{car.pricePerDay}
                </p>
                <p className="text-gray-700 text-base">
                  <span className="font-bold">Fuel</span>: {car.fuelType}
                </p>
                <p className="text-gray-700 text-base">
                  <span className="font-bold">Seats</span>: {car.seater}
                </p>
                <p className="text-gray-700 text-base border-b-2">
                  <span className="font-bold">Transmission</span>:{" "}
                  {car.transmission}
                </p>
                <button className="w-full border mt-1 bg-red-500  hover:bg-red-600 rounded p-2 text-white font-rob font-semibold">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <CallBanner />
    </div>
  );
}
