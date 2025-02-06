"use client"
import Image from "next/image";
import Typewriter from 'typewriter-effect';
import Contact from "./components/contact";
import Link from "next/link";
import About from "./components/about";
import Skills from "./components/skills";


export default function Home() {
  return (
    <div>
    <section className="text-gray-600 body-font bg-fixed bg-cover bg-gray-200">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <Image
        className="object-cover object-center mx-auto w-[15rem] rounded-2xl border-spacing-5"
        alt="Profile-picture"
        src="/port.jpg"
        width={500}
        height={500}
      />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        I AM,
        <br className="hidden lg:inline-block" />
        <Typewriter
  options={{
    strings: ["An Enthusiast Developer","(UI/UX) Designer"],
    autoStart: true,
    loop: true,
  }}
/>
      </h1>
      <p className="mb-8 leading-relaxed text-neutral-900 mr-24">
      An enthusiastic web developer with a solid foundation in HTML, CSS, and JavaScript,
       I&Apos;m currently expanding my skills with Next.js and Tailwind CSS. Passionate about creating responsive,
       user-friendly websites,I am dedicated to continuous learning and eager to apply my growing expertise
        to real-world projects.
      </p>
      <div className="flex justify-center">
        <Link href={"#Contact"}>
        <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
          Contact
        </button>
        </Link>
      </div>
    </div>
  </div>
</section>
<About/>
<Skills/>
<Contact/>
    </div>
  );
}
