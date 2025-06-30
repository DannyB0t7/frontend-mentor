import React from "react";
import hero from "../assets/orderSummaryCard/illustration-hero.svg";
import iconMusic from "../assets/orderSummaryCard/icon-music.svg";
import { Link } from "react-router-dom";

function OrderSummaryCard() {
  return (
    <div className="min-h-screen w-full grid place-items-center bg-[#e6ecff] relative">
      <Link
        to="/"
        className="p-2 flex gap-1 items-center absolute top-8 left-0 sm:left-10 hover:cursor-pointer"
      >
        <span class="material-symbols-rounded">arrow_back</span> <p>Back</p>
      </Link>
      <div className="py-10 px-4">
        <div className="rounded-xl overflow-hidden max-w-[400px] bg-white">
          <img src={hero} />
          <div className="p-8">
            <h1 className="text-2xl font-bold text-[#1d2a4d] text-center">
              Order Summary
            </h1>
            <p className="mt-4 text-[#7d87a3] text-center">
              You can now listen to millions of songs, audiobooks, and podcasts
              on any device anywhere you like!
            </p>

            <div className="flex flex-wrap gap-x-6 gap-y-4 justify-center xs:justify-between items-center rounded-lg bg-[#f5f7ff] p-4 mt-4">
              <div className="flex gap-2 items-center content-center">
                <img src={iconMusic} />
                <div className="w-fit">
                  <h2 className="text-[#1d2a4d] font-bold text-lg">
                    Annual Plan
                  </h2>
                  <p className="text-[#7d87a3] text-sm">$59.99/Year</p>
                </div>
              </div>
              <p className="text-sm text-[#382ae1] underline font-semibold hover:text-[#766cf1] hover:cursor-pointer">
                Change
              </p>
            </div>

            <div>
              <button className="bg-[#382ae1] rounded-lg mt-7 w-full p-3 text-white font-medium text-sm hover:cursor-pointer hover:bg-[#766cf1]">
                Proceed to payment
              </button>
              <button className="font-semibold text-[#7d87a3] text-sm text-center w-full mt-4 hover:text-[#1d2a4d] hover:cursor-pointer">
                Cancel Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderSummaryCard;
