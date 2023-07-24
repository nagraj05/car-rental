import service from '../assets/icons/protection red.png';
import operator from '../assets/icons/help-operator red.png';
import car from '../assets/icons/image red.png';

const Data = [
  {
    id: 1,
    img: service,
    title: 'Select Car',
    para: 'We offer a big range of vehicles for all your driving needs. We have the perfect car to meet your needs.',
  },
  {
    id: 2,
    img: operator,
    title: 'Contact Operator',
    para: 'Our knowledgeable and friendly operators are always ready to help with any questions or concerns.',
  },
  {
    id: 3,
    img: car,
    title: "Let's Drive",
    para: 'Whether you’re hitting the open road, we’ve got you covered with our wide range of cars.',
  },
];

export default function Quick() {
  return (
    <div className="flex flex-col justify-center items-center border-t" style={{height:'100vh'}}>
      <h4 className='text-xl font-poppins '>Plan your trip now</h4>
      <h2 className='text-4xl font-poppins font-bold'>Quick &amp; easy car rental</h2>
      <div className="flex text-center w-86 pt-16">
        {Data.map((item) => (
          <div key={item.id} className="p-6">
            <img src={item.img} alt="" className="h-20 w-20 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2 font-poppins">{item.title}</h3>
            <p className="text-gray-600 font-poppins font-extralight">{item.para}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
