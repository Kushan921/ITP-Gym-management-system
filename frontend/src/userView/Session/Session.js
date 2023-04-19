import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Session() {
  return (
    <div>
      <Header/>
      <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
        <div className="bg-black w-full h-5">
          <img src="" alt="image" />
        </div>

        <div className="text-2xl font-semibold  text-center text-gray-500 truncate">
          Total users
        </div>
        <div className="mt-1 text-sm font-medium justify text-gray-900">
          12,00
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Session;
