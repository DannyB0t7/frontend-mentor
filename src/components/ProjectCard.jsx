import { Link } from "react-router-dom";

function ProjectCard({ project }) {
  return (
    <div className="border border-white/15 overflow-hidden rounded-xl">
      <div className="max-w-xl w-100% overflow-hidden">
        <Link to={project.route}>
          <img
            src={project.image}
            className="hover:scale-105 hover:cursor-pointer transition ease-in-out"
          />
        </Link>
      </div>
      <div className="p-7">
        <h1 className="text-xl hover:underline hover:cursor-pointer w-fit">
          <Link to={project.route} className="w-fit">
            {project.projectName}
          </Link>
        </h1>

        <div className="mt-4 flex gap-2 items-center justify-between flex-wrap">
          <div className="flex gap-2 font-bold">
            <p className="text-[#6abecd]">HTML</p>
            <p className="text-[#3e54a3]">CSS</p>
          </div>
          <div className="flex text-xs font-medium border border-[#6abecd] rounded-sm overflow-hidden">
            <div className="py-1 px-3 bg-[#6abecd]">1</div>
            <div className="py-1 px-4 my-auto">Newbie</div>
          </div>
        </div>
        <p className="mt-3 text-gray-300 text-sm">{project.desc}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
