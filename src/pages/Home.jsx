import HomeBanner from "../components/HomeBanner";
import BookCar from "../components/BookCar";
import VehicleModel from "../components/VehicleModel";
import MiniBanner from "../components/MiniBanner";
import Accordion from "../components/Accordian";
import Quick from "../components/Quick";
import ScrollButton from "../components/ScrollButton";
import Testimonials from "./Testimonials";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <ScrollButton />
      <HomeBanner />
      <BookCar />
      <Quick />
      <VehicleModel />
      <MiniBanner />
      <Testimonials />
      <Accordion />
    </div>
  );
}
