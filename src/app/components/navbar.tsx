import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MdDownloading } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="bg-gray-100 z-50 sticky top-0">
      <header className="text-black body-font">
  <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
    <div className='text-xl font-medium'> 
        <Image src='/logo.png' alt='logo' width='50' height='50 '/>
        </div>
      <span className="ml-3 text-xl">My Portfolio</span>
    </a>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <Link href={"/"} className="mr-5 hover:text-blue-900">Home</Link>
      <Link href={"#about"} className="mr-5 hover:text-blue-900">About</Link>
      <Link href={"#skills"} className="mr-5 hover:text-blue-900">Skills</Link>
      <Link href={"#projects"}className="mr-5 hover:text-blue-900">Projects</Link>  
      <Link href={"#Contact"}className="mr-5 hover:text-blue-900">Contact</Link>
    
    </nav>
    <a href='resume.png'>
    <button  className="inline-flex items-center bg-black border-0 py-1 px-3 focus:outline-none
    hover:bg-gray-500 rounded text-base mt-4 md:mt-0 text-white">
      Download CV
    <MdDownloading  className="text-xl ml-2"/>
    </button>
    </a>
  </div>
</header>
    </div>
  )
}

export default Navbar
