import Link from 'next/link'
import React from 'react'

const Stat = () => {
  return (
    <div>
        <div className="mt-[3rem] sm:mt-[4rem] mx-[5vw]">
            <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="flex flex-col rounded-lg bg-[#3E6957]/30 hover:bg-[#3E6957]/60 duration-300 ease-out px-4 py-8 text-center">
                <dt className="order-last text-lg font-medium text-[#3E6957]">
                    Burned Coin
                </dt>

                <dd className="text-4xl font-extrabold text-[#133629] md:text-5xl">
                    4.8m
                </dd>
                </div>

                <div className="flex flex-col rounded-lg bg-[#3E6957]/30 hover:bg-[#3E6957]/60 duration-300 ease-out px-4 py-8 text-center">
                <dt className="order-last text-lg font-medium text-[#3E6957]">
                    Current Supply
                </dt>

                <dd className="text-4xl font-extrabold text-[#133629] md:text-5xl">24m</dd>
                </div>

                <div className="flex flex-col rounded-lg bg-[#3E6957]/30 hover:bg-[#3E6957]/60 duration-300 ease-out px-4 py-8 text-center">
                <dt className="order-last text-lg font-medium text-[#3E6957]">
                    Total Supply
                </dt>

                <dd className="text-4xl font-extrabold text-[#133629] md:text-5xl">86m</dd>
                </div>
            </dl>
            <Link href={'#'} className=' my-2 w-full justify-end truncate-text max-md:justify-start flex flex-row underline decoration-slice opacity-70 decoration-[#3E6957] text-[#133629] '>
                Destroy adress:0x000000000000000000000000000000000000dEaD
            </Link>
        </div>
    </div>
  )
}

export default Stat