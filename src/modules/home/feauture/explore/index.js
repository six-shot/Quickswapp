import React from "react";
import { Button } from "../../components/ui/buttons/Button";
import { motion } from "framer-motion";
import dollar from "../../assets/liquidity.png";
import eth from "../../assets/eth.png";
export default function Explore() {
  return (
    <div className="bg-[#090B18] pt-[10%]  pb-[3%]  z-10 relative">
      <div className="max-w-[1440px] mx-auto">
        <div className="sm:px-[4%] px-[6%]">
          <div className=" relative flex sm:flex-row flex-col gap-20 items-center  bg rounded-[20px] sm:pt-0 pt-[18%] sm:py-[3%] px-[4%] ">
            <div className="flex sm:justify-start justify-center sm:items-start items-center gap-4 flex-col">
              <h4 className="sm:text-[48px]  text-2xl text-[#D66A1E] font-extrabold">
                Discover new possibilities
              </h4>
              <p className="text-[#FAFAFA] text-center sm:text-2xl text-base">
                We believe everyone should have access to{" "}
                <br className="sm:flex hidden" /> open & powerful financial
                tools.
              </p>
              <Button variant="secondary">Explore App</Button>
            </div>
            <motion.div className="relative">
              <div className="flex justify-end items-end">
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
                  className="sm:w-[300px] w-[200px]"
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
                  className="absolute -top-[25%] right-[20%] w-[100px] sm:w-[175px]"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
