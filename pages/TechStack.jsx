import React from "react";

function TechStack() {
  return (
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
            <i className="fab fa-microsoft text-8xl text-gray-800"></i>
            <span className="text-lg text-gray-800 py-2">.NET</span>
          </div>
          <div className="flex flex-col items-center">
            <i className="fas fa-fire-flame-curved text-8xl text-gray-800"></i>
            <span className="text-lg text-gray-800 py-2">Blazor</span>
          </div>
          <div className="flex flex-col items-center">
            <i className="fab fa-php text-8xl text-gray-800"></i>
            <span className="text-lg text-gray-800 py-2">PHP</span>
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
  );
}

export default TechStack;
