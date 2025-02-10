import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";
const Google = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 flex-wrap font-medium text-md lg:text-lg font-titleFont">
      Associate Software Engineer
        <span className="text-textGreen tracking-wide">
          @ Moshlay Creatives
        </span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Jul 2024 - Nov 2024
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          At Moshlay Creatives, I contributed to the development of innovative
          web applications, collaborating closely with cross-functional teams to
          design and implement scalable solutions.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          I actively participated in code reviews, troubleshooting complex bugs,
          and implementing improvements based on feedback. Additionally, I
          worked on performance optimization, ensuring that applications were
          both fast and responsive.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          This experience provided me with hands-on exposure to real-world
          software development practices and strengthened my problem-solving
          skills.
        </li>
      </ul>
    </motion.div>
  );
};

export default Google;
