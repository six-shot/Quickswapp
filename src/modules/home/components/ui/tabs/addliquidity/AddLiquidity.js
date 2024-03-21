import React, { useState } from "react";
import deposit from "../../../../assets/icons/deposit.svg";
import withdraw from "../../../../assets/icons/withdraw.svg";
import info from "../../../../assets/icons/info.png"
import Deposit from "../deposit";
import Withdraw from "../withdraw";
function AddLiquidity() {
  const [currentTab, setCurrentTab] = useState("1");

  const tabs = [
    {
      id: 1,
      tabTitle: "Deposit",
      title: "Deposit",
      content: <Deposit/>,
      icon: deposit,
    },
    {
      id: 2,
      tabTitle: "Withdraw",
      title: "Withdraw",
      content: <Withdraw/>,
      icon: withdraw,
    },
  ];

  const handleTabChange = (e) => {
    setCurrentTab(e.target.id);
  };

  return (
    <div>
      <div className="w-full h-full">
        <div className="flex items-center space-x-[6px] mb-[2%]">
          <h5 className="text-lg font-bold text-[#fff] ">Add Liquidity</h5>
          <img src={info} alt="alt" />
        </div>
        <div className=" flex justify-between items-center bg-[#1F2230] px-3 py-1 rounded-[12px]">
          {tabs.map((tab, index) => (
            <button
              key={index}
              id={tab.id}
              disabled={currentTab === `${tab.id}`}
              onClick={handleTabChange}
              className={`cursor-pointer text-sm font-poppins ${
                currentTab === `${tab.id}`
                  ? "px-6 py-2 bg-[#B44201] rounded text-base font-bold text-white flex items-center space-x-1"
                  : "px-6 py-2 bg-[#2A2D3C] rounded text-base font-bold text-white flex items-center space-x-1"
              }`}
            >
              <h5> {tab.tabTitle}</h5>
              <img src={tab.icon} alt="deposit" />
            </button>
          ))}
        </div>
      </div>
      <div className="">
        {tabs.map((tab, index) => (
          <div key={index}>
            {currentTab === `${tab.id}` && <div>{tab.content}</div>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default AddLiquidity;
