import { useState, useEffect } from 'react'
import logo from '../../Images/logo.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    window.onscroll = function () {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
  }, [])

  const toggleNav = () => setIsOpen(!isOpen)

  return (
    <>
      <nav
        className={`${scrolled ? 'shadow-lg backdrop-blur-sm' : ''} fixed w-full`}
      >
        <div className="max-w-6xl mx-auto  px-4">
          <div className="flex justify-between">
            <div className="flex space-x-7">
              <div>
                <a href="#!" className="flex items-center py-4 px-2">
                  <img
                    src={logo}
                    alt="Logo"
                    className="h-8 w-40 mr-2"
                  />
                </a>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-3">
              <div className="hidden md:flex items-center space-x-3">
                <a
                  href="#!"
                  className="py-4 px-2 text-googleBlue border-b-4 border-googleBlue font-semibold "
                >
                  Home
                </a>
                <a
                  href="#!"
                  className="py-4 px-2 text-gray-500 font-semibold hover:text-googleGreen transition duration-300"
                >
                  Speakers
                </a>
                <a
                  href="#!"
                  className="py-4 px-2 text-gray-500 font-semibold hover:text-googleYellow transition duration-300"
                >
                  Timeline
                </a>
                <a
                  href="#!"
                  className="py-4 px-2 text-gray-500 font-semibold hover:text-googleRed transition duration-300"
                >
                  Sponsors
                </a>
              </div>
            </div>

            <div className="md:hidden flex items-center">
              <button
                className="outline-none mobile-menu-button"
                onClick={toggleNav}
              >
                <svg
                  className=" w-6 h-6 text-gray-500 hover:text-green-500 "
                  x-show="!showMenu"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className={`${isOpen === false ? 'hidden' : ''}`}>
          <ul className="bg-white border border-b-2 border-gray-200">
            <li className="active">
              <a
                href="index.html"
                className="block text-sm px-2 py-4 text-white bg-green-500 font-semibold"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="block text-sm px-2 py-4 hover:bg-green-500 hover:text-white transition duration-300"
              >
                Speakers
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="block text-sm px-2 py-4 hover:bg-green-500 hover:text-white transition duration-300"
              >
                Timeline
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block text-sm px-2 py-4 hover:bg-green-500 hover:text-white transition duration-300"
              >
                Sponsors
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}
