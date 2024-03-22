import React from "react";
import { TypingText } from "../../utils/customtext";
import { motion } from "framer-motion";
import rocket from "../../assets/3dicons.png";
import dollar from "../../assets/dollar.png";
import coins from "../../assets/coins.png";
import { staggerContainer, fadeIn } from "../../utils/motion";

export default function LongVolatilty() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="bg-[#090B18] h-screen flex justify-center items-center relative z-10 overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto w-full">
        <div className="  bg-[#FF630B] z-10 absolute w-[400px] h-[400px] rounded-[400px] blur-[150px]  bottom-0 left-0" />
        <div className="grid sm:grid-cols-2 grid-cols-1 items-center  px-[4%]  w-full">
          <div className="relative col-span-1 ">
            <motion.div
              style={{ position: "absolute", top: "-15%", left: "5%" }}
            ></motion.div>
            <motion.div
              // animate={{
              //   y: "-20%",
              // }}
              // transition={{
              //   duration: 2,
              //   repeat: Infinity,
              //   repeatType: "mirror",
              // }}
              className="relative "
            >
              <motion.img
                animate={{
                  y: "-20%",
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "mirror",
                }}
                src={rocket}
                alt="dollar"
                className="absolute -top-[30%] right-[10%]"
              />
              <motion.img
                animate={{
                  y: "-20%",
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "mirror",
                }}
                src={dollar}
                alt="dollar"
              />
              <motion.img
                animate={{
                  y: "-20%",
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "mirror",
                }}
                src={coins}
                alt="dollar"
                className="absolute bottom-0 right-[15%]"
              />
            </motion.div>
          </div>
          <div className="col-span-1 order-first sm:order-last ">
            <motion.div
              variants={fadeIn("right", "tween", 0.2, 1)}
              className="flex flex-col text-[#FAFAFACC]"
            >
              <div className=" text-2xl ">
                <TypingText title="Perpetuals" />
              </div>
              <h2 className="text-[48px] font-extrabold leading-[1.1]">
                Long Volatility
              </h2>
              <p className="text-lg">
                Turn Impermanent Loss into Impermanent Gain. Get perpetaul
                <br />
                volatility exposure on any asset in the form of a long, short or
                <br />
                straddle. Unlike perpetual futures, liquidations are time
                <br />
                dependent - protecting traders from unexpected price movements.
              </p>
              <p className="text-lg mt-6">
                GammaSwap perpetuals are fully collateralized offering<br/>
                non-linear returns that increase as price changes.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
