import React from "react";

export default function Hero() {
    return (
        <div className='min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4'>
            <div className='flex flex-col gap-4'>
                <p className="font-bold">IT’S TIME TO EMBRACE THE</p>
                <h1 className='uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>FORBIDDEN <span className='text-blue-400'>Bulk</span></h1>
            </div>

            <p className='text-sm md:text-base font-bold'>
                I hereby swear an <span className='text-blue-400 font-medium'>unbreakable oath</span> to the 
                <span className="text-blue-400 font-medium"> Iron Lords </span> and accept my fate—to become a <span className='text-blue-400 font-medium'>mass monster of eldritch proportions</span>, I forsake the weak flesh of mortals and embrace the <span className="text-blue-400 font-medium">forbidden hypertrophy</span> that may render doorways useless and shirts obsolete.
            </p>

            <p className='text-sm md:text-base font-bold'>Only the worthy may proceed.</p>

            <button 
                className="px-8 py-4 rounded-lg cursor-pointer font-bold border-1 border-blue-400 border-solid bg-slate-800 blue hover:bg-slate-900 hover:shadow-[6px_6px_10px_rgba(0,0,0,0.25),-6px_-6px_10px_rgba(0,0,0,0.25),-6px_6px_10px_rgba(0,0,0,0.25),6px_-6px_10px_rgba(0,0,0,0.25)] hover:shadow-blue-500/50 transition duration-450 ease-in-out hover:-translate-y-1 hover:scale-100"
                //? navigation
                onClick={() => window.location.href = '#generate'}
            >
               <p>Hell Yeah!</p>
            </button>

        </div>
    )
}
