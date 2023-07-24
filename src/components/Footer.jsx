import call from "../assets/icons/phone-call.png";
import mail from "../assets/icons/email.png";

export default function Footer() {
  return (
    <div className="bg-gray-100 py-16 px-8 flex flex-wrap justify-between">
      <div className="space-y-4">
        <h3 className="text-2xl font-bold font-poppins">Rayagada Rentals</h3>
        <p className="text-gray-600 w-80">
          We offer a big range of vehicles for all your driving needs. We have
          the perfect car to meet your needs.
        </p>
        <div className="flex items-center font-semibold hover:text-red-500 transition duration-200 cursor-pointer">
          <img src={call} alt="Call" className="h-4 w-4 mr-2" />
          <p>+91-9876543210</p>
        </div>
        <div className="flex items-center font-semibold hover:text-red-500 transition duration-200 cursor-pointer">
          <img src={mail} alt="Email" className="h-4 w-4 mr-2" />
          <p>rayagadarentals@demo.com</p>
        </div>
        <p className="font-light text-md font-poppins">Created by Nagraj Tadingi</p>
      </div>
      <div className="space-y-4">
        <h3 className="text-2xl font-bold font-poppins">Company</h3>
        <p className="font-semibold hover:text-red-500 transition duration-200 cursor-pointer">
          Careers
        </p>
        <p className="font-semibold hover:text-red-500 transition duration-200 cursor-pointer">
          Blog
        </p>
        <p className="font-semibold hover:text-red-500 transition duration-200 cursor-pointer">
          Locations
        </p>
        <p className="font-semibold hover:text-red-500 transition duration-200 cursor-pointer">
          How we work
        </p>
      </div>
      <div className="space-y-4">
        <h3 className="text-2xl font-bold font-poppins">Working Hours</h3>
        <p className="font-semibold">Mon - Sun 9:00AM - 9:00PM</p>
        <p className="font-semibold">Friday: Closed</p>
      </div>
      <div className="space-y-4">
        <h3 className="text-2xl font-bold font-poppins">Subscription</h3>
        <p className="w-72">
          Subscribe your Email address for latest news & updates.
        </p>
        <div className="flex flex-col gap-2">
          <input
            type="text"
            className="border border-gray-400 px-4 py-2 rounded-l"
            placeholder="Enter your email"
          />
          <button className="bg-red-500 text-white px-4 py-2 rounded-r">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
