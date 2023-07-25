import { useEffect, useState } from "react";
import carToyota from "../assets/car-images/corolla.png";
import carRenault from "../assets/car-images/renault kwid.png";
import carxuv300 from "../assets/car-images/xuv300.webp";
import carJeep from "../assets/car-images/jeep.png";
import carDzire from "../assets/car-images/Swift.png";
import carScorpio from "../assets/car-images/Scorpio.png";
import carErtiga from "../assets/car-images/ertiga.png";

export default function BookCar() {
  /*-----------------Booking State-----------------*/

  const [selectedCar, setSelectedCar] = useState("");
  const [pickupLocation, setPickupLocation] = useState("");
  const [dropOffLocation, setDropOffLocation] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [dropOffDate, setDropOffDate] = useState("");
  const [carImg, setCarImg] = useState("");

  /*-----------------Modal State----------------- */

  const [showModal, setShowModal] = useState(false);
  const [snackBar, setSnackBar] = useState({
    visible: false,
    message: "",
    type: "error",
  });
  const [userInput, setUserInput] = useState({
    car: "",
    pickupLocation: "",
    dropOffLocation: "",
    pickupDate: "",
    dropOffDate: "",
  });

  /*-------------Booking Functions----------------*/

  const handleCarChange = (event) => {
    setSelectedCar(event.target.value);
    setCarImg(event.target.value);
    setUserInput({
      ...userInput,
      car: event.target.value,
    });
  };

  const handlePickupLocationChange = (event) => {
    setPickupLocation(event.target.value);
    setUserInput({
      ...userInput,
      pickupLocation: event.target.value,
    });

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
    setUserInput({
      ...userInput,
      dropOffLocation: event.target.value,
    });
  };

  const handlePickupDateChange = (event) => {
    const selectedPickupDate = event.target.value;
    setPickupDate(selectedPickupDate);
    setUserInput({
      ...userInput,
      pickupDate: selectedPickupDate,
    });

    const nextDate = new Date(selectedPickupDate);
    nextDate.setDate(nextDate.getDate() + 1);

    const formattedNextDate = nextDate.toISOString().split("T")[0];
    setDropOffDate(formattedNextDate);
  };

  const handleDropOffDateChange = (event) => {
    setDropOffDate(event.target.value);
    setUserInput({
      ...userInput,
      dropOffDate: event.target.value,
    });
  };

  /*-----------------Modal Functions-----------------*/
  const handleBookNow = () => {
    if (
      !selectedCar ||
      !pickupLocation ||
      !dropOffLocation ||
      !pickupDate ||
      !dropOffDate
    ) {
      setSnackBar({
        visible: true,
        message: "All fields are required.*",
        type: "error",
      });
    } else {
      setSnackBar({
        visible: false,
        message: "",
        type: "error",
      });
      setShowModal(true);
    }
  };

  const handleConfirm = () => {
    setShowModal(false);
    setSnackBar({
      visible: true,
      message: "Check your email for the booking details.",
      type: "success",
    });
  };

  const handleModalClick = (event) => {
    event.stopPropagation();
  };

  // disable page scroll when modal is displayed
  useEffect(() => {
    if (showModal === true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showModal]);

  let imgUrl;
  switch (selectedCar) {
    case "Toyota Corolla":
      imgUrl = carToyota;
      break;
    case "Renault KWID":
      imgUrl = carRenault;
      break;
    case "Mahindra XUV300":
      imgUrl = carxuv300;
      break;
    case "Jeep":
      imgUrl = carJeep;
      break;
    case "Swift Dzire":
      imgUrl = carDzire;
      break;
    case "Mahindra Scorpio":
      imgUrl = carScorpio;
      break;
    case "Maruti Suzuki Ertiga":
      imgUrl = carErtiga;
      break;
    default:
      imgUrl = "";
  }

  return (
    <div className="bg-gray-100 py-10">
      <div className="border p-4 mx-10 h-96 shadow-lg rounded-lg bg-white">
        <h4 className="mx-7 mb-3 text-2xl font-poppins font-bold">
          Book a car
        </h4>
        <div className="h-10">
          {snackBar.visible && (
            <div
              className={`relative ${
                snackBar.type === "error"
                  ? "bg-red-100 text-red-600"
                  : "bg-green-100 text-green-600"
              } font-poppins p-2 mx-7 rounded`}
            >
              {snackBar.message}
              <button
                className="absolute right-2 top-3  text-gray-500 hover:text-gray-700"
                onClick={() =>
                  setSnackBar({ visible: false, message: "", type: "error" })
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          )}
        </div>
        <div className="flex flex-wrap gap-4 space-x-28 mt-2 justify-evenly">
          <div className="w-72 font-poppins">
            <label htmlFor="carType">
              Choose Car Type<span className="text-red-600">*</span>
            </label>
            <select
              id="carType"
              value={selectedCar}
              onChange={handleCarChange}
              className="w-full border rounded p-2"
            >
              <option value="">Select a car type</option>
              <option value="Toyota Corolla">Toyota Corolla</option>
              <option value="Renault KWID">Renault KWID</option>
              <option value="Mahindra XUV300">Mahindra XUV300</option>
              <option value="Jeep">Jeep</option>
              <option value="Swift Dzire">Swift Dzire</option>
              <option value="Mahindra Scorpio">Mahindra Scorpio</option>
              <option value="Maruti Suzuki Ertiga">Maruti Suzuki Ertiga</option>
            </select>
          </div>
          <div className="w-72 font-poppins">
            <label htmlFor="pickupLocation">
              Pick up location<span className="text-red-600">*</span>
            </label>
            <select
              id="pickupLocation"
              value={pickupLocation}
              onChange={handlePickupLocationChange}
              className="w-full border rounded p-2"
            >
              <option value="">Select a pick-up location</option>
              <option value="Rayagada">Rayagada</option>
              <option value="J.K. pur">J.K. pur</option>
              <option value="Kalyansingpur">Kalyansingpur</option>
              <option value="Bissamcuttack">Bissamcuttack</option>
              <option value="Muniguda">Muniguda</option>
              <option value="Lanjigarh">Lanjigarh</option>
              <option value="Kerada">Kerada</option>
              <option value="Koraput">Koraput</option>
              <option value="Gunupur">Gunupur</option>
            </select>
          </div>
          <div className="w-72 font-poppins">
            <label htmlFor="dropOffLocation">
              Drop off location<span className="text-red-600">*</span>
            </label>
            <select
              id="dropOffLocation"
              value={dropOffLocation}
              onChange={handleDropOffLocationChange}
              className="w-full border rounded p-2"
            >
              <option value="">Select a drop-off location</option>
              <option value="Rayagada">Rayagada</option>
              <option value="J.K. pur">J.K. pur</option>
              <option value="Kalyansingpur">Kalyansingpur</option>
              <option value="Bissamcuttack">Bissamcuttack</option>
              <option value="Muniguda">Muniguda</option>
              <option value="Lanjigarh">Lanjigarh</option>
              <option value="Kerada">Kerada</option>
              <option value="Koraput">Koraput</option>
              <option value="Gunupur">Gunupur</option>
            </select>
          </div>
        </div>
        <div className="mt-14">
          <div className="flex flex-wrap gap-4 space-x-28 justify-evenly">
            <div className="w-72 font-poppins">
              <label htmlFor="pickupDate">
                Pickup Date<span className="text-red-600">*</span>
              </label>
              <input
                type="date"
                id="pickupDate"
                value={pickupDate}
                onChange={handlePickupDateChange}
                className="w-full border rounded p-2"
              />
            </div>
            <div className="w-72 font-poppins">
              <label htmlFor="dropOffDate">
                Drop Off Date<span className="text-red-600">*</span>
              </label>
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
                onClick={handleBookNow}
                className="w-full bg-red-500 text-white p-2 rounded"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/*-------------Modal-----------*/}

      {showModal && (
        <div
          className="fixed top-0 left-0 right-0 bottom-0 bg-gray-700 bg-opacity-70 flex items-center justify-center"
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-white  rounded-lg relative w-3/5 scrollbar scrollbar-thumb-red-700 scrollbar-thumb-rounded-xl scrollbar-track-red-400 scrollbar-track-rounded-xl "
            onClick={handleModalClick}
          >
            <button
              className="absolute top-2 right-5 text-gray-500 hover:text-gray-700"
              onClick={() => setShowModal(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div
              className="max-h-96 overflow-y-auto  pb-6"
              style={{ maxHeight: "30rem" }}
            >
              <h2 className="text-xl font-bold mb-4 font-poppins rounded-tl-lg bg-red-500 text-white p-5">
                COMPLETE RESERVATION
              </h2>
              <div className="flex items-center justify-between mb-5">
                <div>
                  <h3 className="text-red-500 text-xl mx-6 mb-4 font-bold">
                    Location & Date
                  </h3>
                  <div className="px-6 py-2 flex flex-col gap-2">
                    <h6 className="font-bold">Pickup Date & Time </h6>
                    <p className="font-pontano font-normal text-gray-600">
                      {userInput.pickupDate} / <input type="time" />
                    </p>
                  </div>
                  <div className="px-6 py-2 flex flex-col gap-2">
                    <h6 className="font-bold">Drop Off Date & Time </h6>
                    <p className="font-pontano font-normal text-gray-600">
                      {userInput.dropOffDate} / <input type="time" />
                    </p>
                  </div>
                  <div className="px-6 py-2 flex flex-col gap-2">
                    <h6 className="font-bold">Pickup Location </h6>
                    <p className="font-pontano font-normal text-gray-600">
                      {userInput.pickupLocation}
                    </p>
                  </div>
                  <div className="px-6 py-2 flex flex-col gap-2">
                    <h6 className="font-bold">Drop Off Location </h6>
                    <p className="font-pontano font-normal text-gray-600">
                      {userInput.dropOffLocation}
                    </p>
                  </div>
                </div>
                <div>
                  <div className="px-6 py-2 ">
                    <h6 className="font-bold">Car:</h6>
                    <p className="font-pontano font-normal text-gray-600">
                      {userInput.car}
                    </p>
                  </div>
                  {imgUrl && (
                    <img
                      src={imgUrl}
                      alt={selectedCar}
                      className=" h-64 object-cover"
                    />
                  )}
                </div>
              </div>

              <h2 className="px-5 py-5 mb-5 text-xl border-t-2 text-red-600 font-poppins font-bold">
                PERSONAL INFORMATION
              </h2>
              <div className="flex flex-col gap-2 px-6 font-poppins">
                <h3>First Name*</h3>
                <input
                  type="text"
                  placeholder="First Name"
                  className="border rounded p-2 bg-slate-100"
                />
                <h3>Last Name*</h3>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="border rounded p-2 bg-slate-100"
                />
                <h3>Phone Number*</h3>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="border rounded p-2 bg-slate-100"
                />
                <h3>E-Mail*</h3>
                <input
                  type="email"
                  placeholder="E-mail"
                  className="border rounded p-2 bg-slate-100"
                />
                <h3>Age*</h3>
                <input
                  type="number"
                  placeholder="21"
                  className="border rounded p-2 bg-slate-100"
                />
                <h3>Address*</h3>
                <input
                  type="text"
                  placeholder="Address"
                  className="border rounded p-2 bg-slate-100"
                />
                <h3>City*</h3>
                <input
                  type="text"
                  placeholder="City"
                  className="border rounded p-2 bg-slate-100"
                />
                <h3>Pincode*</h3>
                <input
                  type="number"
                  placeholder="Pincode"
                  className="border rounded p-2 bg-slate-100"
                />
                <div className="flex gap-3 mx-1">
                  <input type="checkbox" />
                  <p>Please send me latest updates.</p>
                </div>
                <button
                  className="bg-green-500 text-white p-2 rounded"
                  onClick={handleConfirm}
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
