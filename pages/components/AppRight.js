import React from "react";
import AppsIcon from "@mui/icons-material/Apps";
import { ViewGridIcon } from "@heroicons/react/solid";
import TravelOptions from "./TravelOptions";
function AppRight() {
  return (
    <div className="p-10">
      <header className="flex justify-between">
        {/* <AppsIcon /> */}
        <ViewGridIcon className="h-8 w-8 animate-bounce h-6 w-6" />
        <div className="flex items-center">
          <p className="link">Gallery</p>
          <p className="link">Stories</p>
          <img
            className="h-11 w-11 rounded-full"
            src="https://bestprofilepix.com/wp-content/uploads/2014/03/cute-stylish-winter-girls-facebook-profile-pictures-1280x720.jpg"
            alt=""
          />
        </div>
      </header>
      <h1 className="text-blue font-semiblod text-3xl">Discover</h1>
      <div className="flex w-80 justify-between mt-10">
        <p className="text-orange text-xl border-b-[2px] border-orange">
          Popular
        </p>
        <p className="text-gray text-xl hover:text-orange hover:border-b-[2px] border-orange delay-75 duration-100">
          Adventure
        </p>
        <p className="text-gray text-xl hover:border-b-[2px] hover:text-orange  border-orange delay-75 duration-100">
          Tour
        </p>
      </div>
      <div className="flex overflow-scroll hidescrollbar mt-5">
        <img
          className="w-60 h-80 mx-2 rounded-xl"
          src="https://images.unsplash.com/photo-1531101860752-fdad86cec994?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
          alt="mountains"
        />
        <img
          className="w-60 h-80 mx-2 rounded-xl"
          src="https://images.unsplash.com/photo-1457459686225-c7db79d4e59f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=335&q=80"
          alt="mountains"
        />
        <img
          className="w-60 h-80 mx-2 rounded-xl"
          src="https://images.unsplash.com/photo-1575351881847-b3bf188d9d0a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
          alt="hot air balloons"
        />
      </div>
      <h1 className="test-blue text-3xl font-bold mt-7">Types of Travel</h1>
      <div className="flex justify-evenly mt-8 ">
        <TravelOptions emoji="🌠" title="Luxury" active></TravelOptions>
        <TravelOptions emoji="🦁" title="Safari"></TravelOptions>
        <TravelOptions emoji="🚄" title="Train"></TravelOptions>
        <TravelOptions emoji="👪" title="Family"></TravelOptions>
        <TravelOptions emoji="👨" title="Alone"></TravelOptions>
      </div>
    </div>
  );
}

export default AppRight;
