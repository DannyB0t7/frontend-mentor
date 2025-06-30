import React from "react";
import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import { PROJECTS } from "../../projects";

function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="px-4 max-w-6xl m-auto">
        <nav className="py-6 flex gap-3 items-center">
          <img src="/favicon-32x32.png" className="w-[30px] h-[30px]" />
          <h1 className="text-2xl font-medium">Frontend Mentor</h1>
        </nav>
      </div>

      <div className="border-b-1 border-t-1 border-white/15">
        <div className="px-4 max-w-6xl m-auto">
          <div className="border-l-1 border-r-1 border-white/15 p-4 w-fit">
            Challenges
          </div>
        </div>
      </div>

      <div className="px-4 max-w-6xl m-auto">
        <div className="py-10 grid-container">
          {PROJECTS.map((project, key) => (
            <ProjectCard project={project} key={key} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
