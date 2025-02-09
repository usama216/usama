import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";

const Apple = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Associate Software Engineer
        <span className="text-textGreen tracking-wide">@ Saeedan Technologies</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        April 2023 - Jul 2024
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          At Saeedan Technologies, I worked on developing and maintaining web applications using React.js and other modern technologies.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          I was responsible for creating responsive, user-friendly interfaces and optimizing application performance. 
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          My role involved collaborating with team members to troubleshoot issues and implement new features, improving overall product quality and user experience.
        </li>
      </ul>
    </motion.div>
  );
};

export default Apple;
