import Navbar from "./components/Navbar"
import HomeBanner from "./components/HomeBanner"
import BookCar from "./components/BookCar"
import VehicleModel from "./components/VehicleModel"
import MiniBanner from "./components/MiniBanner"
import Accordion from "./components/Accordian"
import Quick from "./components/Quick"
import Footer from "./components/Footer"
import ScrollButton from "./components/ScrollButton"

export default function App() {
  return (
    <div className="overflow-hidden">
      <ScrollButton />
      <Navbar />
      <HomeBanner />
      <BookCar />
      <Quick />
      <VehicleModel />
      <MiniBanner />
      <Accordion />
      <Footer />
    </div>
  )
}