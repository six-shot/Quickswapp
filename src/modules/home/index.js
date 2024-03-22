import React from "react";
import NavFootLayout from "./layouts/NavFootLayout";
import Hero from "./feauture/hero";
import LiquidityProvisioning from "./feauture/liquidyprovisioning";
import Explore from "./feauture/explore";
import LongVolatilty from "./feauture/longvolatility";
import EarnLiquidity from "./feauture/earnliquidity";


export default function Home() {
  return (
    <div className="h-screen w-full  ">
      <NavFootLayout>
        <Hero />
        <LiquidityProvisioning/>
        <LongVolatilty/>
        <EarnLiquidity/>
        <Explore/>
      </NavFootLayout>
    </div>
  );
}
