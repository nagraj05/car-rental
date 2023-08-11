import CallBanner from "../components/CallBanner";
import call from "../assets/icons/phone-call.png";
import mail from "../assets/icons/email.png";
import location from "../assets/icons/location.png";

export default function Contact() {
  return (
    <div className="py-10 bg-gray-100">
      <div className="flex items-center  mx-16 mb-5">
        <div className="w-1/2 pr-8">
          <h1 className="text-4xl font-bold mb-4">
            Need Additional Information?
          </h1>
          <p className="text-gray-600 mb-10 w-4/5 text-lg font-rob">
            We are a car rental business that specializes in providing a diverse
            range of vehicles for short-term use. Our goal is to offer
            convenient and flexible transportation solutions for individuals and
            businesses. Whether you need a compact car for a quick city trip or
            a spacious SUV for a family vacation, we&apos;ve got you covered.
          </p>
          <div className="flex items-center mb-2 font-semibold hover:text-red-500 transition duration-200 cursor-pointer">
            <img src={call} alt="Call" className="h-4 w-4 mr-2" />
            <p>+91-9876543210</p>
          </div>
          <div className="flex items-center mb-2 font-semibold hover:text-red-500 transition duration-200 cursor-pointer">
            <img src={mail} alt="Email" className="h-4 w-4 mr-2" />
            <p>rayagadarentals@demo.com</p>
          </div>
          <div className="flex items-center mb-2 font-semibold hover:text-red-500 transition duration-200 cursor-pointer">
            <img src={location} alt="Email" className="h-4 w-4 mr-2" />
            <p>Rayagada,India</p>
          </div>
        </div>
        <div className="w-1/2">
          <form className="space-y-4">
            <label htmlFor="Name" className="block font-medium">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="E.g: Harry Potter"
              className="w-full font-rob bg-slate-300 px-4 py-4 border rounded-md focus:outline-none focus:border-black focus:border-2"
            />

            <label htmlFor="email" className="block font-medium">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              placeholder="youremail@example.com"
              className="w-full font-rob bg-slate-300 px-4 py-4 border rounded-md focus:outline-none focus:border-black focus:border-2"
            />

            <label htmlFor="message" className="block font-medium">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              placeholder="Type here.."
              className="w-full font-rob bg-slate-300 px-4 py-4 border rounded-md focus:outline-none focus:border-black focus:border-2"
              rows="4"
            />

            <button
              className="w-full px-4 py-4 text-white bg-red-500 font-rob font-bold rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600"
              type="submit"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      <CallBanner />
    </div>
  );
}
