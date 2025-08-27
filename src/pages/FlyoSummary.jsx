import logo from "../assets/flyoSummary/logo.svg";
import doc from "../assets/flyoSummary/icon-document.svg";
import folder from "../assets/flyoSummary/icon-folder.svg";
import upload from "../assets/flyoSummary/icon-upload.svg";
import { Link } from "react-router-dom";

function DesktopChip() {
  return (
    <div className="p-4 absolute right-9 -top-10 bg-white rounded-lg shadow-md">
      <div className="flex gap-1 items-center text-black">
        <h2 className="text-black font-semibold text-3xl">185</h2>
        <p className="text-[#8a8ea0] text-xs font-medium">GB LEFT</p>
      </div>
      <div
        class="w-0 h-0 absolute -bottom-4 right-0
            border-b-[25px] border-b-transparent 
            border-r-[25px] border-r-white"
      ></div>
    </div>
  );
}

function MobileChip() {
  return (
    <div className="p-3 absolute -bottom-8 left-1/2 -translate-x-1/2 bg-white rounded-lg shadow-md">
      <div className="flex gap-1 items-center text-black">
        <h2 className="text-black font-semibold text-3xl">185</h2>
        <p className="text-[#8a8ea0] text-xs font-medium">GB LEFT</p>
      </div>
    </div>
  );
}

function FlyoSummary() {
  return (
    <div
      className={`relative h-[100vh] w-full grid place-items-center bg-[#0c122c] bg-[url(/bg-flyo-mobile.png)] large:bg-[url(/bg-flyo-deskop.png)] bg-cover bg-no-repeat large:bg-bottom large:bg-[length:100%_50%]`}
    >
      <Link
        to="/"
        className="text-white p-2 flex gap-1 items-center absolute top-8 left-0 sm:left-10 hover:cursor-pointer"
      >
        <span class="material-symbols-rounded">arrow_back</span> <p>Back</p>
      </Link>
      <div className="px-4 py-10">
        <div className="flex gap-7 flex-col large:flex-row large:items-end">
          {/* --left-- */}
          <div className="self-start shadow-md bg-[#1e2c69] rounded-xl rounded-tr-[100px] py-10 pl-8 pr-30">
            <img src={logo} alt="logo" />
            <div className="mt-7 grid grid-cols-3 gap-4">
              <div className="p-[12px] bg-[#0c122c] rounded-md grid place-items-center">
                <img src={doc} alt="document" />
              </div>
              <div className="p-[12px] bg-[#0c122c] rounded-md grid place-items-center">
                <img src={folder} alt="folder" />
              </div>
              <div className="p-[12px] bg-[#0c122c] rounded-md grid place-items-center">
                <img src={upload} alt="upload" />
              </div>
            </div>
          </div>
          {/* --left-- */}

          {/* --right-- */}
          <div className="relative sm:min-w-xl shadow-md p-9 bg-[#1e2c69] rounded-xl text-white">
            <p className="text-[#8c8f99]">
              You've used{" "}
              <span className="text-[#e7e6ff] font-semibold">815 GB</span> of
              your storage
            </p>

            <div className="mt-5 rounded-full w-full bg-[#151e49] p-[3px]">
              <div className="relative rounded-full h-4 w-[75%] bg-[linear-gradient(to_right,_#f9b3aa,_#ec4b83)]">
                <div className="absolute right-[2px] top-1/2 -translate-y-1/2 h-3 w-3 bg-white rounded-full"></div>
              </div>
            </div>
            <div className="mt-2 text-[#e7e6ff] flex justify-between items-center text-sm">
              <div>0 GB</div>
              <div>1000 GB</div>
            </div>

            <div className="hidden large:block">
              <DesktopChip />
            </div>
            <div className="block large:hidden">
              <MobileChip />
            </div>
          </div>
          {/* --right-- */}
        </div>
      </div>
    </div>
  );
}

export default FlyoSummary;
