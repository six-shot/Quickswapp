import React from "react";

import { motion } from "framer-motion";
import { TypingText } from "../../utils/customtext";
import { staggerContainer,fadeIn } from "../../utils/motion";
import dollar from "../../assets/dollar.png";

export default function LiquidityProvisioning() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="w-full mt-[1.5%] bg-[#090B18] relative z-10 "
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="  relative z-10 grid grid-cols-2 items-center justify-center  py-14 h-screen px-[4%]">
          <div className="col-span-1">
            <motion.div
              variants={fadeIn("left", "tween", 0.2, 1)}
              className="flex  flex-col text-[#FAFAFACC] flex-1 gap-4"
            >
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
            </motion.div>
          </div>
          <div className="col-span-1">
            <motion.div
              animate={{
                y: "-20%",
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "mirror",
              }}
            >
              <img src={dollar} alt="dollar" />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
