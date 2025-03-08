import React, { useState } from 'react'

export default function WorkoutCard(props) {
    const { exercise, index } = props;
    const [setCount, setSetCount] = useState(0);

    function handleSetIncrement(setCount) {
        if(setCount === 5) {
            setSetCount(0);
            return;
        }
        setSetCount(setCount + 1);
    }

  return (
    <div className="p-4 rounded-xl flex flex-col gap-4 bg-slate-950 sm:flex-wrap">
        <div className="flex flex-col sm:flex-row sm:items-center sm:flex-wrap gap-x-4">
            {/* //? number */}
            <h4 className="text-3xl hidden sm:inline sm:text-4xl md:text-5xl font-semibold text-slate-400">
                0{index + 1}
            </h4>

            {/* //? exercise name */}
            <h2 className="capitalize whitespace-nowrap truncate max-w-full text-lg sm:text-xl md:text-2xl flex-1 sm:text-center font-bold">
                {exercise.name.replaceAll("_", " ")}
            </h2>

            {/* //? exercise type */}
            <p className='text-sm text-slate-400 capitalize'>
                {exercise.type}
            </p>
        </div>


        {/* //? Muscle Name */}
        <div className="flex flex-col">
            <h3 className='text-slate-400 text-sm'>Muscle Groups</h3>
            <p className='capitalize font-semibold'>{exercise.muscles.join(' & ')}</p>
        </div>


        <div className='flex flex-col bg-slate-900 rounded-lg gap-2 p-2'>
            <p className='capitalize font-semibold pl-3'>Description: </p>
            {exercise.description.split("___").map((point) => {
                return(
                    <li className='pl-3'>
                        {point}
                    </li>
                )
            })}
        </div>


        {/* //? reps, rest, tempo & set-count grid */}
        <div className='grid grid-cols-2 sm:grid-cols-4 sm:place-items-center gap-2'>
            {["reps", "rest", "tempo"].map((info) => {
                return (
                    <div className='flex flex-col p-2 rounded border-[1.5px] border-solid border-slate-900 w-full'>
                        <h3 key={info} className='capitalize text-slate-400 text-sm font-semibold'>{info}</h3>
                        <p className='font-medium'>{exercise[info]}</p>
                    </div>
                )
            })}

            {/* //? Set Counter */}
            <button 
                onClick={() => {handleSetIncrement(setCount)}} 
                className='flex flex-col p-2 rounded border-[1.5px] duration-200 border-solid border-blue-900 hover:border-blue-600 w-full'
            >
                <h3 className='text-slate-400 text-sm capitalize'>Sets completed</h3>
                <p className='font-medium'>{setCount} / 5</p>
            </button>
        </div>

    </div>
  )
}
