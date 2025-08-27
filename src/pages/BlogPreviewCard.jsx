import { Link } from "react-router-dom";
import background from "../assets/blogPreviewCard/illustration-article.svg";
import avatar from "../assets/blogPreviewCard/image-avatar.webp";

function BlogPreviewCard() {
  return (
    <div className="bg-[#f4d04e] h-[100vh] w-full grid place-items-center relative">
      <Link
        to="/"
        className="p-2 flex gap-1 items-center absolute top-8 left-0 sm:left-10 hover:cursor-pointer"
      >
        <span class="material-symbols-rounded">arrow_back</span> <p>Back</p>
      </Link>
      <div className="py-10 px-4">
        <div className="bg-white border rounded-xl p-5 max-w-[370px]">
          <div className="rounded-lg overflow-hidden">
            <img src={background} className="h-full w-full"></img>
          </div>

          <div className="bg-[#f4d04e] p-2 rounded-md mt-6 w-fit font-semibold text-sm">
            Learning
          </div>
          <p className="mt-3 text-sm font-medium">Published 21 Dec 2023</p>
          <h1 className="my-4 text-2xl font-bold hover:text-[#f4d04e] hover:cursor-pointer">
            HTML & CSS foundation
          </h1>
          <p className=" text-[#6b6b6b] text-sm">
            These languages are the backbone of every website, defining,
            structure, content, and presentation.
          </p>

          <div className="flex items-center gap-3 mt-4">
            <img src={avatar} className="h-[40px] w-[40px]" />
            <p className="text-sm font-semibold">Greg Hooper</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogPreviewCard;
