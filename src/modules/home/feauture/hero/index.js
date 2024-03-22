import React from "react";
import bg from "../../assets/hero.png";
import { Button } from "../../components/ui/buttons/Button";
import AddLiquidity from "../../components/ui/tabs/addliquidity/AddLiquidity";
import { motion } from "framer-motion";
import {
  staggerContainer,
  fadeIn,
  slideIn,
  navVariants,
} from "../../utils/motion";
import star from "../../assets/icons/Star 1.png"
export default function Hero() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="relative"
    >
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
      >
        <motion.div
          variants={navVariants}
          initial="hidden"
          whileInView="show"
          className="sm:block hidden bg-[#FF630B] z-10 absolute w-[400px] h-[400px] rounded-[400px] blur-[150px] right-0 bottom-0"
        />
        <div className=" sm:hidden block bg-[#FF630B] z-10 absolute w-[133px] h-[133px] rounded-[400px] blur-[49px]  bottom-[10%]" />
        <div className="mt-[8%] sm:px-0 px-[4%]">
          <motion.h1
            variants={fadeIn("down", "tween", 0.8, 1)}
            className="text-center text-[#FAFAFA] font-extrabold text-2xl sm:text-[64px] leading-[1.3]"
          >
            Oracle Free Perpetual <br /> Volatility Trading
          </motion.h1>

          <motion.p
            variants={fadeIn("up", "tween", 1, 1)}
            className="text-[#FAFAFACC] sm:text-2xl text-lg  text-center py-10"
          >
            A novel primitive for scaling DeFi liquidity through
            <br className="sm:flex hidden" /> permissionless risk markets
          </motion.p>
          <motion.div
            variants={fadeIn("up", "tween", 1, 1)}
            className="flex sm:justify-center justify-between  sm:space-x-12 px-[10%]"
          >
            <Button variant={`anime`}>Launch App</Button>
            <Button variant="outline-primary">Learn More</Button>
          </motion.div>
          <motion.div className="px-[2.5%]">
            <div>
              <motion.div
                variants={fadeIn("down", "tween", 0.8, 1)}
                className=" card bg-[#131625] relative z-[2] rounded-2xl h-[500px] mt-[8%]  px-[5%] py-[4%]"
              >
                <AddLiquidity />
                <span class="span top"></span>
                <span class="span right"></span>
                <span class="span bottom"></span>
                <span class="span left"></span>
              </motion.div>
            </div>
          </motion.div>

          <div className="flex justify-between mt-[5%]">

            <div className="-rotate-[30deg]">
              <div className="bg-[#2C1310] py-2 px-[14px] rounded flex items-center space-x-1 ">
                <img src={star} alt="star" />
                <h6 className="   text-[#B44201] font-bold">48.8%</h6>
              </div>
            </div>
            <div className="-rotate-[30deg]">
              <div className="bg-[#2C1310] py-2 px-[14px] rounded flex items-center space-x-1 ">
                <img src={star} alt="star" />
                <h6 className="   text-[#B44201] font-bold">48.8%</h6>
              </div>
            </div>
          </div>
          <div>
            <div className="flex sm:hidden w-[133px] h-[100px] "></div>
          </div>
        </div>
      </div>
      <div className="sm:block hidden absolute bottom-0 left-0 bg-[#010415] w-full h-[80px]"></div>
      <div className="sm:flex hidden">
        <div className="absolute bottom-[25%] left-[20%] -rotate-[30deg]">
          <div className="bg-[#2C1310] py-2 px-[14px] rounded flex items-center space-x-1 hithere">
            <img src={star} alt="star" />
            <h6 className="   text-[#B44201] font-bold">33.3%</h6>
          </div>
        </div>
        <div className="absolute bottom-[10%] left-[20%] -rotate-[30deg]">
          <div className="bg-[#2C1310] py-2 px-[14px] rounded flex items-center space-x-1 hithere">
            <img src={star} alt="star" />
            <h6 className="   text-[#B44201] font-bold">48.8%</h6>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
