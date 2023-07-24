import homecar from '../assets/car-images/xuv300.webp'
export default function HomeBanner() {
  return (
    <div className='flex mx-11 h-screen items-center'>
        <div>
            <h4 className='font-poppins text-2xl mb-4 font-medium'>Plan your trip now</h4>
            <h2 className='font-poppins text-5xl mb-4 font-bold' style={{width:'500px'}}>Save <span className='text-red-600'>big</span> with our car rental</h2>
            <p className='font-poppins text-md mb-4 font-extralight'>Rent the car of your dreams. Unbeatable prices, unlimited miles, flexible pick-up options and much more.</p>
            <div className='space-x-5'>
                <button className='bg-red-600 px-12 py-6 shadow-2xl text-white font-poppins font-bold'>Book Ride</button>
                <button className='bg-black px-12 py-6 shadow-2xl text-white font-poppins font-bold'>Learn More</button>
            </div>
        </div>
        <img src={homecar} alt="" />
    </div>
  )
}
