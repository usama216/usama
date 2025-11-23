import { useRouter } from "next/router";
import Image from "next/image";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";
import { projects } from "@/data/projects";
import { motion } from "framer-motion";

export default function Portfolio() {
  const router = useRouter();

  const handleProjectClick = (id: number) => {
    router.push(`/portfolio/${id}`);
  };

  return (
    <>
      <Head>
        <title>Portfolio - Usama Jawad</title>
        <meta name="description" content="Portfolio projects by Usama Jawad" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <main className="w-full min-h-screen font-bodyFont bg-bodyColor text-textLight">
        <Navbar />
        <section className="max-w-container mx-auto lgl:px-20 py-24">
          <SectionTitle title="My Projects" titleNo="03" />
          <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
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
              </motion.div>
            ))}
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}

