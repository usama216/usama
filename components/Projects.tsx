import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import SectionTitle from "./SectionTitle";
import { projects } from "@/data/projects";

const Projects = () => {
  const [visibleCount, setVisibleCount] = useState(3);
  const router = useRouter();

  const handleProjectClick = (id: number) => {
    router.push(`/portfolio/${id}`);
  };

  const handleViewMore = () => {
    router.push("/portfolio");
  };

  return (
    <section id="project" className="max-w-container mx-auto lgl:px-20 py-24">
      <SectionTitle title="Some Things I Have Built" titleNo="03" />
      <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
        {projects?.slice(0, visibleCount)?.map((project, index) => (
          <div
            key={project.id}
            className={`flex flex-col xl:flex-row ${
              index % 2 !== 0 ? "xl:flex-row-reverse" : ""
            } gap-6`}
          >
            <div
              className="w-full xl:w-1/2 h-auto relative group cursor-pointer"
              onClick={() => handleProjectClick(project.id)}
            >
              <div>
                <Image
                  className="w-full h-full object-contain"
                  src={project.image}
                  alt={project.title}
                />
                <div className="absolute w-full h-full rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
              </div>
            </div>
            <div className="w-full xl:w-1/2 flex flex-col gap-6 justify-between items-end text-right z-10">
              <div>
                <p className="font-titleFont text-textGreen text-sm tracking-wide">
                  Featured Project
                </p>
                <h3 className="text-2xl font-bold">{project.title}</h3>
              </div>
              <div className="text-sm md:text-base bg-[#112240] p-2 md:p-6 rounded-md text-justify">
                <p>{project.description}</p>
                <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between flex-wrap mt-3 text-textDark">
                  {project?.technologies?.map((tech, i) => (
                    <li key={i}>{tech}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}

        {visibleCount < projects.length && (
          <button
            onClick={handleViewMore}
            className="w-40 h-14 border border-textGreen mt-6 font-titleFont text-sm text-textGreen tracking-wider rounded-md hover:bg-hoverColor duration-300"
          >
            View More
          </button>
        )}
      </div>
    </section>
  );
};

export default Projects;
