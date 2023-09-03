import Image from "next/image";
import React from "react";
import tictacgo from "../public/tictacgo.png";

function Tictacgo() {
  return (
    <div className="basis-1/3 flex-1 border-4 border-teal-600 rounded-lg">
      <a href="https://tictacgo.fun/" target="_blank" rel="noreferrer">
        <div className="relative">
          <Image
            className="object-cover rounded-md"
            width={"100%"}
            height={"100%"}
            layout="responsive"
            src={tictacgo}
            alt="website collage"
          />
          <div className="absolute inset-0 flex justify-center items-center text-white text-xl font-bold bg-black bg-opacity-90 transition-all duration-300 opacity-0 hover:opacity-100">
            <div className="overlay flex flex-wrap justify-center">
              <div className="flex flex-col items-center">
                <div className=" py-4 px-3">
                  TicTacGo is an attempt at building the classic TicTacToe game
                  in .NET 7. The solution uses Blazor for its frontend and
                  SignalR for the real-time interactivity. Github repo {""}
                  <a
                    href="https://github.com/jwankhalaf-cx/tictacgo"
                    className="no-underline hover:underline text-teal-400"
                    target="_blank"
                    rel="noreferrer"
                  >
                    here
                  </a>
                  {""} and click anywhere else to view this project
                </div>
              </div>
              <div className="flex flex-row items-center py-6">
                <span className="grid justify-items-center px-3">
                  <Image
                    src="https://img.icons8.com/fluency/50/email-sign.png"
                    alt="email-sign"
                    width="50"
                    height="50"
                  />
                  <p className="py-1">MS Blazor</p>
                </span>
                <span className="grid justify-items-center px-3">
                  <Image
                    src="https://img.icons8.com/officel/50/cellular-network.png"
                    alt="cellular-network"
                    width="50"
                    height="50"
                  />
                  <p className="py-1">SignalR</p>
                </span>
                <span className="grid justify-items-center px-3">
                  <Image
                    src="https://img.icons8.com/plasticine/50/tailwind_css.png"
                    alt="tailwind_css"
                    width="50"
                    height="50"
                  />
                  <p className="py-1">Tailwind CSS</p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}

export default Tictacgo;
