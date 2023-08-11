import corolla from "../assets/car-images/corolla.png";
import xuv300 from "../assets/car-images/xuv300.webp";
import swift from "../assets/car-images/Swift.png";
import jeep from "../assets/car-images/jeep.png";
import ertiga from "../assets/car-images/ertiga.png";
import scorpio from "../assets/car-images/Scorpio.png";
// import buggati from "../assets/car-images/buggati.png";
import renault from "../assets/car-images/renault kwid.png";

const carsData = [
  {
    id: 1,
    name: "Toyota Corolla",
    image: corolla,
    pricePerDay: "5000",
    model: "Corolla",
    mark: "Y",
    year: "2022",
    AC: "Yes",
    fuelType: "Petrol",
    seater: "5",
    transmission: "Automatic",
  },
  {
    id: 2,
    name: "Renault KWID",
    image: renault,
    pricePerDay: "8000",
    model: "KWID",
    mark: "X",
    year: "2021",
    AC: "Yes",
    fuelType: "Diesel",
    seater: "5",
    transmission: "Manual",
  },
  {
    id: 3,
    name: "Mahindra XUV300",
    image: xuv300,
    pricePerDay: "9000",
    model: "XUV",
    mark: "X",
    year: "2023",
    AC: "Yes",
    fuelType: "Petrol",
    seater: "5",
    transmission: "Manual",
  },
  {
    id: 4,
    name: "Jeep",
    image: jeep,
    pricePerDay: "12,000",
    model: "Jeep",
    mark: "X",
    year: "2021",
    AC: "Yes",
    fuelType: "Petrol",
    seater: "5",
    transmission: "Manual",
  },
  {
    id: 5,
    name: "Maruti Swift Dzire",
    image: swift,
    pricePerDay: "7000",
    model: "Dzire",
    mark: "X",
    year: "2020",
    AC: "Yes",
    fuelType: "Petrol",
    seater: "5",
    transmission: "Manual",
  },
  {
    id: 6,
    name: "Mahindra Scorpio",
    image: scorpio,
    pricePerDay: "12,000",
    model: "XUV",
    mark: "X",
    year: "2023",
    AC: "Yes",
    fuelType: "Diesel",
    seater: "5",
    transmission: "Manual",
  },
  {
    id: 7,
    name: "Maruti Suzuki Ertiga",
    image: ertiga,
    pricePerDay: "10,000",
    model: "Ertiga",
    mark: "X",
    year: "2019",
    AC: "Yes",
    fuelType: "Petrol",
    seater: "7",
    transmission: "Manual",
  },
  // {
  //   id: 8,
  //   name: "Buggati",
  //   image: buggati,
  //   pricePerDay: "haha lol",
  //   model: "Convertible",
  //   mark: "X",
  //   year: "2023",
  //   AC: "Yes",
  //   fuelType: "Hybrid",
  //   seater: "2",
  //   transmission: "Manual",
  // },
];

export default carsData;
