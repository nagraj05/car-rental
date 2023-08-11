import CallBanner from "../components/CallBanner";
import one from "../assets/team/1.jpg";
import two from "../assets/team/2.jpg";
import three from "../assets/team/3.jpg";
import four from "../assets/team/4.jpg";
import five from "../assets/team/5.jpg";
import six from "../assets/team/6.jpg";

const team = [
  {
    id: 1,
    img: one,
    name: "David Smith",
    title: "Business Owner",
  },
  {
    id: 2,
    img: two,
    name: "Emily Johnson",
    title: "Manager",
  },
  {
    id: 3,
    img: three,
    name: "Alex Rodriguez",
    title: "Salesman",
  },
  {
    id: 4,
    img: four,
    name: "Sarah Thompson",
    title: "Car Detailist",
  },
  {
    id: 5,
    img: five,
    name: "Kevin Brown",
    title: "Mechanic",
  },
  {
    id: 6,
    img: six,
    name: "Olivia Wilson",
    title: "Online Consultant",
  },
];

export default function Team() {
  return (
    <div>
      <div className="bg-slate-100">
        <h1 className="text-center font-rob font-bold p-5 text-4xl">
          Our Team
        </h1>
        <div className="flex flex-wrap w-4/5 mx-auto">
          {team.map((person) => (
            <div
              key={person.id}
              className=" bg-white rounded-lg overflow-hidden shadow-lg m-4 "
            >
              <img
                src={person.img}
                alt=""
                className=" p-4"
                style={{ height: "400px", width: "300px" }}
              />
              <h3 className="text-center m-2 font-rob font-semibold text-lg">
                {person.name}
              </h3>
              <h3 className="text-center mb-4 text-gray-500 font-rob ">
                {person.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
      <CallBanner />
    </div>
  );
}
