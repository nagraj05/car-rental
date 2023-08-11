import CallBanner from "../components/CallBanner";
import dominic from "../assets/review/Dominic_Toretto.webp";
import romane from "../assets/review/romane.jpg";

const reviews = [
  {
    id: 1,
    paragraph: `"We rented a car from this website and had an amazing experience! The booking was easy and the rental rates were very affordable."`,
    image: dominic,
    name: "Dominic Toretto",
    location: "",
  },
  {
    id: 2,
    paragraph: `"The car was in great condition and made our trip even better. Highly recommend for this car rental website!"`,
    image: romane,
    name: "Roman Pearce",
    location: "",
  },
];

export default function Testimonials() {
  return (
    <div className="bg-gray-100">
      <div className="flex justify-center items-center text-center pt-6">
        <div className="flex flex-col justify-center w-1/2">
          <h4 className="font-rob font-semibold text-lg">Reviewed by people</h4>
          <h1 className="text-5xl font-rob font-bold">
            Client&apos;s Testimonials
          </h1>
          <p className="text-gray-500 font-rob font-medium">
            Discover the positive impact we&apos;ve made on the our clients by
            reading through their testimonials. Our clients have experienced our
            service and results, and they&apos;re eager to share their positive
            experiences with you.
          </p>
        </div>
      </div>
      <div className="flex justify-center mb-5 mt-5 gap-3 ">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="max-w-md bg-white rounded overflow-hidden shadow-lg m-4 p-10"
          >
            <p className="text-lg font-rob font-semibold text-justify mb-5">
              {review.paragraph}
            </p>
            <div className="flex gap-5 items-center text-lg pt-4">
              <img
                src={review.image}
                alt=""
                className="rounded-full w-16 h-16"
              />
              <h2 className="text-md font-rob font-semibold">{review.name}</h2>
            </div>
          </div>
        ))}
      </div>
      <CallBanner />
    </div>
  );
}
