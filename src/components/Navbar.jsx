
export default function Navbar() {
  return (
    <div className="flex justify-between  items-center py-5 px-20 bg-transparent font-rob font-semibold">
        <h2 className="text-xl">Rayagada Rentals</h2>
        <div className="">
            <ul className="flex justify-between space-x-4">
                <li className="hover:text-red-600"><a href="">Home</a></li>
                <li className="hover:text-red-600"><a href="">About</a></li>
                <li className="hover:text-red-600"><a href="">Vehicle Models</a></li>
                <li className="hover:text-red-600"><a href="">Testimonials</a></li>
                <li className="hover:text-red-600"><a href="">Our Team</a></li>
                <li className="hover:text-red-600"><a href="">Contact</a></li>
            </ul>
        </div>
        <div className="flex space-x-4">
            <button className="hover:text-red-600">Sign In</button>
            <button className="bg-red-500 py-2 px-4 text-white">Register</button>
        </div>
    </div>
  )
}
