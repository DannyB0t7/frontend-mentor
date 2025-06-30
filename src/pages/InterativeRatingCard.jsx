import React from "react";
import iconStar from "../assets/InteractiveRating/icon-star.svg";
import Rating from "../components/Rating";
import { Link } from "react-router-dom";

function InterativeRatingCard() {
  return (
    <div className="min-h-[100vh] w-full grid place-items-center bg-black relative">
      <Link
        to="/"
        className="text-white p-2 flex gap-1 items-center absolute top-8 left-0 sm:left-10 hover:cursor-pointer"
      >
        <span class="material-symbols-rounded">arrow_back</span> <p>Back</p>
      </Link>
      <div className="py-10 px-4">
        <div className="rounded-3xl p-6 max-w-[360px] bg-[#151618] text-white">
          <div className="w-fit p-4 rounded-full bg-[#2a2e34] grid place-items-center">
            <img src={iconStar} />
          </div>
          <h1 className="text-xl font-semibold mt-5">How did we do?</h1>
          <p className="text-sm text-[#a0a6af] mt-3">
            Please let us know how we did with your support request. ALl
            feedback is appreciated to help us improve our offering!
          </p>

          <div className="flex justify-between mt-5">
            <Rating rating={1} />
            <Rating rating={2} />
            <Rating rating={3} />
            <Rating rating={4} />
            <Rating rating={5} />
          </div>
          <button className=" mt-6 p-2 rounded-full w-full bg-[#f26c07] text-black hover:bg-white hover:cursor-pointer tracking-wider font-medium">
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  );
}

export default InterativeRatingCard;
