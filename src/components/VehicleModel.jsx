import { useState } from "react";
import corolla from "../assets/car-images/corolla.png";
import xuv300 from "../assets/car-images/xuv300.webp";
import swift from "../assets/car-images/Swift.png";
// import altis from '../assets/car-images/altis.jpg'
import jeep from "../assets/car-images/jeep.png";
import ertiga from "../assets/car-images/ertiga.png";
import scorpio from "../assets/car-images/Scorpio.png";
import buggati from "../assets/car-images/buggati.png";
import renault from "../assets/car-images/renault kwid.png";

const carsData = [
  {
    id: 1,
    name: "Toyota Corolla",
    image: corolla,
    pricePerDay: "₹5000",
    model: "Corolla",
    mark: "Y",
    year: "2022",
    AC: "Yes",
    fuelType: "Petrol",
    seater: "5",
    transmission: "Automatic",
  },
  {
    id: 2,
    name: "Renault KWID",
    image: renault,
    pricePerDay: "₹8000",
    model: "KWID",
    mark: "X",
    year: "2021",
    AC: "Yes",
    fuelType: "Diesel",
    seater: "5",
    transmission: "Manual",
  },
  {
    id: 3,
    name: "Mahindra XUV300",
    image: xuv300,
    pricePerDay: "₹9000",
    model: "XUV",
    mark: "X",
    year: "2023",
    AC: "Yes",
    fuelType: "Petrol",
    seater: "5",
    transmission: "Manual",
  },
  {
    id: 4,
    name: "Jeep",
    image: jeep,
    pricePerDay: "₹12,000",
    model: "Jeep",
    mark: "X",
    year: "2021",
    AC: "Yes",
    fuelType: "Petrol",
    seater: "5",
    transmission: "Manual",
  },
  {
    id: 5,
    name: "Maruti Swift Dzire",
    image: swift,
    pricePerDay: "₹7000",
    model: "Dzire",
    mark: "X",
    year: "2020",
    AC: "Yes",
    fuelType: "Petrol",
    seater: "5",
    transmission: "Manual",
  },
  {
    id: 6,
    name: "Mahindra Scorpio",
    image: scorpio,
    pricePerDay: "₹12,000",
    model: "XUV",
    mark: "X",
    year: "2023",
    AC: "Yes",
    fuelType: "Diesel",
    seater: "5",
    transmission: "Manual",
  },
  {
    id: 7,
    name: "Maruti Suzuki Ertiga",
    image: ertiga,
    pricePerDay: "₹10,000",
    model: "Ertiga",
    mark: "X",
    year: "2019",
    AC: "Yes",
    fuelType: "Petrol",
    seater: "7",
    transmission: "Manual",
  },
  {
    id: 8,
    name: "Buggati",
    image: buggati,
    pricePerDay: "haha lol",
    model: "Convertible",
    mark: "X",
    year: "2023",
    AC: "Yes",
    fuelType: "Hybrid",
    seater: "2",
    transmission: "Manual",
  },
];

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
            {/* <h2 className="text-2xl font-bold mb-4">{selectedCar.model}</h2> */}
            <img
              src={selectedCar.image}
              alt={selectedCar.model}
              className="mb-4   "
              style={{ width: "800px", height: "500px" }}
            />
          </div>
          <div className="flex flex-col">
            <div className="border rounded-lg bg-white w-64 h-auto">
              <div className="space-y-2">
                <div className="bg-red-600 text-white text-center rounded-t-lg px-4 py-2">
                  <span className="text-xl">{selectedCar.pricePerDay}</span>
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
