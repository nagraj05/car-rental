import about from "../assets/about.jpg";
import Quick from "../components/Quick";
import CallBanner from "../components/CallBanner";
import car from "../assets/icons/car_89102.png";
import rental from "../assets/icons/house_1769609.png";
import repair from "../assets/icons/private-garage_75751.png";

export default function About() {
  return (
    <div className="bg-gray-100 pt-6">
      <h1 className="text-4xl font-rob font-bold text-center ">
        Rayagada Rentals
      </h1>
      <div className="flex justify-center p-6 border-b ">
        <div className="flex gap-5" style={{ maxWidth: "900px" }}>
          <img
            src={about}
            alt=""
            style={{ width: "450px", height: "500px" }}
            className="rounded-lg"
          />
          <div className="">
            <h3 className="text-lg font-bold font-rob mb-2">About Company</h3>
            <h1 className="text-4xl font-bold font-rob mb-2">
              Start the engine and your adventure begins!
            </h1>
            <p className="text-md font-rob text-gray-400 mb-2">
              We are a car rental business that specializes in providing a
              diverse range of vehicles for short-term use. Our goal is to offer
              convenient and flexible transportation solutions for individuals
              and businesses. Whether you need a compact car for a quick city
              trip or a spacious SUV for a family vacation, we&apos;ve got you
              covered.
            </p>
            <div className="flex gap-10 items-center justify-center mt-10">
              <div>
                <img src={car} alt="" className="w-28 " />
                <div className="flex gap-5">
                  <h1 className="text-6xl font-bold text-red-700">20</h1>
                  <h5 className="text-lg font-bold text-gray-500">Car Types</h5>
                </div>
              </div>
              <div>
                <img src={rental} alt="" className="w-28" />
                <div className="flex gap-5">
                  <h1 className="text-6xl font-bold text-red-700">32</h1>
                  <h5 className="text-lg font-bold text-gray-500">
                    Rentail Outlets
                  </h5>
                </div>
              </div>
              <div>
                <img src={repair} alt="" className="w-28" />
                <div className="flex gap-5">
                  <h1 className="text-6xl font-bold text-red-700">16</h1>
                  <h5 className="text-lg font-bold text-gray-500">
                    Repair Shopss
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Quick />
      <CallBanner />
    </div>
  );
}
