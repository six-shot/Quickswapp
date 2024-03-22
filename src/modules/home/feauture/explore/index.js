import React from "react";
import { Button } from "../../components/ui/buttons/Button";
import { motion } from "framer-motion";
import dollar from "../../assets/liquidity.png";
import eth from "../../assets/eth.png";
export default function Explore() {
  return (
    <div className="bg-[#090B18] pt-[10%]  pb-[3%]  z-10 relative">
      <div className="max-w-[1440px] mx-auto">

        <div className="px-[4%]">
          <div className=" relative flex flex-row justify-between  bg rounded-[20px]  py-[3%] px-[4%]">
            <div>
              <h4 className="text-[48px] text-[#D66A1E] font-extrabold">
                Discover new possibilities
              </h4>
              <p className="text-[#FAFAFA] text-2xl">
                We believe everyone should have access to <br /> open & powerful
                financial tools.
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
                  className="w-[300px]"
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
                  className="absolute -top-[25%] right-[20%] w-[175px]"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
