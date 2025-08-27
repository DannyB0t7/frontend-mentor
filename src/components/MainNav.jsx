import { Link } from "react-router-dom";

function MainNav() {
  return (
    <div className="bg-black text-white">
      <div className="px-4 max-w-6xl m-auto">
        <Link to="/">
          <nav className="py-6 flex gap-3 items-center w-fit">
            <img src="/favicon-32x32.png" className="w-[30px] h-[30px]" />
            <h1 className="text-2xl font-medium">Frontend Mentor</h1>
          </nav>
        </Link>
      </div>

      <div className="border-b-1 border-t-1 border-white/15">
        <div className="px-4 max-w-6xl m-auto">
          <div className="border-l-1 border-r-1 border-white/15 p-4 w-fit">
            Challenges
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainNav;
