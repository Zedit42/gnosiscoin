import React from 'react'
import Header from '../components/Header'
import Image from 'next/image'

const page = () => {
  return (
    <main className="flex min-h-screen h-full bg-[#E9E7DC] w-screen flex-col" >
    <Header/>
    <div className='w-[80%] max-md:w-[90%] flex flex-col m-auto max-md:mb-[1rem]'>
        <div className=' text-5xl text-center mb-[2rem] text-[#3E6957] font-lora -rotate-1'>
            Staking LP to Earn Some Gnowls
        </div>
        <div className=' text-xl text-center mb-[2rem] text-[#3E6957] font-karla'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae sint, dolores quae, nobis quis numquam dolore eum aliquid odio autem cum aspernatur tenetur optio vitae rem. Cupiditate eum dicta et?
        </div>
        <div className=" w-full flex flex-col border-[#3E6957]/60 bg-[#3E6957]/30 rounded-lg border-y-[0.3rem] h-[30rem] max-md:h-full shadow-lg z-10">
            <dl className="grid grid-cols-1 gap-4 sm:grid-cols-4 m-[1rem]">
                <div className="flex flex-col rounded-lg bg-[#3E6957]/30 hover:bg-[#3E6957]/60 duration-300 ease-out px-4 py-8 text-center">
                    <dt className="order-last text-lg font-medium text-[#3E6957]">
                        TVL
                    </dt>

                    <dd className="text-3xl font-extrabold text-[#133629] md:text-4xl">$64203.164</dd>
                </div>
                <div className="flex flex-col rounded-lg bg-[#3E6957]/30 hover:bg-[#3E6957]/60 duration-300 ease-out px-4 py-8 text-center">
                    <dt className="order-last text-lg font-medium text-[#3E6957]">
                        APY
                    </dt>

                    <dd className="text-3xl font-extrabold text-[#133629] md:text-4xl">0.00 %</dd>
                </div>
                <div className="flex flex-col rounded-lg bg-[#3E6957]/30 hover:bg-[#3E6957]/60 duration-300 ease-out px-4 py-8 text-center">
                    <dt className="order-last text-lg font-medium text-[#3E6957]">
                        Pending Rewards
                    </dt>

                    <dd className="text-3xl font-extrabold text-[#133629] md:text-4xl">0.000 GNO</dd>
                </div>
                <div className="flex flex-col rounded-lg bg-[#3E6957]/30 hover:bg-[#3E6957]/60 duration-300 ease-out px-4 py-8 text-center">
                    <dt className="order-last text-lg font-medium text-[#3E6957]">
                        Issued Rewards
                    </dt>

                    <dd className="text-3xl font-extrabold text-[#133629] md:text-4xl">206097.564 GNO</dd>
                </div>
            </dl>
            <div className=' flex-row flex max-md:flex-col'>
                <div className=' border-r-2 max-md:border-r-0 flex-col gap-4 border-[#3E6957]/60 border-t-2 w-[50%] max-md:w-full items-center justify-center flex text-black'>
                    <p className=' mt-[1rem] text-2xl font-semibold text-[#133629] md:text-3xl -rotate-2'>
                        Add LP
                    </p>
                    <div className=' flex flex-row gap-2'>
                        <Image
                            src={'/bg1.png'}
                            width={60}
                            height={60}
                            alt='coin symbol'
                        />
                        <Image
                            src={'/bg1.png'}
                            width={60}
                            height={60}
                            alt='coin symbol'
                        />
                    </div>

                    <p className=' text-xl font-bold text-center text-[#3E6957] font-karla'>
                        112$
                    </p>
                    <div className=' flex flex-row gap-[1rem] mx-[1rem]'>
                        <button
                        className="group relative inline-flex  bg-[#3E6957]/80 hover:bg-[#3E6957]/90 items-center overflow-hidden rounded-lg px-8 py-3 text-[#E9E7DC]  "
                        >
                            <span className="absolute end-2 transition-all group-hover:end-4">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                </svg>
                            </span>
                                <label
                                // for="UserEmail"
                                className="relative block overflow-hidden bg-transparent  focus-within:border-[#E9E7DC]"
                                >
                                <input
                                    type="number"
                                    id="UserEmail"
                                    placeholder="Add LP"
                                    className="peer h-8 w-full border-none bg-transparent p-0 placeholder:text-[#E9E7DC] focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                                />

                                </label>
                        </button>
                        <button
                        className="group relative inline-flex  bg-[#3E6957]/80 hover:bg-[#3E6957]/90 items-center overflow-hidden rounded-lg px-8 py-3 text-[#E9E7DC]  "
                        >
                        <span className="absolute end-2 transition-all group-hover:end-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        </span>
                            <label
                            // for="UserEmail"
                            className="relative block overflow-hidden bg-transparent  focus-within:border-[#E9E7DC]"
                            >
                            <input
                                type="number"
                                id="UserEmail"
                                placeholder="Remove LP"
                                className="peer h-8 w-full border-none bg-transparent p-0 placeholder:text-[#E9E7DC] focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                            />

                            </label>
                    </button>
                    </div>

                </div>
                <div className=' flex-col gap-4 border-[#3E6957]/60 border-t-2 w-[50%]  max-md:w-full max-md:my-[1rem] items-center justify-center flex text-black'>
                    <p className=' mt-[1rem] text-2xl font-semibold text-[#133629] md:text-3xl -rotate-2'>
                        Claim
                    </p>
                    <Image
                        src={'/bg1.png'}
                        width={60}
                        height={60}
                        alt='coin symbol'
                    />
                    <p className=' text-xl font-bold text-center text-[#3E6957] font-karla'>
                        1 GNO
                    </p>
                    <button
                    className="group relative inline-flex  bg-[#3E6957]/80 hover:bg-[#3E6957]/90 items-center overflow-hidden rounded-lg px-8 py-3 text-[#E9E7DC]  "
                    >
                        <span className="absolute end-2 transition-all group-hover:end-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                        </svg>

                        </span>
                            <label
                            // for="UserEmail"
                            className="relative block overflow-hidden bg-transparent  focus-within:border-[#E9E7DC]"
                            >
                            <input
                                type="number"
                                id="UserEmail"
                                placeholder="Claim"
                                className="peer h-8 w-full border-none bg-transparent p-0 placeholder:text-[#E9E7DC] focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                            />

                            </label>
                    </button>
                </div>
                
            </div>
        </div>

    </div>

  </main>
  )
}

export default page