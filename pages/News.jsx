import Image from "next/image";
import React from "react";
import rwnNews from "../public/rwn.png";

function News() {
  return (
    <div className="basis-1/3 flex-1 border-4 border-teal-600 rounded-lg">
      <a href="https://rwn-news.netlify.app/" target="_blank" rel="noreferrer">
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
            <div className="overlay flex flex-wrap justify-center">
              <div className="flex flex-col items-center">
                <div className="block py-4 px-3">
                  Uses a RESTful API {""}
                  <a
                    href="https://rwn-news.onrender.com/api"
                    className="no-underline hover:underline text-teal-400"
                    target="_blank"
                    rel="noreferrer"
                  >
                    here
                  </a>
                  {""} that connects to the northcoders NC-NEWS database, back
                  end project can be found {""}
                  <a
                    href="https://github.com/Rawan-Hamza/rwn-news"
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
  );
}

export default News;
