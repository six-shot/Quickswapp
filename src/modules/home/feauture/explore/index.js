import React from "react";
import { Button } from "../../components/ui/buttons/Button";
import { motion } from "framer-motion";
import explore from "../../assets/explore.png";

export default function Explore() {
  return (
    <div className="bg-[#090B18]  pt-[2%] pb-[3%]  z-10 relative">
      <div className="max-w-[1440px] mx-auto">
        <div className="sm:px-[4%] px-[6%]">
          <div className=" relative flex sm:flex-row flex-col justify-between gap-8 items-center  bg rounded-[20px] sm:h-[50vh] pt-[18%] sm:pt-0  px-[4%] ">
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
              <img src={explore} alt="explore"/>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
