import Navbar from "./components/Navbar"
import HomeBanner from "./components/HomeBanner"
import BookCar from "./components/BookCar"
import VehicleModel from "./components/VehicleModel"
import MiniBanner from "./components/MiniBanner"
import Accordion from "./components/Accordian"

export default function App() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <HomeBanner />
      <BookCar />
      <VehicleModel />
      <MiniBanner />
      <Accordion />
    </div>
  )
}