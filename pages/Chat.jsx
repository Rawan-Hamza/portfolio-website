import Image from "next/image";
import React from "react";
import rwnChat from "../public/rwnchat.png";

function Chat() {
  return (
    <div className="basis-1/3 flex-1 border-4 border-teal-600 rounded-lg">
      <a href="https://rwn-chat.adaptable.app" target="_blank" rel="noreferrer">
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
            <div className="overlay flex flex-wrap justify-center">
              <div className="flex flex-col items-center">
                <div className=" h-fit py-4 px-3">
                  Chat in different rooms, contains a chat bot that sends
                  notifications. you can find the Github repo {""}
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
  );
}

export default Chat;
