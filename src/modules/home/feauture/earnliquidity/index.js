import React from "react";
import earn from "../../assets/erann.png";
import bg from "../../assets/earn.png";
import { motion } from "framer-motion";
import { TypingText } from "../../utils/customtext";
import { staggerContainer, fadeIn, planetVariants } from "../../utils/motion";
export default function EarnLiquidity() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="bg-[#090B18]  h-screen     relative z-10"
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="grid sm:grid-cols-2 h-full grid-cols-1 w-full items-center pl-[4%] py-14">
          <div className="col-span-1 w-full ">
            <motion.div
              variants={fadeIn("left", "tween", 0.2, 1)}
              className="flex  flex-col text-[#FAFAFACC] flex-1 gap-4"
            >
              <div className=" text-2xl ">
                <TypingText title="Multiple AMMs" />
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
          <div className="col-span-1 w-full">
            <div
              style={{
                background: `url(${bg})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                width: "100%",
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <motion.div variants={planetVariants("right")} className="">
                <img src={earn} className="rotate" alt="earn" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
