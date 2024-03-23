import React from "react";

import { motion } from "framer-motion";
import { TypingText } from "../../utils/customtext";
import { staggerContainer, fadeIn } from "../../utils/motion";
import dollar from "../../assets/liquidity.png";
import eth from "../../assets/eth.png";
import { Button } from "../../components/ui/buttons/Button";

export default function LiquidityProvisioning() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="w-full mt-[1.5%] bg-[#090B18] relative z-10 sm:pt-[5%] py-0"
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="  relative z-10 grid lg:grid-cols-2 grid-cols-1 space-y-32 md:space-y-0  items-center justify-center   lg:h-screen h-min md:px-[4%] px-[6%]">
          <div className="col-span-1">
            <motion.div
              variants={fadeIn("left", "tween", 0.2, 1)}
              className="flex  flex-col items-start text-[#FAFAFACC] flex-1 gap-4"
            >
              <div className=" text-2xl ">
                <TypingText title="Liquidity Provisioning" />
              </div>
              <h2 className="sm:text-[48px] text-2xl font-extrabold leading-[1.1]">
                Earn by Providing <br className="md:flex hidden" /> Liquidity
              </h2>

              <p className="sm:text-lg text-base">
                Earn a higher yield by providing liquidity through GammaSwap.
                <br className="md:flex hidden" />
                Think of our wrapped pools like wrapped tokens.
              </p>
              <p className="md:text-lg text-base mt-6 mb-3">
                The GammaSwap protocol will directly deposit liquidity into{" "}
                <br className="md:flex hidden" />
                the underlying AMM and provide an LP token to the depositor
                <br className="md:flex hidden" />
                representing the position.
              </p>
              <Button variant="secondary">Learn More </Button>
            </motion.div>
          </div>
          <div className=" col-span-1  sm:mt-0 ">
            <motion.div className="relative  ">
              <motion.img
                animate={{
                  y: "-20%",
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "mirror",
                }}
                className="w-[500px]"
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
                src={eth}
                alt="eth"
                className="w-[250px] absolute -top-[25%] right-[20%]"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
