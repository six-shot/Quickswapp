import React from "react";
import { TypingText } from "../../utils/customtext";
import { motion } from "framer-motion";
import rocket from "../../assets/3dicons.png";
import dollar from "../../assets/dollar.png";
import coins from "../../assets/coins.png";

export default function LongVolatilty() {
  return (
    <div className="bg-[#090B18] h-screen flex justify-center items-center relative z-10 overflow-hidden">
      <div className="max-w-[1440px] mx-auto w-full">
        <div className="grid md:grid-cols-2 items-center  px-[4%] py-6 md:py-14 w-full">
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
          <div className="col-span-1">
            <div className="flex flex-col text-[#FAFAFACC]">
              <div className=" text-2xl ">
                <TypingText title="Liquidity Provisioning" />
              </div>
              <h2 className="text-[48px] font-extrabold leading-[1.1]">
                Earn by Providing <br /> Liquidity
              </h2>
              <p className="text-lg">
                Earn a higher yield by providing liquidity through GammaSwap.
                <br />
                Think of our wrapped pools like wrapped tokens.
              </p>
              <p className="text-lg mt-6">
                The GammaSwap protocol will directly deposit liquidity into{" "}
                <br /> the underlying AMM and provide an LP token to the
                depositor
                <br />
                representing the position.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
