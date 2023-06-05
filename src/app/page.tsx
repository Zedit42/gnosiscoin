"use client"
import Header from "./components/Header";
import CustomPieChart from './components/CustomPieChart'
import Hero from "./components/Hero";
import Stat from "./components/Stat";
import Footer from './components/Footer'


export default function Home() {
  const data = [
    { name: 'Development', value: 15 },
    { name: 'Flexible Funds', value: 15 },
    { name: "Refill Camelot's Liquidity Pool", value: 20 },
    { name: 'Lucky Drop Rewards', value: 10 },
    { name: 'Dividends to AIDOGE Stakers', value: 25 },
    { name: 'Burn', value: 15 },
  ];
  return (
    <main className="flex min-h-screen bg-[#E9E7DC] w-screen flex-col">
      <Header/>
      <div className=" w-screen z-10">
        <Hero/>
        <Stat/>
        <div className=" ">
          <CustomPieChart data={data}/>
        </div>
        <Footer/>
      </div>
    </main>
  )
}
