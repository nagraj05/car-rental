import { useState } from "react";

export default function BookCar() {
  const [selectedCar, setSelectedCar] = useState("");
  const [pickupLocation, setPickupLocation] = useState("");
  const [dropOffLocation, setDropOffLocation] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [dropOffDate, setDropOffDate] = useState("");

  const handleCarChange = (event) => {
    setSelectedCar(event.target.value);
  };

  const handlePickupLocationChange = (event) => {
    setPickupLocation(event.target.value);

    const updatedDropOffLocationOptions = document.querySelectorAll(
      "#dropOffLocation option"
    );
    updatedDropOffLocationOptions.forEach((option) => {
      if (option.value === event.target.value) {
        option.disabled = true;
      } else {
        option.disabled = false;
      }
    });

    if (event.target.value === dropOffLocation) {
      setDropOffLocation("");
    }
  };

  const handleDropOffLocationChange = (event) => {
    setDropOffLocation(event.target.value);
  };

  const handlePickupDateChange = (event) => {
    const selectedPickupDate = event.target.value;
    setPickupDate(selectedPickupDate);

    // Calculate the next date after pickup date
    const nextDate = new Date(selectedPickupDate);
    nextDate.setDate(nextDate.getDate() + 1);

    const formattedNextDate = nextDate.toISOString().split("T")[0];
    setDropOffDate(formattedNextDate);
  };

  const handleDropOffDateChange = (event) => {
    setDropOffDate(event.target.value);
  };

  const handleSearch = () => {
    console.log("Searching...");
  };

  return (
    <div className="bg-gray-100  py-10 ">
      <div className="border  p-4 mx-10 h-96 shadow-lg rounded-lg  bg-white">
        <h4 className="mx-10 mb-6 text-2xl font-poppins font-bold">Book a car</h4>
        <div className="flex flex-wrap gap-4 space-x-28 mt-20 justify-evenly">
          <div className="w-72 font-poppins">
            <label htmlFor="carType">Choose Car Type<span className="text-red-600">*</span></label>
            <select
              id="carType"
              value={selectedCar}
              onChange={handleCarChange}
              className="w-full border rounded p-2"
            >
              <option value="">Select a car type</option>
              <option value="corolla">Toyota Corolla</option>
              <option value="civic">Honda Civic</option>
              <option value="xuv">XUV 300</option>
              <option value="jeep">Jeep</option>
              <option value="swift">Swift Dzire</option>
              <option value="scorpio">Scorpio</option>
              <option value="ertiga">Ertiga</option>
            </select>
          </div>
          <div className="w-72 font-poppins">
            <label htmlFor="pickupLocation">Pick up location<span className="text-red-600">*</span></label>
            <select
              id="pickupLocation"
              value={pickupLocation}
              onChange={handlePickupLocationChange}
              className="w-full border rounded p-2"
            >
              <option value="">Select a pick-up location</option>
              <option value="location1">Rayagada</option>
              <option value="location2">J.K. pur</option>
              <option value="location3">Kalyansingpur</option>
              <option value="location4">Bissamuttack</option>
              <option value="location5">Muniguda</option>
              <option value="location6">Lanjigarh</option>
              <option value="location7">Kerada</option>
              <option value="location8">Koraput</option>
              <option value="location9">Gunupur</option>
            </select>
          </div>
          <div className="w-72 font-poppins">
            <label htmlFor="dropOffLocation">Drop off location<span className="text-red-600">*</span></label>
            <select
              id="dropOffLocation"
              value={dropOffLocation}
              onChange={handleDropOffLocationChange}
              className="w-full border rounded p-2"
            >
              <option value="">Select a drop-off location</option>
              <option value="location1">Rayagada</option>
              <option value="location2">J.K. pur</option>
              <option value="location3">Kalyansingpur</option>
              <option value="location4">Bissamuttack</option>
              <option value="location5">Muniguda</option>
              <option value="location6">Lanjigarh</option>
              <option value="location7">Kerada</option>
              <option value="location8">Koraput</option>
              <option value="location9">Gunupur</option>
            </select>
          </div>
        </div>
        <div className="mt-14">
          <div className="flex flex-wrap gap-4 space-x-28 justify-evenly">
            <div className="w-72 font-poppins">
              <label htmlFor="pickupDate">Pickup Date<span className="text-red-600">*</span></label>
              <input
                type="date"
                id="pickupDate"
                value={pickupDate}
                onChange={handlePickupDateChange}
                className="w-full border rounded p-2"
              />
            </div>
            <div className="w-72 font-poppins">
              <label htmlFor="dropOffDate">Drop Off Date<span className="text-red-600">*</span></label>
              <input
                type="date"
                id="dropOffDate"
                value={dropOffDate}
                onChange={handleDropOffDateChange}
                className="w-full border rounded p-2"
                min={dropOffDate}
              />
            </div>
            <div className="w-72 font-poppins flex items-end">
              <button
                onClick={handleSearch}
                className="w-full bg-red-500 text-white p-2 rounded"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
