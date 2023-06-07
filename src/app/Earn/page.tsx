import React from 'react'
import Header from '../components/Header'

const page = () => {
  return (
    <main className="flex min-h-screen bg-[#E9E7DC] w-screen flex-col" >
    <Header/>
    <div className='w-[80%] flex flex-col m-auto'>
        <div className=' text-5xl text-center mb-[2rem] text-[#3E6957] font-lora -rotate-2'>
            Stake Some Gnowls
        </div>
        <div className=" w-full flex flex-col border-[#3E6957]/60 bg-[#3E6957]/30 rounded-lg border-y-[0.3rem] h-[30rem] shadow-lg z-10">
            <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2 m-[1rem]">
                <div className="flex flex-col rounded-lg bg-[#3E6957]/30 hover:bg-[#3E6957]/60 duration-300 ease-out px-4 py-8 text-center">
                    <dt className="order-last text-lg font-medium text-[#3E6957]">
                        Burned Coin
                    </dt>

                    <dd className="text-3xl font-extrabold text-[#133629] md:text-4xl">
                        4.8m
                    </dd>
                    </div>

                    <div className="flex flex-col rounded-lg bg-[#3E6957]/30 hover:bg-[#3E6957]/60 duration-300 ease-out px-4 py-8 text-center">
                    <dt className="order-last text-lg font-medium text-[#3E6957]">
                        Current Supply
                    </dt>

                    <dd className="text-3xl font-extrabold text-[#133629] md:text-4xl">24m</dd>
                </div>
            </dl>
        </div>
    </div>

  </main>
  )
}

export default page