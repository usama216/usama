import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const ReactBD = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-md lg:text-lg font-titleFont">
        Senior Software Engineer
        <span className="text-textGreen tracking-wide">
          @ Binary Brix Pvt Ltd
        </span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Nov 2024 - present
      </p>
      <p className="text-sm text-textDark">
        At Binary Brix Pvt Ltd, I work as a Senior Software Engineer, leading the development of high-quality, scalable, and modern web applications. My role involves collaborating with cross-functional teams, guiding junior developers, and ensuring that every product we deliver meets industry standards in performance, accessibility, and maintainability.
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Develop modern, performant, and maintainable codebases across multiple client and in-house projects.
        </li>


        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Lead the frontend architecture for SaaS platforms, marketplace applications, and AI-driven products.  </li>


        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Work extensively with JavaScript, TypeScript, React, Next.js, Node.js, Express, and related modern frameworks to build robust applications.  </li>

     <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Work across various platforms and ecosystems, including CMS systems, cloud deployments, analytics tools, and version control pipelines.
 </li>




        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Collaborate daily with designers, backend engineers, project managers, and QA teams to ensure seamless product delivery.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Review code, provide technical mentorship, and help junior developers improve their coding practices and problem-solving skills.
        </li>
      </ul>
    </motion.div>
  );
};

export default ReactBD;
