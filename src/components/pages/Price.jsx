import React from "react";
import Card from "../Card";

const Pricelist = () => {
  return (
    <div>
      <div className="w-full p-4 text-center bg-white border-gray-200 shadow-sm sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <h5 className="mb-8 text-3xl font-bold text-gray-900 dark:text-white ">
          Pricelist
        </h5>
        <Card />
      </div>
    </div>
  );
};

export default Pricelist;
