import Head from "next/head";
import { AiFillLinkedin, AiFillGithub, AiFillFilePdf } from "react-icons/ai";
import rawan from "../public/rawan.png";
import design from "../public/design.png";
import scrum from "../public/scrum.png";
import Image from "next/image";
import rwnNews from "../public/rwn.png";
import rwnChat from "../public/rwnchat.png";

export default function Home() {
  return (
    <div className={"dark"}>
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
              JUNIOR FULL STACK DEVELOPER
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
          <div>
            <h3 className="text-5xl py-1 dark:text-white">CURRENT STACK</h3>
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <div className="flex flex-wrap justify-center gap-10 py-1">
                <div className="flex flex-col items-center">
                  <i className="fab fa-js text-8xl text-gray-800"></i>
                  <span className="text-lg text-gray-800 py-2">JavaScript</span>
                </div>
                <div className="flex flex-col items-center">
                  <i className="fab fa-node-js text-8xl text-gray-800"></i>
                  <span className="text-lg text-gray-800 py-2">NodeJS</span>
                </div>
                <div className="flex flex-col items-center">
                  <i className="fab fa-react text-8xl text-gray-800"></i>
                  <span className="text-lg text-gray-800 py-2">ReactJS</span>
                </div>
                <div className="flex flex-col items-center">
                  <i className="fab fa-php text-8xl text-gray-800"></i>
                  <span className="text-lg text-gray-800 py-2">PHP</span>
                </div>
                <div className="flex flex-col items-center">
                  <i className="fab fa-laravel text-8xl text-gray-800"></i>
                  <span className="text-lg text-gray-800 py-2">Laravel</span>
                </div>
                <div className="flex flex-col items-center">
                  <i className="fas fa-database text-8xl text-gray-800"></i>
                  <span className="text-lg text-gray-800 py-2">PSQL</span>
                </div>
                <div className="flex flex-col items-center">
                  <i className="fab fa-html5 text-8xl text-gray-800"></i>
                  <span className="text-lg text-gray-800 py-2">HTML</span>
                </div>
                <div className="flex flex-col items-center">
                  <i className="fab fa-css3 text-8xl text-gray-800"></i>
                  <span className="text-lg text-gray-800 py-2">CSS</span>
                </div>
                <div className="flex flex-col items-center">
                  <i className="fas fa-crown text-8xl text-gray-800"></i>
                  <span className="text-lg text-gray-800 py-2">JEST</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-5xl py-1 dark:text-white py-10">ABOUT ME</h3>
            <p className="text-xl py-1 leading-8 text-gray-800 dark:text-gray-200">
              An experienced pharmacist with a passion for technology, I keep up to date with tech news, tools and latest frameworks. with a keen eye for writing and developing clean, maintainable and readable code. After finishing an intense learning experience at Northcoders bootcamp, I am ready to embark on my journey in this field.
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
                Familiar with SCRUM, AGILE methodologies and Kanban
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
              maintainable code. I will keep updating this section with more projects as I learn new technologies in my journey
              <br />
              <br />
              Hover on each project to see more details.
            </div>
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
                  <div className="absolute inset-0 flex justify-center items-center text-white text-xl font-bold bg-black bg-opacity-90 transition-all duration-300 opacity-0 hover:opacity-100">
                    <div className="flex flex-wrap justify-center">
                      <div className="flex flex-col items-center">
                        <div className="py-4 px-3">
                          This project uses a RESTful API {""}
                          <a
                            href="https://rwn-news.onrender.com/api"
                            className="no-underline hover:underline text-teal-400"
                            target="_blank"
                            rel="noreferrer"
                          >
                            here
                          </a>
                          {""} that connects to the northcoders NC-NEWS
                          database, back end project can be found {""}
                          <a
                            href="https://github.com/Rawan-Hamza/rwn-news"
                            className="no-underline hover:underline text-teal-400"
                            target="_blank"
                            rel="noreferrer"
                          >
                            here
                          </a>
                          {""} and anywhere else to view this project
                        </div>
                      </div>
                      <div className="flex flex-row items-center py-6">
                        <span className="grid justify-items-center px-3">
                          <Image
                            src="https://img.icons8.com/color/50/null/react-native.png"
                            alt="stack icon"
                            height={50}
                            width={50}
                          />
                          <p className="py-1">ReactJS</p>
                        </span>
                        <span className="grid justify-items-center px-3">
                          <Image
                            src="https://img.icons8.com/fluency/50/null/node-js.png"
                            alt="stack icon"
                            height={50}
                            width={50}
                          />
                          <p className="py-1">NodeJS</p>
                        </span>
                        <span className="grid justify-items-center px-3">
                          <Image
                            src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/50/null/external-postgre-sql-a-free-and-open-source-relational-database-management-system-logo-color-tal-revivo.png"
                            alt="stack icon"
                            height={50}
                            width={50}
                          />
                          <p className="py-1">PSQL</p>
                        </span>
                      </div>
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
                  <div className="absolute inset-0 flex justify-center items-center text-white text-xl font-bold bg-black bg-opacity-90 transition-all duration-300 opacity-0 hover:opacity-100">
                    <div className="flex flex-wrap justify-center">
                      <div className="flex flex-col items-center">
                        <div className="py-4 px-3">
                          A chat application that contains rooms to discuss
                          different topics, it contains a chat bot that greets
                          and notifies other users when another user joins or
                          leaves. you can find the Github repo {""}
                          <a
                            href="https://github.com/Rawan-Hamza/RWN-Chat"
                            className="no-underline hover:underline text-teal-400"
                            target="_blank"
                            rel="noreferrer"
                          >
                            here
                          </a>
                          {""} and anywhere else to view this project
                        </div>
                      </div>
                      <div className="flex flex-row items-center py-6">
                        <span className="grid justify-items-center px-3">
                          <Image
                            src="https://img.icons8.com/fluency/50/null/node-js.png"
                            alt="stack icon"
                            height={50}
                            width={50}
                          />
                          <p className="py-1">NodeJS</p>
                        </span>
                        <span className="grid justify-items-center px-3">
                          <Image
                            src="https://img.icons8.com/external-vitaliy-gorbachev-blue-vitaly-gorbachev/50/null/external-socket-ecology-vitaliy-gorbachev-blue-vitaly-gorbachev.png"
                            alt="stack icon"
                            height={50}
                            width={50}
                          />
                          <p className="py-1">Socket.io</p>
                        </span>
                        <span className="grid justify-items-center px-3">
                          <Image
                            src="https://img.icons8.com/external-bearicons-blue-bearicons/50/null/external-Express-post-office-bearicons-blue-bearicons.png"
                            alt="stack icon"
                            height={50}
                            width={50}
                          />
                          <p className="py-1">Express</p>
                        </span>
                      </div>
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
