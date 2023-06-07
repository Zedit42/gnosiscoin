"use client"
import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import abi from "../utils/WavePortal.json";
import Link from "next/link";

const Header = () => {
    const [show, setShow] = useState(false);
    const [currentAccount, setCurrentAccount] = useState("");

    const contractAddress = "0x343610D353a0B2Ba86dDAAa348BF62B732107284";
  
    const contractABI = abi.abi;
  
    var waveTotal;
  
    const checkIfWalletIsConnected = async () => {
      try {
        const { ethereum } = window;
  
        if (!ethereum) {
          console.log("Make sure you have metamask!");
          return;
        } else {
          console.log("We have the ethereum object", ethereum);
        }
  
        const accounts = await ethereum.request({ method: "eth_accounts" });
  
        if (accounts.length !== 0) {
          const account = accounts[0];
          console.log("Found an authorized account:", account);
          setCurrentAccount(account);
        } else {
          console.log("No authorized account found")
        }
      } catch (error) {
        console.log(error);
      }
    }
  
  
    const connectWallet = async () => {
      try {
        const { ethereum } = window;
  
        if (!ethereum) {
          alert("Get MetaMask!");
          return;
        }
  
        const accounts = await ethereum.request({ method: "eth_requestAccounts" });
  
        console.log("Connected", accounts[0]);
        setCurrentAccount(accounts[0]);
      } catch (error) {
        console.log(error)
      }
    }
  
  
  
  
    useEffect(() => {
      checkIfWalletIsConnected();
    }, [])
  return (
    <div>
      <div className=" w-full z-40 font-karla">
        <nav className="2xl:container 2xl:mx-auto sm:py-6 sm:px-7 py-5 px-4">
          {/* For large and Medium-sized Screen */}
          <div className="flex justify-between animate-fade ">
            <p className=" text-3xl italic font-lora text-[#133629] ">Gnowls</p>
            <div className="hidden sm:flex flex-row items-center justify-center w-full space-x-6  ">
              <div className=' justify-center flex items-center space-x-[-4px] '>
                <Link href={'/Lp'} className="inline-block my-2 rounded-l-lg p-[2px]  focus:outline-none  active:text-opacity-75 ">
                  <span className="block rounded-l-lg   bg-[#3E6957]/30 hover:bg-[#3E6957]/60 duration-200 ease-in backdrop-blur-[8px] text-[#133629] px-8 py-3 text-sm">Lp</span>
                </Link>
                <Link href={'/Airdrop'} className="inline-block my-2 p-[2px] rounded-r-lg focus:outline-none  active:text-opacity-75">
                  <span className="block   bg-[#3E6957]/30 hover:bg-[#3E6957]/60 duration-300 ease-in backdrop-blur-[8px] text-[#133629] px-8 py-3 text-sm">Airdrop</span>
                </Link>
                <Link href={'/Earn'} className="inline-block my-2 p-[2px] rounded-r-lg focus:outline-none  active:text-opacity-75">
                  <span className="block rounded-r-lg  b bg-[#3E6957]/30 hover:bg-[#3E6957]/60 duration-300 ease-in backdrop-blur-[8px] text-[#133629] px-8 py-3 text-sm">Earn</span>
                </Link>
              </div>
            </div>
            <div className='hidden  sm:block my-auto'>
            {!currentAccount ? (
            <button className="block border border-current bg-[#3E6957]/30 hover:bg-[#3E6957]/60 duration-300 ease-in backdrop-blur-[8px] text-[#133629] px-4 py-3 text-sm min-w-[140px] rounded-lg" onClick={connectWallet}>
            Connect Wallet
            </button>
            ):(
            <button className=" block  bg-[#3E6957]/30 border border-current hover:bg-[#3E6957]/60 duration-300 ease-in backdrop-blur-[8px] text-[#133629] px-4 py-3 text-sm min-w-[140px] rounded-lg truncate-text  ">
                {currentAccount}
            </button>
            )
            }
            </div>
            {/* Burger Icon */}
            <div
              id="bgIcon"
              onClick={() => setShow(!show)}
              className={`focus:outline-none my-auto max-md:fixed right-5 z-50 bg-[#3E6957]/30 hover:bg-[#3E6957]/60 duration-300 ease-in focus:ring-2 focus:ring-offset-2 p-2 rounded-lg focus:ring-[#133629]  justify-center items-center sm:hidden cursor-pointer`}
            >
              <svg
                className={`${show ? 'hidden' : ''}`}
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="transform duration-150"
                  d="M4 6H20"
                  stroke="#FFFFFF"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4 12H20"
                  stroke="#FFFFFF"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  className="transform duration-150"
                  d="M4 18H20"
                  stroke="#FFFFFF"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <svg
                className={`${show ? 'block' : 'hidden'}`}
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 6L6 18"
                  stroke="#FFFFFF"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6 6L18 18"
                  stroke="#FFFFFF"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          {/* Mobile and small-screen devices (toggle Menu) */}
          <div
            id="MobileNavigation"
            className={`${show ? 'block' : 'hidden'} sm:hidden mt-[1rem] fixed z-50 w-[90vw] mx-auto`}
          >
            <div className=' w-full flex justify-center'>
              <div className=' flex flex-col w-full animate-fade'>
                    <Link href={'/Lp'} className="inline-block rounded-l-lg p-[2px]  focus:outline-none  active:text-opacity-75">
                      <span className="block rounded-lg border border-current bg-[#3E6957]/30 hover:bg-[#3E6957]/60 duration-300 ease-in backdrop-blur-[8px] text-[#133629] px-8 py-3 text-sm ">Lp</span>
                    </Link>
                    <Link href={'/Airdrop'} className="inline-block p-[2px]  focus:outline-none  active:text-opacity-75">
                      <span className="block border border-current bg-[#3E6957]/30 hover:bg-[#3E6957]/60 duration-300 ease-in backdrop-blur-[8px] text-[#133629] px-8 py-3 text-sm ">Airdrop</span>
                    </Link>
                    <Link href={'/Earn'} className="inline-block p-[2px]  focus:outline-none  active:text-opacity-75">
                      <span className="block rounded-lg border border-current bg-[#3E6957]/30 hover:bg-[#3E6957]/60 duration-300 ease-in backdrop-blur-[8px] text-[#133629] px-8 py-3 text-sm ">Earn</span>
                    </Link>
                    {!currentAccount ? (
                      <button className="block  border border-current bg-[#3E6957]/30 hover:bg-[#3E6957]/60 duration-300 ease-in backdrop-blur-[8px] text-[#133629] px-4 py-3 text-sm min-w-[140px] rounded-lg" onClick={connectWallet}>
                      Connect Wallet
                      </button>
                      ):(
                      <button className=" block  border border-current bg-[#3E6957]/30 hover:bg-[#3E6957]/60 duration-300 ease-in backdrop-blur-[8px] text-[#133629] px-4 py-3 text-sm min-w-[140px] rounded-lg truncate  ">
                          {currentAccount}
                      </button>
                      )
                    }
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Header