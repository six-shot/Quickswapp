import { motion } from "framer-motion";
import { textContainer, textVariant2 } from "../motion";

export const TypingText = ({ title }) => (
  <motion.p
    className="sm:text-[20px] text-[12px]"
    variants={textContainer}
    initial="hidden"
    whileInView="show"
  >
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === "" ? "\u00A0" : letter}
      </motion.span>
    ))}
  </motion.p>
);

export const TitleText = ({ title }) => (
  <motion.h2
    className=" sm:text-[64px] text-[30px] font-bold mt-[8px] sm:leading-[60px] leading-[47px]"
    variants={textVariant2}
  >
    {title}
  </motion.h2>
);
