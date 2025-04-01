import { useState } from "react";
import Image from "next/image";
import SectionTitle from "./SectionTitle";
import {
  amazonImg,
  cyberImg,
  khatribrothers,
  moodymoonhemp,
  noorShop,
  remcosol,
  safari,
  techprodev,
  twinlime,
} from "@/public/assets";

const projects = [
  {
    id: 1,
    title: "Book Dubai Safari",
    description:
      "Developed Book Dubai Safari, a web platform for booking safari trips in Dubai using React.js (frontend) and Laravel (backend). Integrated Stripe for secure online payments and implemented a seamless booking experience. Optimized performance and user experience with efficient state management and API handling.",
    image: safari,
    link: "https://bookdubaisafari.com/",
    technologies: [
      "React.js",
      "JavaScript",
      "Material UI",
      "Stripe",
      "Redux Toolkit",
    ],
  },
  {
    id: 2,
    title: "Moody Moon Hemp",
    description:
      "Built Moody Moon Hemp, an online store for hemp-based products with React.js on the frontend and Node.js powering the backend. Implemented Stripe for seamless transactions and enhanced the user experience with intuitive navigation. Optimized API performance and improved site visibility through SEO best practices.",
    image: moodymoonhemp,
    link: "https://moodymoonhemp.com/",
    technologies: [
      "React.js",
      "JavaScript",
      "Material UI",
      "Stripe",
      "Redux Toolkit",
    ],
  },
  {
    id: 3,
    title: "Khatri Brothers Academy",
    description:
      "Developed Khatri Brothers Academy, an online music learning platform with Node.js and Express.js for the backend and React.js for the frontend. Designed a role-based system for Admin, Instructors, and Students, enabling seamless course management. Integrated Stripe for secure payments and optimized API performance for a smooth user experience.",
    image: khatribrothers,
    link: "https://www.khatribrothersacademy.com/",
    technologies: ["React.js", "JavaScript", "Material UI", "Redux Toolkit"],
  },
  {
    id: 4,
    title: "Tech Pro Dev",
    description:
      "Developed Tech Pro Dev, a professional company website showcasing services and expertise using React.js. Designed a responsive and modern UI for an engaging user experience. Optimized performance, SEO, and backend functionality for seamless navigation and lead generation.",
    image: techprodev,
    link: "#",
    technologies: ["React.js", "JavaScript", "Material UI", "Redux Toolkit"],
  },
  // {
  //   id: 5,
  //   title: "RemcoSol Tech",
  //   description:
  //     "Developed RemcoSol Tech, a professional company website showcasing services and expertise using React.js. Designed a responsive and modern UI for an engaging user experience. Optimized performance, SEO, and backend functionality for seamless navigation and lead generation.",
  //   image: remcosol,
  //   link: "https://remcosol.com/",
  //   technologies: ["React.js", "JavaScript", "Material UI", "Redux Toolkit"],
  // },
  {
    id: 5,
    title: "Twinlime",
    description:
      "Twinlime is a leading distributor in the market Turkmenistan, specializing in the supply high-quality food additives for various industries food and beverage industry",
    image: twinlime,
    link: "https://twinlime.vercel.app/",
    technologies: [
      "React.js",
      "JavaScript",
      "Tailwind CSS",
      "Stripe",
      "Redux Toolkit",
    ],
  },
];

const Projects = () => {
  const [visibleCount, setVisibleCount] = useState(3);

  const showMoreProjects = () => {
    setVisibleCount((prevCount) => prevCount + 3);
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
            <a
              className="w-full xl:w-1/2 h-auto relative group"
              href={project.link}
              target="_blank"
            >
              <div>
                <Image
                  className="w-full h-full object-contain"
                  src={project.image}
                  alt={project.title}
                />
                <div className="absolute w-full h-full rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
              </div>
            </a>
            <div className="w-full xl:w-1/2 flex flex-col gap-6 justify-between items-end text-right z-10">
              <div>
                <p className="font-titleFont text-textGreen text-sm tracking-wide">
                  Featured Project
                </p>
                <h3 className="text-2xl font-bold">{project.title}</h3>
              </div>
              <p className="text-sm md:text-base bg-[#112240] p-2 md:p-6 rounded-md text-justify">
                {project.description}
                <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between flex-wrap mt-3 text-textDark">
                  {project?.technologies?.map((tech, i) => (
                    <li key={i}>{tech}</li>
                  ))}
                </ul>
              </p>
            </div>
          </div>
        ))}

        {visibleCount < projects.length && (
          <button
            onClick={showMoreProjects}
            className="w-40 h-14 border border-textGreen mt-6 font-titleFont text-sm text-textGreen tracking-wider rounded-md hover:bg-hoverColor duration-300"
          >
            See More
          </button>
        )}
      </div>
    </section>
  );
};

export default Projects;
