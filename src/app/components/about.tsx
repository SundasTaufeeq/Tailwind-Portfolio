import React from 'react'
import Link from 'next/link'

const about = () => {
  return (
    <div id="about" >
      <section className="text-gray-600 body-font bg-gray-300">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center ml-24">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        About me
      </h1>
      <div>
      <p className="m-h-screen mb-8 leading-relaxed">

With a growing passion for web development, I am focused on advancing my skills in 
creating dynamic and interactive web applications.My journey includes hands-on experience 
with modern tools like Next.js, Tailwind CSS, and TypeScript. I am committed to learning 
and refining my expertise to deliver seamless and engaging user experiences.
</p>
<p>
As a web development enthusiast, I am committed to staying updated with industry trends and technologies.
I enjoy working on real-world projects that help me apply my knowledge and grow as a developer.
My goal is to contribute to the digital world by crafting impactful and accessible web solutions.</p>
    <p>
    </p>
      </div>
      <div className="flex justify-center mt-4">
        <Link target='blank' href="/resume.png">
        <button className="mt-4 inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 rounded text-lg">
          View CV
        </button>
        </Link>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img
        className="object-cover object-center rounded-full mx-auto"
        alt="Picture"
        src="/port1.jpg"
        width={300}
        height={300}
      />
    </div>
  </div>
</section>

    </div>
  )
}

export default about
