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
      <div className="sm:block hidden bg-[#FF630B] z-10 absolute w-[400px] h-[150px] rounded-[400px] blur-[150px] -left-[10%] bottom-[10%]" />
      <div className="sm:hidden block bg-[#FF630B] z-10 absolute w-[133px] h-[130px] rounded-[400px] blur-[75px] -left-[10%] bottom-[10%]" />
      <div className="max-w-[1440px] mx-auto ">
        <div className="sm:px-[4%] px-[6%]  ">
          <div className="py-16 border-t-[1px] border-[#5C5959] flex sm:flex-row flex-col justify-between items-start  ">
            <div className="">
              <Logo />
              <h5 className="sm:mt-6 sm:my-0 my-10 text-[#808080] sm:text-lg text-base font-bold">
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
                  <h4 className="sm:text-[26px] text-[22px] text-[#fff] font-bold mb-3">
                    Protocol
                  </h4>
                  <ul className="sm:text-[20px]  text-base text-[#808080] font-medium">
                    <li>Blog</li>
                    <li>Changelog</li>
                    <li>Github</li>
                    <li>Media Kits</li>
                  </ul>
                </div>
                <div>
                  <h4 className="sm:text-[26px] text-[22px] text-[#fff] font-bold mb-3">
                    Protocol
                  </h4>
                  <ul className="sm:text-[20px]  text-base text-[#808080] font-medium">
                    <li>Blog</li>
                    <li>Changelog</li>
                    <li>Github</li>
                    <li>Media Kits</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="sm:hidden flex flex-col justify-center w-full  mt-10">
              <h4 className="sm:text-[30px] text-[26px] text-center text-[#fff] font-bold">Community</h4>
              <div className="flex justify-center items-center sm:space-x-12 space-x-4 mt-6">
                <img
                  className="sm:w-[34px] w-[30px]"
                  src={twitter}
                  alt="twitter"
                />
                <img
                  className="sm:w-[34px] w-[30px]"
                  src={medium}
                  alt="medium"
                />{" "}
                <img
                  className="sm:w-[34px] w-[30px]"
                  src={telegram}
                  alt="telegram"
                />{" "}
                <img
                  className="sm:w-[34px] w-[30px]"
                  src={discord}
                  alt="discord"
                />
              </div>
            </div>
          </div>
          <div className="flex sm:pb-[5%] pb-[26%] justify-center sm:justify-end">
            <h5 className="text-[#808080] text-lg font-bold">
              © 2023 GammaSwap Labs LLC.
            </h5>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
