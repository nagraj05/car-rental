import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleModalClick = (event) => {
    event.stopPropagation();
  };

  const openSignInModal = () => {
    setIsSignInModalOpen(true);
  };
  const closeSignInModal = () => {
    setIsSignInModalOpen(false);
  };
  useEffect(() => {
    if (isModalOpen === true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isModalOpen]);

  useEffect(() => {
    if (isSignInModalOpen === true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isSignInModalOpen]);

  return (
    <div className="flex justify-between  items-center py-5 px-20 bg-transparent font-rob font-semibold">
      <h2 className="text-xl">Rayagada Rentals</h2>
      <div className="">
        <ul className="flex justify-between space-x-4">
          <li className="hover:text-red-500 transition duration-200 cursor-pointer">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-red-500 transition duration-200 cursor-pointer">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:text-red-500 transition duration-200 cursor-pointer">
            <Link to="/vehicleModels">Vehicle Models</Link>
          </li>
          <li className="hover:text-red-500 transition duration-200 cursor-pointer">
            <Link to="/testimonials">Testimonials</Link>
          </li>
          <li className="hover:text-red-500 transition duration-200 cursor-pointer">
            <Link to="/team">Our Team</Link>
          </li>
          <li className="hover:text-red-500 transition duration-200 cursor-pointer">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <div className="flex space-x-4">
        <button
          className="hover:text-red-500 transition duration-200 cursor-pointer"
          onClick={openSignInModal}
        >
          Sign In
        </button>
        <button className="bg-red-500 py-2 px-4 text-white" onClick={openModal}>
          Register
        </button>
      </div>

      {isSignInModalOpen && (
        <div
          className="fixed top-0 left-0 right-0 bottom-0 bg-gray-700 bg-opacity-70 flex items-center justify-center"
          onClick={closeSignInModal}
        >
          <div
            className="bg-white  rounded-lg relative w-[450px] scrollbar scrollbar-thumb-red-700 scrollbar-thumb-rounded-xl scrollbar-track-red-400 scrollbar-track-rounded-xl "
            onClick={handleModalClick}
          >
            <button
              className="absolute top-2 right-5 text-gray-500 hover:text-gray-700"
              onClick={closeSignInModal}
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
            <div className="max-h-96 overflow-y-auto  pb-6">
              <h2 className="py-2  text-xl border-t-2 text-red-600 font-poppins font-bold text-center">
                SIGN IN
              </h2>
              <div className="flex flex-col gap-2 px-6 font-poppins">
                <h3>USERNAME*</h3>
                <input
                  type="text"
                  placeholder="Username"
                  className="border rounded p-2 bg-slate-100"
                />
                <h3>PASSWORD*</h3>
                <input
                  type="password"
                  placeholder="Password"
                  className="border rounded p-2 bg-slate-100"
                />
                <button className="bg-green-500 text-white p-2 rounded">
                  Sign In
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {isModalOpen && (
        <div
          className="fixed top-0 left-0 right-0 bottom-0 bg-gray-700 bg-opacity-70 flex items-center justify-center"
          onClick={closeModal}
        >
          <div
            className="bg-white  rounded-lg relative w-[450px] scrollbar scrollbar-thumb-red-700 scrollbar-thumb-rounded-xl scrollbar-track-red-400 scrollbar-track-rounded-xl "
            onClick={handleModalClick}
          >
            <button
              className="absolute top-2 right-5 text-gray-500 hover:text-gray-700"
              onClick={closeModal}
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
            <div className="max-h-96 overflow-y-auto  pb-6">
              <h2 className="py-2  text-xl border-t-2 text-red-600 font-poppins font-bold text-center">
                REGISTER
              </h2>
              <div className="flex flex-col gap-2 px-6 font-poppins">
                <h3>USERNAME*</h3>
                <input
                  type="text"
                  placeholder="Username"
                  className="border rounded p-2 bg-slate-100"
                />
                <h3>PASSWORD*</h3>
                <input
                  type="password"
                  placeholder="Password"
                  className="border rounded p-2 bg-slate-100"
                />
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
                <h3>E-Mail*</h3>
                <input
                  type="email"
                  placeholder="E-mail"
                  className="border rounded p-2 bg-slate-100"
                />
                <button className="bg-green-500 text-white p-2 rounded">
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
