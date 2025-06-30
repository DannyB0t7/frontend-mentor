import React from "react";
import bgcard from "../assets/profileCard/bg-pattern-card.svg";
import profile from "../assets/profileCard/image-victor.jpg";
import { Link } from "react-router-dom";

function ProfileCard() {
  return (
    <div className="min-h-[100vh] w-full bg-[#269d9a] grid place-items-center overflow-hidden relative">
      <Link
        to="/"
        className="p-2 flex gap-1 items-center absolute top-8 left-0 sm:left-10 hover:cursor-pointer"
      >
        <span class="material-symbols-rounded">arrow_back</span><p>Back</p>
      </Link>
      <div className="px-4">
        <div className="relative rounded-2xl bg-white overflow-hidden z-20 shadow-lg">
          <div className="relative">
            <img src={bgcard} loading="lazy" />
            <img
              src={profile}
              className="absolute z-20 -bottom-[40%] left-[50%] -translate-x-[50%] border-4 border-white rounded-full"
              loading="lazy"
            />
          </div>
          <div className=" pb-5 mt-20">
            <div className="flex gap-2 items-center justify-center px-4">
              <h1 className="text-xl text-[#2c2e3a] font-semibold">
                Victor Crest
              </h1>
              <p className="text-xl font-light text-[#6d6f77]">26</p>
            </div>
            <p className="mt-2 text-center text-[#6d6f77]">London</p>
            <div className="my-4 border-b-1 border-gray-300"></div>
            <div className="px-5 flex gap-2 flex-wrap items-center justify-between">
              <div className="text-center ">
                <h2 className="text-[#2c2e3a] font-bold text-2xl">80K</h2>
                <p className="text-sm text-[#6d6f77] tracking-wider">
                  Followers
                </p>
              </div>
              <div className="text-center ">
                <h2 className="text-[#2c2e3a] font-bold text-2xl">803K</h2>
                <p className="text-sm text-[#6d6f77] tracking-wider">Likes</p>
              </div>
              <div className="text-center ">
                <h2 className="text-[#2c2e3a] font-bold text-2xl">1.4K</h2>
                <p className="text-sm text-[#6d6f77] tracking-wider">Photos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
