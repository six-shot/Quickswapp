import React from 'react';
import eth from '../../../../assets/icons/eth.svg';
import usdc from '../../../../assets/icons/usdc.svg';
import { Button } from '../../buttons/Button';

export default function Deposit() {
  return (
    <div className='w-full flex flex-col gap-10 justify-between'>
      <div>
        <h6 className='text-xs text-white font-bold mt-[5%]  mb-[2%]'>
          Provide Collateral
        </h6>
        <div>
          <div className=' flex justify-between items-center bg-[#161926] px-7 py-1 rounded-[12px]'>
            <button className='px-6 py-2 bg-[#2A2D3C] rounded text-base font-bold text-white flex items-center space-x-[10px]'>
              <img src={eth} alt='eht' />
              <h5> ETH</h5>
            </button>
            <h6 className='text-lg font-extrabold text-[#ffffff]'>0.434</h6>
          </div>
        </div>
        <div className='flex justify-between items-center mt-[2%] text-[#808080] font-extrabold'>
          <h6 className='text-xs  font-bold  mb-[2%]'>Available balance</h6>
          <h6 className='text-xs  font-bold  mb-[2%]'>2.473844736 ETH</h6>
        </div>
      </div>
      <div>
        <div>
          <div className=' flex justify-between items-center bg-[#161926] px-7 py-1 rounded-[12px]'>
            <button className='px-6 py-2 bg-[#2A2D3C] rounded text-base font-bold text-white flex items-center space-x-[10px]'>
              <img src={usdc} alt='eht' />
              <h5>USDC</h5>
            </button>
            <h6 className='text-lg font-extrabold text-[#ffffff]'>653.11113</h6>
          </div>
        </div>
        <div className='flex justify-between items-center mt-[2%] text-[#808080] font-extrabold'>
          <h6 className='text-xs  font-bold  mb-[2%]'>Available balance</h6>
          <h6 className='text-xs  font-bold  mb-[2%]'>2.473844736 ETH</h6>
        </div>
      </div>

      <Button variant={`anime`} className='w-full'>
        Provide Liquidity
      </Button>
    </div>
  );
}
