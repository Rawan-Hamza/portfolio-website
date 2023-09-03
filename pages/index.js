import Head from "next/head";
import { AiFillLinkedin, AiFillGithub, AiFillFilePdf } from "react-icons/ai";
import rawan from "../public/rawan.png";
import design from "../public/design.png";
import scrum from "../public/scrum.png";
import Image from "next/image";
import Chat from "./Chat";
import News from "./News";
import Tictacgo from "./Tictacgo";
import TechStack from "./TechStack";

export default function Home() {
  return (
    <div className="dark">
      <Head>
        <title>Rawan Hamza</title>
        <meta
          name="description"
          content="Rawan H portfolio developed using NextJS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="dark:bg-gray-900 px-10 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-7xl">
              RAWAN HAMZA
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              JUNIOR SOFTWARE DEVELOPER
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl"></p>
            <div className="text-7xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
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
              <a
                href="https://drive.google.com/file/d/1pL90PCQ5tSPeRhgkbq2E2wca9uCbZtaX/view?usp=share_link"
                target="_blank"
                className="cursor-pointer"
                rel="noreferrer"
              >
                <AiFillFilePdf />
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
          <TechStack />
          <div>
            <h3 className="text-5xl py-1 dark:text-white py-10">ABOUT ME</h3>
            <p className="text-xl py-1 leading-8 text-gray-800 dark:text-gray-200">
              An experienced pharmacist with a passion for technology, I keep up
              to date with tech news, tools and latest frameworks. with a keen
              eye for writing and developing clean, maintainable and readable
              code. After finishing an intense learning experience at
              Northcoders bootcamp, I am ready to embark on my journey in this
              field.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={design} width={100} height={100} alt="design tools" />
              <h3 className="text-xl text-teal-600 font-extrabold font-xl pt-8 pb-2 ">
                PLANNING & DESIGN
              </h3>
              <p className="text-lg py-2">
                Plan app component trees and create wireframes to visualise
                concepts
              </p>
              <div className="flex flex-wrap justify-center gap-9 py-9">
                <div className="flex flex-col items-center">
                  <i className="fab fa-brands fa-figma text-5xl text-gray-800"></i>
                  <span className="text-lg text-gray-800 py-2">Figma</span>
                </div>
                <div className="flex flex-col items-center">
                  <i className="fa-solid fa-pen-ruler text-5xl text-gray-800"></i>
                  <span className="text-lg text-gray-800 py-2">Excalidraw</span>
                </div>
                <div className="flex flex-col items-center">
                  <i className="fa-solid fa-feather-pointed text-5xl text-gray-800"></i>
                  <span className="text-lg text-gray-800 py-2">Canva</span>
                </div>
              </div>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={scrum} width={100} height={100} alt="" />
              <h3 className="text-xl text-teal-600 font-extrabold font-xl pt-8 pb-2 ">
                TASK MANAGEMENT
              </h3>
              <p className="text-lg py-2">
                Familiar with AGILE philosiphy, and SCRUM methodologies and
                Kanban
              </p>
              <div className="flex flex-wrap justify-center gap-9 py-9">
                <div className="flex flex-col items-center">
                  <i className="fab fa-trello text-5xl text-gray-800"></i>
                  <span className="text-lg text-gray-800 py-2">Trello</span>
                </div>
                <div className="flex flex-col items-center">
                  <i className="fab fa-n text-5xl text-gray-800"></i>
                  <span className="text-lg text-gray-800 py-2">Notion</span>
                </div>
                <div className="flex flex-col items-center">
                  <i className="fab fa-linux text-5xl text-gray-800"></i>
                  <span className="text-lg text-gray-800 py-2">Linux</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-5xl py-1 dark:text-white py-10">PROJECTS</h3>
            <div className="text-xl py-2 leading-8 text-gray-800 dark:text-gray-200">
              These projects have given me a better grasp of good software
              development practices such as writing clean, efficient and
              maintainable code. I will keep updating this section with more
              projects as I learn new technologies in my journey
              <br />
              <br />
              <b>Hover on each project to see more details.</b>
            </div>
          </div>
          <div className="grid grid-rows-1 grid-flow-col gap-4 py-10 max-w-screen-4xl">
            <News />
            <Chat />
            <Tictacgo />
          </div>
        </section>
      </main>
    </div>
  );
}
