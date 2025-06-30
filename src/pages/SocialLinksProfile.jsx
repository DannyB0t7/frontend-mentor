import React from "react";
import profile from "../assets/socialLinkProfile/avatar-jessica.jpeg";
import { Link } from "react-router-dom";

const socials = [
  "Github",
  "Frontend Mentor",
  "Linkedin",
  "Twitter",
  "Instagram",
];

function SocialLinksProfile() {
  return (
    <div className="bg-[#141414] w-full h-[100vh] grid place-items-center text-white relative">
      <Link
        to="/"
        className="p-2 flex gap-1 items-center absolute top-8 left-0 sm:left-10 hover:cursor-pointer"
      >
        <span class="material-symbols-rounded">arrow_back</span> <p>Back</p>
      </Link>
      <div className="py-10 px-4">
        <div className="p-8 rounded-xl bg-[#1f1f1f] w-full sm:min-w-sm sm:w-fit">
          <div className="flex flex-col items-center gap-6 text-center">
            <div>
              <img src={profile} className="h-28 w-28 rounded-full"></img>
            </div>
            <div>
              <h2 className="text-2xl font-semibold">Jessica Randall</h2>
              <p className="text-[#c7f23c] font-medium text-sm mt-2">
                London, United Kingdom
              </p>
            </div>
          </div>
          <div className="mt-6">
            <p className="text-center text-slate-300 text-sm">
              "Frontend developer and avid reader."
            </p>
            <div className="flex flex-col gap-3 pt-5">
              {socials.map((social) => (
                <SocialBadge>{social}</SocialBadge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const SocialBadge = function ({ children }) {
  return (
    <div className="p-3 bg-[#333333] rounded-md hover:bg-[#c7f23c] hover:text-black cursor-pointer text-center font-medium">
      {children}
    </div>
  );
};

export default SocialLinksProfile;
