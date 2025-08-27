import ProjectCard from "../components/ProjectCard";
import { PROJECTS } from "../../projects";
import MainNav from "../components/MainNav";

function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <MainNav />
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
