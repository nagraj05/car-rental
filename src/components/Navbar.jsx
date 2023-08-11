import { Link } from "react-router-dom";
export default function Navbar() {
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
        <button className="hover:text-red-500 transition duration-200 cursor-pointer">
          Sign In
        </button>
        <button className="bg-red-500 py-2 px-4 text-white">Register</button>
      </div>
    </div>
  );
}
