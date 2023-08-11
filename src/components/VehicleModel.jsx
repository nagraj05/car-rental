import { useState } from "react";
import carsData from "../data/CarsData";
export default function VehicleModel() {
  const [selectedCar, setSelectedCar] = useState(carsData[0]);

  const handleCarClick = (car) => {
    setSelectedCar(car);
  };

  return (
    <div>
      <div className="flex justify-center flex-col items-center py-4">
        <h2 className="text-5xl font-rob">Our rental fleet</h2>
        <p className="text-lg font-rob">
          Choose from a variety of our amazing vehicles to rent for your next
          adventure or business trip
        </p>
      </div>
      <div className="flex p-4 space-x-6 h-auto">
        <div className="flex flex-col space-y-2 w-60">
          {carsData.map((car) => (
            <div
              key={car.id}
              onClick={() => handleCarClick(car)}
              className={`cursor-pointer border font-rob font-bold rounded-lg p-2 hover:bg-red-600 transition-all duration-200 ${
                selectedCar.id === car.id ? "bg-red-600 text-white" : ""
              }`}
            >
              {car.name}
            </div>
          ))}
        </div>

        <div className="flex space-x-6 ">
          <div
            className="flex flex-col justify-center items-center h-auto bg-white"
            style={{ width: "800px", height: "500px" }}
          >
            <img
              src={selectedCar.image}
              alt={selectedCar.model}
              className="mb-4"
              style={{ width: "800px", height: "500px" }}
            />
          </div>
          <div className="flex flex-col">
            <div className="border rounded-lg bg-white w-64 h-auto">
              <div className="space-y-2">
                <div className="bg-red-600 text-white text-center rounded-t-lg px-4 py-2">
                  <span className="text-xl">₹{selectedCar.pricePerDay}</span>
                  <strong className="text-lg"> / per day</strong>
                </div>
                <div>
                  <table className="w-full table-auto">
                    <tbody>
                      <tr className="border-b-2">
                        <td className="px-4 text-left">
                          <strong>Model:</strong>
                        </td>
                        <td className="py-2  text-center">
                          {selectedCar.model}
                        </td>
                      </tr>
                      <tr className="border-b-2">
                        <td className="px-4 text-left">
                          <strong>Year:</strong>
                        </td>
                        <td className="py-2 text-center">{selectedCar.year}</td>
                      </tr>
                      <tr className="border-b-2">
                        <td className="px-4 text-left">
                          <strong>Seats:</strong>
                        </td>
                        <td className="py-2 text-center">
                          {selectedCar.seater}
                        </td>
                      </tr>
                      <tr className="border-b-2">
                        <td className="px-4 text-left">
                          <strong>AC:</strong>
                        </td>
                        <td className="py-2 text-center">{selectedCar.AC}</td>
                      </tr>
                      <tr className="border-b-2">
                        <td className="px-4 text-left">
                          <strong>Fuel:</strong>
                        </td>
                        <td className="py-2 text-center">
                          {selectedCar.fuelType}
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 text-left">
                          <strong>Transmission:</strong>
                        </td>
                        <td className="py-2 text-center">
                          {selectedCar.transmission}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <button className="mt-4 bg-red-500 text-white text-lg font-rob font-extrabold py-2 px-4 rounded">
              Reserve Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
