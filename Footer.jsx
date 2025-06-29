import React from "react";

function Footer() {
  return (
    <div>
      <div className="flex">
        <div className="flex-1">
          <h3>Asad Nawaz</h3>
          <p>
            {" "}
            Full-stuck developer based in the pakistan, specializing in the web
            and softwere development
          </p>
        </div>
        <div className="flex-1">
          <form>
            <input type="email" placeholder="Enter your Email" />
            <button
              className="bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline
                transform transition-transfrom duration-300 hover:scale-105 px-4 py-2 rounded-full"
            >
              subcribe
            </button>
          </form>
        </div>
      </div>

      <div
        className="border-t border-gray-600 pt-6 flex flex-col md:flex-row 
        justify-between items-center"
      >
        <p className="text-gray-400">
          &copy: {new Date().getFullYear()} Asad Nawaz, All right reserved.
        </p>

        <div className="flex space-x-4 my-4 md:my-0">
          <a href="" className="text-gray-500 hover:text-white"></a>

          <a href="" className="text-gray-500 hover:text-white"></a>

          <a href="" className="text-gray-500 hover:text-white"></a>

          <a href="" className="text-gray-500 hover:text-white"></a>
        </div>
        <div>
          <a href="" className="text-gray-500 hover:text-white">
            privacy
          </a>

          <a href="" className="text-gray-500 hover:text-white">
            terms of Services
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
