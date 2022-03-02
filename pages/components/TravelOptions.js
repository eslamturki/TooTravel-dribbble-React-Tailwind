import React from "react";

function TravelOptions({ emoji, title, active }) {
  return (
    <div
      className={
        active
          ? "bg-orange h-28 w-16 rounded-full items-center justify-center shadow-lg text-white"
          : "bg-white h-28 w-16 rounded-full items-center justify-center shadow-lg hover:bg-orange cursor-pointer text-black hover:text-white  delay-150 hover:scale-110 transition duration-500  "
      }
    >
      <div>
        <p className="bg-lightGray rounded-full text-center p-1 m-4 w-8 h-8">
          {emoji}
        </p>
      </div>

      <p className={"text-center"}>{title}</p>
    </div>
  );
}

export default TravelOptions;
