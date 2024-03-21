import React from "react";
import { TypingText } from "../../utils/customtext";

export default function LongVolatilty() {
  return (
    <div className="bg-[#090B18] h-screen  relative z-10">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-2 px-[4%] py-14">
          <div className="col-span-1">
            <div className="flex flex-col text-[#FAFAFACC]">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
