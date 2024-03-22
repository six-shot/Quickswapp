import React from "react";

import { motion } from "framer-motion";
import { TypingText } from "../../utils/customtext";
import { staggerContainer, fadeIn } from "../../utils/motion";
import rocket from "../../assets/3dicons.png";
import dollar from "../../assets/dollar.png";
import coins from "../../assets/coins.png";
import { Button } from "../../components/ui/buttons/Button";
export default function LongVolatilty() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="w-full  bg-[#090B18] relative z-10 sm:py-[2%] py-0"
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="  relative z-10 grid sm:grid-cols-2 grid-cols-1 space-y-32  items-center justify-center sm:h-screen h-min px-[4%]">
          <div className="col-span-1">
            <motion.div
              variants={fadeIn("left", "tween", 0.2, 1)}
              className="flex  flex-col items-start text-[#FAFAFACC] flex-1 gap-4"
            >
              <div className=" text-2xl ">
                <TypingText title="Liquidity Provisioning" />
              </div>
              <h2 className="sm:text-[48px] text-2xl font-extrabold leading-[1.1]">
                Earn by Providing <br className="sm:flex hidden" /> Liquidity
              </h2>

              <p className="sm:text-lg text-base">
                Earn a higher yield by providing liquidity through GammaSwap.
                <br className="sm:flex hidden" />
                Think of our wrapped pools like wrapped tokens.
              </p>
              <p className="sm:text-lg text-base mt-6 mb-3">
                The GammaSwap protocol will directly deposit liquidity into{" "}
                <br className="sm:flex hidden" />
                the underlying AMM and provide an LP token to the depositor
                <br className="sm:flex hidden" />
                representing the position.
              </p>
              <Button variant="secondary">Learn More </Button>
            </motion.div>
          </div>
          <div className=" col-span-1 sm:mt-0 ">
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
        </div>
      </div>
    </motion.div>
  );
}
