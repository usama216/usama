import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { projects } from "@/data/projects";
import { motion, AnimatePresence } from "framer-motion";
import { TiArrowBack } from "react-icons/ti";
import { RxOpenInNewWindow } from "react-icons/rx";
import { TiArrowForward } from "react-icons/ti";
import { MdClose } from "react-icons/md";

export default function ProjectDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [imageLoadingStates, setImageLoadingStates] = useState<{
    [key: number]: boolean;
  }>({});

  const project = projects.find((p) => p.id === Number(id));

  const handleImageLoad = (index: number) => {
    setImageLoadingStates((prev) => ({ ...prev, [index]: true }));
  };

  const handleImageError = (index: number) => {
    setImageLoadingStates((prev) => ({ ...prev, [index]: false }));
  };

  const openImageModal = (img: string) => {
    setSelectedImage(img);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  if (!project) {
    return (
      <>
        <Head>
          <title>Project Not Found - Usama Jawad</title>
        </Head>
        <main className="w-full min-h-screen font-bodyFont bg-bodyColor text-textLight flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
            <button
              onClick={() => router.push("/portfolio")}
              className="text-textGreen hover:underline"
            >
              Back to Portfolio
            </button>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>{project.title} - Usama Jawad</title>
        <meta name="description" content={project.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <main className="w-full min-h-screen font-bodyFont bg-bodyColor text-textLight">
        <Navbar />
        <div className="max-w-container mx-auto px-4 py-24">
         



          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {project.title}
            </h1>
            <p className="text-lg text-textDark mb-8">{project.description}</p>

            {/* Project Link */}
            {project.link && project.link !== "#" && (
              <div className="mb-8">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-textGreen text-bodyColor rounded-md hover:bg-textGreen/80 transition-colors font-semibold"
                >
                  Visit Project
                  <RxOpenInNewWindow className="text-lg" />
                </a>
              </div>
            )}

            {/* Technologies */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-4 text-textGreen">
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-[#112240] rounded-md text-sm border border-textDark/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>


            </motion.div>

          {/* Main Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <div className="relative w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Project Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-12"
          >
           

            {/* Overview */}
            {project.overview && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mb-12"
              >
                <h3 className="text-2xl font-semibold mb-4 text-textGreen">
                  Project Overview
                </h3>
                <div className="bg-[#112240] p-6 rounded-lg">
                  <p className="text-base leading-relaxed text-textLight">
                    {project.overview}
                  </p>
                </div>
              </motion.div>
            )}

            {/* Features */}
            {project.features && project.features.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mb-12"
              >
                <h3 className="text-2xl font-semibold mb-4 text-textGreen">
                  Key Features
                </h3>
                <div className="bg-[#112240] p-6 rounded-lg">
                  <ul className="space-y-3">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex gap-3 items-start">
                        <span className="text-textGreen mt-1 flex-shrink-0">
                          <TiArrowForward />
                        </span>
                        <span className="text-base text-textLight">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}

            {/* Challenges */}
            {project.challenges && project.challenges.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="mb-12"
              >
                <h3 className="text-2xl font-semibold mb-4 text-textGreen">
                  Challenges Faced
                </h3>
                <div className="bg-[#112240] p-6 rounded-lg">
                  <ul className="space-y-3">
                    {project.challenges.map((challenge, i) => (
                      <li key={i} className="flex gap-3 items-start">
                        <span className="text-textGreen mt-1 flex-shrink-0">
                          <TiArrowForward />
                        </span>
                        <span className="text-base text-textLight">
                          {challenge}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}

            {/* Solutions */}
            {project.solutions && project.solutions.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="mb-12"
              >
                <h3 className="text-2xl font-semibold mb-4 text-textGreen">
                  Solutions Implemented
                </h3>
                <div className="bg-[#112240] p-6 rounded-lg">
                  <ul className="space-y-3">
                    {project.solutions.map((solution, i) => (
                      <li key={i} className="flex gap-3 items-start">
                        <span className="text-textGreen mt-1 flex-shrink-0">
                          <TiArrowForward />
                        </span>
                        <span className="text-base text-textLight">
                          {solution}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}

            {/* Role */}
            {project.role && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="mb-12"
              >
                <h3 className="text-2xl font-semibold mb-4 text-textGreen">
                  My Role
                </h3>
                <div className="bg-[#112240] p-6 rounded-lg">
                  <p className="text-base leading-relaxed text-textLight">
                    {project.role}
                  </p>
                </div>
              </motion.div>
            )}
          </motion.div>

          {/* Additional Images */}
          {project.images && project.images.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="text-2xl font-bold mb-6 text-textGreen">
                Project Screenshots
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.images.map((img, index) => (
                  <div
                    key={index}
                    className="relative w-full h-[300px] rounded-lg overflow-hidden group bg-[#112240] cursor-pointer"
                    onClick={() => {
                      if (imageLoadingStates[index]) {
                        openImageModal(img);
                      }
                    }}
                  >
                    {/* Loader */}
                    {!imageLoadingStates[index] && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-textGreen"></div>
                      </div>
                    )}

                    {/* Image */}
                    <Image
                      src={img}
                      alt={`${project.title} screenshot ${index + 1}`}
                      fill
                      className={`object-cover object-top transition-all duration-300 ${
                        imageLoadingStates[index]
                          ? "opacity-100 group-hover:scale-110"
                          : "opacity-0"
                      }`}
                      style={{ objectPosition: "top" }}
                      onLoad={() => handleImageLoad(index)}
                      onError={() => handleImageError(index)}
                    />

                    {/* Overlay on hover */}
                    {imageLoadingStates[index] && (
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="bg-textGreen/80 text-bodyColor px-4 py-2 rounded-md text-sm font-semibold">
                            Click to View
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Image Modal */}
          <AnimatePresence>
            {selectedImage && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
                onClick={closeImageModal}
              >
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  className="relative max-w-7xl max-h-[90vh] w-full h-full"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    onClick={closeImageModal}
                    className="absolute top-4 right-4 z-10 bg-textGreen text-bodyColor p-2 rounded-full hover:bg-textGreen/80 transition-colors"
                  >
                    <MdClose className="text-2xl" />
                  </button>
                  <div className="relative w-full h-full">
                    <Image
                      src={selectedImage}
                      alt="Project screenshot"
                      fill
                      className="object-contain"
                    />
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <Footer />
      </main>
    </>
  );
}

