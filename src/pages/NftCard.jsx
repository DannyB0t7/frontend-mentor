import React, { useState } from "react";
import equilibrium from "../assets/nftCard/image-equilibrium.jpg";
import avatar from "../assets/nftCard/image-avatar.png";
import iconView from "../assets/nftCard/icon-view.svg";
import iconEthereum from "../assets/nftCard/icon-ethereum.svg";
import iconClock from "../assets/nftCard/icon-clock.svg";
import { Link } from "react-router-dom";

function NftCard() {
  const [view, setView] = useState(false);

  const mouseOverHandler = function () {
    setView(true);
  };

  const mouseOutHandler = function () {
    setView(false);
  };
  return (
    <div className="min-h-screen w-full bg-[#0d1a2b] grid place-items-center relative">
      <Link
        to="/"
        className="text-white p-2 flex gap-1 items-center absolute top-8 left-0 sm:left-10 hover:cursor-pointer"
      >
        <span class="material-symbols-rounded">arrow_back</span> <p>Back</p>
      </Link>
      <div className="py-10 px-4">
        <div className="bg-[#12263a] rounded-xl p-4 max-w-[300px] text-white">
          <div
            className="rounded-lg overflow-hidden relative"
            onMouseOver={mouseOverHandler}
            onMouseOut={mouseOutHandler}
          >
            <img src={equilibrium} />
            {view && (
              <div className="absolute inset-0 bg-[#00fff080] grid place-items-center z-10 hover:cursor-pointer">
                <img src={iconView} />
              </div>
            )}
          </div>

          <div className="mt-5 flex flex-col gap-4">
            <h1 className="hover:text-[#00fff0] hover:cursor-pointer text-xl font-medium">
              Equilibrium #3429
            </h1>
            <p className="text-slate-400">
              Our Equilibruim collection promotes balance and calm
            </p>
            <div className="flex justify-between items-center flex-wrap gap-2">
              <div className="flex gap-2 items-center text-[#00fff0] text-sm font-medium">
                <img src={iconEthereum} className="h-[17px] w-[10px]" />
                <p>0.0041 ETH</p>
              </div>
              <div className="flex gap-2 items-center text-sm">
                <img src={iconClock} className="h-[17px] w-[17px]" />
                <p className="text-slate-400">3 days left</p>
              </div>
            </div>
          </div>

          <div className="border-b-1 border-white/20 rounded-full my-5" />

          <div className="flex mb-3 gap-3 items-center flex-wrap">
            <img
              src={avatar}
              className="h-[40px] w-[40px] border-2 border-white rounded-full"
            />
            <p className="text-sm">
              <span className="text-slate-400">Creation of </span>
              <span className="hover:text-[#00fff0] hover:cursor-pointer">
                Jules Wyvern
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NftCard;
