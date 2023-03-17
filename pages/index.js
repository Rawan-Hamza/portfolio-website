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
import rwnChat from "../public/rwnchat.png";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={!darkMode ? "dark" : ""}>
      <Head>
        <title>Rawan H Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-gray-100 dark:bg-gray-900 px-10 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <div className="flex items-center">
              <BsFillMoonStarsFill
                onClick={() => setDarkMode(!darkMode)}
                className=" cursor-pointer text-2xl"
              />
            </div>
            <div className="flex items-center">
              <a
                className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                href="https://drive.google.com/file/d/1Q9NrcqNqJPuwZz0fRaq74xDME3uVNKi6/view?usp=share_link"
                target="_blank"
                rel="noreferrer"
              >
                Resume
              </a>
            </div>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Rawan Hamza
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Junior Full Stack Developer
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              As a passionate software developer, I am excited to connect with
              you and share my skills and experience. I completed the rigorous
              Northcoders bootcamp where I honed my coding abilities, and I have
              since contributed to a variety of projects on my GitHub profile.
              Whether you are interested in discussing my qualifications or want
              to collaborate on a new project, I am eager to hear from you. Let
              us connect on LinkedIn and start the conversation!
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <a
                href="http://www.linkedin.com/in/rawan-hamza"
                target="_blank"
                className="cursor-pointer"
                rel="noreferrer"
              >
                <AiFillLinkedin />
              </a>
              <a
                href="https://github.com/Rawan-Hamza"
                target="_blank"
                className="cursor-pointer"
                rel="noreferrer"
              >
                <AiFillGithub />
              </a>
            </div>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image
                src={rawan}
                layout="fill"
                objectFit="cover"
                priority
                alt="developer"
              />
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white">About Me</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              With a diverse background in pharmaceuticals, I bring a unique
              perspective to the software development industry. I have always
              had a passion for technology, and after making a career change
              into software development, I am excited to continue learning and
              growing in this dynamic field. Some of my recent projects include
              a reddit-like news website and a chat app, where I utilized my
              skills in NodeJS, ReactJS, SQL and Socket. I am driven by a desire
              to solve problems and create innovative solutions, and I am
              committed to delivering high-quality work that meets the needs of
              my clients and users.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <Image src={code} width={100} height={100} alt="" />
              <h3 className="text-lg text-teal-600 font-extrabold font-medium pt-8 pb-2  ">
                Stack
              </h3>
              <p className="py-2">
                I mainly picked up JavaScript and React in the bootcamp
              </p>
              <h4 className="py-4 text-teal-600">I am familiar with</h4>
              <div className="flex flex-wrap justify-center gap-4 py-4">
                <div className="flex flex-col items-center">
                  <i className="fab fa-react text-3xl text-gray-800"></i>
                  <span className="text-sm text-gray-800 py-1">ReactJS</span>
                </div>
                <div className="flex flex-col items-center">
                  <i className="fab fa-php text-3xl text-gray-800"></i>
                  <span className="text-sm text-gray-800 py-1">PHP</span>
                </div>
                <div className="flex flex-col items-center">
                  <i className="fab fa-node-js text-3xl text-gray-800"></i>
                  <span className="text-sm text-gray-800 py-1">NextJS</span>
                </div>
                <div className="flex flex-col items-center">
                  <i className="fas fa-database text-3xl text-gray-800"></i>
                  <span className="text-sm text-gray-800 py-1">PSQL</span>
                </div>
                <div className="flex flex-col items-center">
                  <i className="fab fa-html5 text-3xl text-gray-800"></i>
                  <span className="text-sm text-gray-800 py-1">HTML</span>
                </div>
                <div className="flex flex-col items-center">
                  <i className="fab fa-css3-alt text-3xl text-gray-800"></i>
                  <span className="text-sm text-gray-800 py-1">CSS</span>
                </div>
                <div className="flex flex-col items-center">
                  <i className="fas fa-paint-brush text-3xl text-gray-800"></i>
                  <span className="text-sm text-gray-800 py-1">
                    Tailwind CSS
                  </span>
                </div>
              </div>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={design} width={100} height={100} alt="" />
              <h3 className="text-lg text-teal-600 font-extrabold font-medium pt-8 pb-2 ">
                Planning and Design
              </h3>
              <p className="py-2">
                Plan app component trees and create wireframes to visualise
                concepts
              </p>
              <h4 className="py-4 text-teal-600">I am familiar with</h4>
              <div className="flex flex-wrap justify-center gap-4 py-4">
                <div className="flex flex-col items-center">
                  <i className="fab fa-brands fa-figma text-3xl text-gray-800"></i>
                  <span className="text-sm text-gray-800 py-1">Figma</span>
                </div>
                <div className="flex flex-col items-center">
                  <i className="fa-solid fa-pen-ruler text-3xl text-gray-800"></i>
                  <span className="text-sm text-gray-800 py-1">Excalidraw</span>
                </div>
                <div className="flex flex-col items-center">
                  <i className="fa-solid fa-feather-pointed text-3xl text-gray-800"></i>
                  <span className="text-sm text-gray-800 py-1">Canva</span>
                </div>
                <div className="flex flex-col items-center">
                  <i className="fa-regular fa-object-ungroup text-3xl text-gray-800"></i>
                  <span className="text-sm text-gray-800 py-1">Indesign</span>
                </div>
              </div>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={scrum} width={100} height={100} alt="" />
              <h3 className="text-lg text-teal-600 font-extrabold font-medium pt-8 pb-2 ">
                Task Management
              </h3>
              <p className="py-2">
                Familiar with SCRUM and AGILE methodologies. using Kanban style
                tickets to process and complete tasks
              </p>
              <h4 className="py-4 text-teal-600">I am familiar with</h4>
              <div className="flex flex-col items-center">
                <i className="fab fa-brands fa-trello text-3xl text-gray-800"></i>
                <span className="text-sm text-gray-800 py-1">Trello</span>
              </div>
              <div className="flex flex-col items-center">
                <i className="fab fa-n text-3xl text-gray-800"></i>
                <span className="text-sm text-gray-800 py-1">Notion</span>
              </div>
              <div className="flex flex-col items-center">
                <i className="fab fa-brands fa-hive text-3xl text-gray-800"></i>
                <span className="text-sm text-gray-800 py-1">Hive</span>
              </div>
            </div>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Projects</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              As part of my learning journey, I have undertaken various app
              development projects to gain experience with new technologies and
              algorithms. These projects have enabled me to gain a deeper
              understanding of software development best practices and provided
              me with opportunities to enhance my skills and knowledge. I am
              excited to share some of the projects I have completed, which
              showcase my ability and understanding of the field so far. Please
              click on the following images to explore each project in more
              detail
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 border-4 border-teal-600 rounded-lg">
              <a
                href="https://rwn-news.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="relative">
                  <Image
                    className="object-cover rounded-md"
                    width={"100%"}
                    height={"100%"}
                    layout="responsive"
                    src={rwnNews}
                    alt="website collage"
                  />
                  <div className="absolute inset-0 flex justify-center items-center text-white text-xl font-bold bg-black bg-opacity-50 transition-all duration-300 opacity-0 hover:opacity-100">
                    <div className="flex flex-col items-center">
                      <p className="py-1">ReactJS</p>
                      <p className="py-1">NodeJS</p>
                      <p className="py-1">PostgreSQL</p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="basis-1/3 flex-1 border-4 border-teal-600 rounded-lg">
              <a
                href="https://rwn-chat.adaptable.app"
                target="_blank"
                rel="noreferrer"
              >
                <div className="relative">
                  <Image
                    className="object-cover rounded-md"
                    width={"100%"}
                    height={"100%"}
                    layout="responsive"
                    src={rwnChat}
                    alt="website collage"
                  />
                  <div className="absolute inset-0 flex justify-center items-center text-white text-xl font-bold bg-black bg-opacity-50 transition-all duration-300 opacity-0 hover:opacity-100">
                    <div className="flex flex-col items-center">
                      <p className="py-1">NodeJS</p>
                      <p className="py-1">Socket.io</p>
                      <p className="py-1">Express</p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
