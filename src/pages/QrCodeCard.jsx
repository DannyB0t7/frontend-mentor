import code from "../assets/qrCode/image-qr-code.png";
import { Link } from "react-router-dom";

function QrCodeCard() {
  return (
    <div className="h-[100vh] w-full bg-[#dce6f0] grid place-items-center relative">
      <Link
        to="/"
        className="p-2 flex gap-1 items-center absolute top-8 left-0 sm:left-10 hover:cursor-pointer"
      >
        <span class="material-symbols-rounded">arrow_back</span> <p>Back</p>
      </Link>
      <div className="py-10 px-4">
        <div className="rounded-xl max-w-[300px] p-4 bg-white shadow">
          <div className="overflow-hidden rounded-lg">
            <img src={code} className="" />
          </div>
          <p className="font-semibold text-[#1b263f] text-center text-xl mt-5">
            Improve your front-end skills by building projects
          </p>
          <p className="text-sm text-[#6f7682] text-center mt-3 mb-5">
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </div>
    </div>
  );
}

export default QrCodeCard;
