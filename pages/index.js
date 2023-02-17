import Head from "next/head";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import rawan from "../public/rawan.png";
import code from "../public/google-code.png";
import design from "../public/design.png";
import scrum from "../public/scrum.png";
import Image from "next/image";
import rwnNews from "../public/rwn.png";
import imBoard from "../public/imboard.png";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Rawan H Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl">Portfolio</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Rawan Hamza
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Junior Full Stack Developer
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              Graduated from Northcoders bootcamp, you can contact me on
              LinkedIn or check my GitHub profile.
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <a
                href="http://www.linkedin.com/in/rawan-hamza"
                target="_blank"
                className="cursor-pointer"
              >
                <AiFillLinkedin />
              </a>
              <a
                href="https://github.com/Rawan-Hamza"
                target="_blank"
                className="cursor-pointer"
              >
                <AiFillGithub />
              </a>
            </div>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image src={rawan} layout="fill" objectFit="cover" />
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">
              So what's the story?
            </h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I had an interest in tech since I was a kid, I still remember
              playig Prince of Persia on a DOS machine. I was always fascinated
              by new technologies and had an eye for details when it came to
              design and user experience and interface. I recently made a
              descision to switch careers and finally going into software
              development. I love solving problems it gives me an opportunity to
              learn new concepts and algorithms which ultimately helps improving
              my approach to solving them.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <Image src={code} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2  ">Languages</h3>
              <p className="py-2">
                I mainly picked up JavaScript and React in the bootcamp
              </p>
              <h4 className="py-4 text-teal-600">
                Other languages I'm familiar with
              </h4>
              <p className="text-gray-800 py-1">Next.JS</p>
              <p className="text-gray-800 py-1">PSQL</p>
              <p className="text-gray-800 py-1">HTML</p>
              <p className="text-gray-800 py-1">Tailwind CSS</p>
              <p className="text-gray-800 py-1">CSS</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={design} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                Planning and Design
              </h3>
              <p className="py-2">
                plan app component trees and create wireframes to visualise
                concepts
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Excalidraw</p>
              <p className="text-gray-800 py-1">Canva</p>
              <p className="text-gray-800 py-1">Indesign</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={scrum} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">Consulting</h3>
              <p className="py-2">
                familiar with SCRUM and AGILE methodologies. using Kanban style
                tickets to process and complete tasks
              </p>
              <h4 className="py-4 text-teal-600">SCRUM Tools I Use</h4>
              <p className="text-gray-800 py-1">Trello</p>
              <p className="text-gray-800 py-1">Notion</p>
              <p className="text-gray-800 py-1">Hive</p>
            </div>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Portofolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              during my learnig journey, I've worked on few app concepts, the
              aim was to learn new tech and algorithms.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              <a href="https://rwn-news.netlify.app/" target="_blank">
                <Image
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={rwnNews}
                />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a href="https://imboard.netlify.app/" target="_blank">
                <Image
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={imBoard}
                />
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
