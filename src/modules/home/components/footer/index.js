import React from "react";
import Logo from "../logo/Logo";
import twitter from "../../assets/icons/twitter.png";
import medium from "../../assets/icons/medium.png";
import telegram from "../../assets/icons/discord.png";
import discord from "../../assets/icons/discord.png";
import { motion } from "framer-motion";
import { footerVariants } from "../../utils/motion";
export default function Footer() {
  return (
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      whileInView="show"
      className="bg-[#090B18] w-full relative pb-[7%]"
    >
      <div className="sm:block hidden bg-[#FF630B] z-10 absolute w-[400px] h-[200px] rounded-[400px] blur-[150px] -left-[10%] bottom-[10%]" />
      <div className="max-w-[1440px] mx-auto ">
        <div className="px-[4%]  ">
          <div className="py-16 border-t-[1px] border-[#5C5959] flex sm:flex-row flex-col justify-between items-start  ">
            <div className="">
              <Logo />
              <h5 className="mt-6 text-[#808080] text-lg font-bold">
                Oracle Free Perpetual Volatility Trading
              </h5>

              <div className="sm:flex flex-col hidden mt-10">
                <h4 className="text-[34px] text-[#fff] font-bold">Community</h4>
                <div className="flex items-center space-x-12 mt-6">
                  <img className="w-[34px]" src={twitter} alt="twitter" />
                  <img className="w-[34px]" src={medium} alt="medium" />{" "}
                  <img className="w-[34px]" src={telegram} alt="telegram" />{" "}
                  <img className="w-[34px]" src={discord} alt="discord" />
                </div>
              </div>
            </div>
            <div className="">
              <div className="flex items-center space-x-[97px]">
                <div>
                  <h4 className="text-[28px] text-[#fff] font-bold mb-3">
                    Protocol
                  </h4>
                  <ul className="text-[24px] text-[#808080] font-medium">
                    <li>Blog</li>
                    <li>Changelog</li>
                    <li>Github</li>
                    <li>Media Kits</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-[28px] text-[#fff] font-bold mb-3">
                    Protocol
                  </h4>
                  <ul className="text-[24px] text-[#808080] font-medium">
                    <li>Blog</li>
                    <li>Changelog</li>
                    <li>Github</li>
                    <li>Media Kits</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="sm:hidden flex flex-col  mt-10">
              <h4 className="text-[34px] text-[#fff] font-bold">Community</h4>
              <div className="flex items-center space-x-12 mt-6">
                <img className="w-[34px]" src={twitter} alt="twitter" />
                <img className="w-[34px]" src={medium} alt="medium" />{" "}
                <img className="w-[34px]" src={telegram} alt="telegram" />{" "}
                <img className="w-[34px]" src={discord} alt="discord" />
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <h5 className="text-[#808080] text-lg font-bold">
              © 2023 GammaSwap Labs LLC.
            </h5>
          </div>
        </div>
      </div>
      
    </motion.footer>
  );
}
