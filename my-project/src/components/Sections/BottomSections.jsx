import React from "react";
import Card from "../Card/Card";

function BottomSection() {
  return (
    <div className="w-full h-full px-5 py-4 flex flex-col gap-4 ">
      <h1 className="text-2xl font-bold">Contact List</h1>
      <div className="grid grid-cols-2 gap-4">
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default BottomSection;
