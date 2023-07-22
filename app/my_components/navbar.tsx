import { GrHpeLabs } from "react-icons/gr";
import { Tinos } from "next/font/google";
import { FiSearch } from "react-icons/fi";

const tinos = Tinos({
  subsets: ["latin"],
  weight: ["700"],
});
export default function Navbar() {
  return (
    <div className="container">
      <div className="flex justify-between style={{height: '80px'}} items-center">
        <div className="inline-flex items-center">
          <GrHpeLabs className="text-5xl" />
          <h2 className={`${tinos.className} text-2xl text-raisin-black`}>
            LABOREX
          </h2>
        </div>
        <ul className="flex space-x-4">
          <li>
            <a
              href="#"
              className="text-raisin-black hover:text-gray-500 font-bold text-md"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-raisin-black hover:text-gray-500 font-bold text-md"
            >
              Pages
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-raisin-black hover:text-gray-500 font-bold text-md"
            >
              Gallery
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-raisin-black hover:text-gray-500 font-bold text-md"
            >
              Contact Us
            </a>
          </li>
        </ul>
        <div className="inline-flex items-center space-x-4">
          <FiSearch className="text-2xl text-raisin-black" />
          <button className="rounded-full bg-verdigris text-white py-2 px-4">
            Register
          </button>
        </div>
      </div>
    </div>
  );
}
