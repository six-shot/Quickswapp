import React from "react";
import earn from "../../assets/erann.png";
import bg from "../../assets/earn.png";
import { motion } from "framer-motion";
import { TypingText } from "../../utils/customtext";
import { staggerContainer, fadeIn, planetVariants } from "../../utils/motion";
import { Button } from "../../components/ui/buttons/Button";
export default function EarnLiquidity() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="w-full  bg-[#090B18] relative z-10 sm:py-[2%] py-0"
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="  relative z-10 grid md:grid-cols-2 grid-cols-1 space-y-32  items-center justify-center  py-14 sm:h-screen h-min sm:px-[4%] px-[6%]">
          <div className="col-span-1">
            <motion.div
              variants={fadeIn("left", "tween", 0.2, 1)}
              className="flex  flex-col items-start text-[#FAFAFACC] flex-1 gap-4"
            >
              <div className=" text-2xl ">
                <TypingText title="Multiple AMMs" />
              </div>
              <h2 className="sm:text-[48px] text-2xl font-extrabold leading-[1.1]">
                Earn by Providing <br className="md:flex hidden" /> Liquidity
              </h2>

              <p className="sm:text-lg text-base">
                Earn a higher yield by providing liquidity through GammaSwap.
                <br className="md:flex hidden" />
                Think of our wrapped pools like wrapped tokens.
              </p>
              <p className="sm:text-lg text-base mt-6 mb-3">
                The GammaSwap protocol will directly deposit liquidity into{" "}
                <br className="sm:flex hidden" />
                the underlying AMM and provide an LP token to the depositor
                <br className="md:flex hidden" />
                representing the position.
              </p>
              <Button variant="secondary">Learn More </Button>
            </motion.div>
          </div>
          <div
            style={{
              background: `url(${bg})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              width: "100%",
              height: "",
              display: "flex",
              alignItems: "center",

              flexDirection: "column",
            }}
            className=" col-span-1  sm:mt-0 w-full"
          >
            <motion.div className="flex justify-center items-center  ">
              <motion.img className="rotate" src={earn} alt="dollar" />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
