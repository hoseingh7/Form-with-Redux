import React from "react";

function Card() {
  return (
    <div className="bg-[#F9F9F9] px-5 py-2 flex justify-between items-center shadow-lg rounded-lg">
      <span className="w-10/12">
        jax gholami - 091213245678 - text@gmail.com
      </span>
      <button className="w-fit px-4 py-2 text-white bg-red-500 rounded-lg">
        Delete
      </button>
    </div>
  );
}

export default Card;
