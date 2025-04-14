import React from "react";
import Landscape2 from "../assets/landscape/landscape2.jpg";

const Card = ({ title, price, features }) => {
  return (
    <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-8 dark:bg-gray-800 dark:border-gray-700">
      <h5 className="mb-4 text-2xl font-medium text-gray-500 dark:text-gray-400 text-center">
        {title}
      </h5>
      <img src={Landscape2} className="mb-4" />
      <div className="flex items-center text-gray-900 dark:text-white">
        <span className="text-3xl font-semibold mr-2">IDR</span>
        <span className="text-5xl font-extrabold tracking-tight">{price}</span>
      </div>
      <ul className="space-y-5 my-7">
        {features?.map((feature, index) => (
          <li
            key={index}
            className={`flex items-center ${
              !feature.included && "line-through decoration-gray-500"
            }`}
          >
            <svg
              className={`shrink-0 w-4 h-4 ${
                feature.included
                  ? "text-blue-700 dark:text-blue-500"
                  : "text-gray-400 dark:text-gray-500"
              }`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
              {feature.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Card;
