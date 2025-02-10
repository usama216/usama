import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";

const Splash = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 flex-wrap font-medium text-md lg:text-lg font-titleFont">
      MERN Stack Intern
        <span className="text-textGreen tracking-wide">@ Stampa Solutions</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Jan 2023 - April 2023
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          As a MERN Stack Intern at Stampa Solutions, I assisted in the development of full-stack web applications using MongoDB, Express.js, React.js, and Node.js.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          My tasks included building APIs, integrating front-end with back-end, and ensuring smooth functionality across applications.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          I collaborated with the development team to learn best practices and contribute to project goals.


        </li>
      </ul>
    </motion.div>
  );
};

export default Splash;
