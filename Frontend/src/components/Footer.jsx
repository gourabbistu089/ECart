import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter, FaLocationArrow, FaPhone } from 'react-icons/fa'
import { FaPinterestP, FaYoutube } from 'react-icons/fa'

function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 py-12 px-4 md:px-6 lg:px-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="col-span-1 md:col-span-1">
          <h2 className="text-2xl font-bold text-[#F53A44]">ECART</h2>
          <p className="mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            voluptatibus, quae.
          </p>
          <p className="mt-4">© 2023 ECART. All rights reserved.</p>
          <button className="mt-6 font-bold bg-[#ff464f] text-white px-6 py-2 rounded-2xl hover:bg-[#ff5664] transition-colors duration-300">
            Get Started
          </button>
        </div>
        <div className="col-span-1 md:col-span-1">
          <h2 className="text-2xl font-bold">Important Links</h2>
          <ul className="mt-4 space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Blog
              </a>
            </li>
          </ul>
        </div>
        <div className="col-span-1 md:col-span-1">
          <h2 className="text-2xl font-bold">Features</h2>
          <ul className="mt-4 space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Easy to use
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Fully responsive
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Highly customizable
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Fast
              </a>
            </li>
          </ul>
        </div>
        <div className="col-span-1 md:col-span-1">
          <h2 className="text-2xl font-bold">Contact Us</h2>
          <p className="mt-4 flex items-center">
            <FaLocationArrow className="mr-2  dark:text-white text-[#1e1818]" />
            123 Street Name, City Name, USA
          </p>
          <p className="mt-2 flex items-center">
            <FaPhone className="mr-2 dark:text-white text-[#2c2424]" />
            Phone: 123-456-7890
          </p>
          <div className="mt-6 flex">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className="mr-4 text-2xl text-[#3b5998]" />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="mr-4 text-2xl text-[#F53A44]" />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="mr-4 text-2xl text-[#1DA1F2]" />
            </a>
            <a
              href="https://www.pinterest.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaPinterestP className="mr-4 text-2xl text-[#F53A44]" />
            </a>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube className="mr-4 text-2xl text-[#F53A44]" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

