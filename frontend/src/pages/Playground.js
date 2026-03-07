import React, { useState } from 'react'
import Button from '../components/Button'
import {AnimatePresence, motion} from "framer-motion"
const Playground = () => {
    const [isDropOver, setIsDropOver] = useState(false);
    const [dragCount, setDragCount] = useState(0)
   const handleDragEnter = (e) => {
        e.preventDefault();
        setDragCount((c) => c + 1);
        setIsDropOver(true);
    };

const handleDragLeave = (e) => {
    e.preventDefault();
    setDragCount((c) => {
        const newCount = c - 1;
        if (newCount === 0) {
        setIsDropOver(false);
        }
        return newCount;
    });
};
const handleDrop = () => {
    
}
  return (
    <div className='max-w-xl mx-auto h-[500px] px-4 border border-[var(--border-color)] rounded-lg bg-[var(--bg-secondary-color)] relative shadow'  >
        <div className='flex w-full gap-1 absolute top-2 left-2 '>
            <div className='w-[15px] h-[15px] border border-[var(--border-color)] rounded-full bg-red-600'>
            </div>
            <div className='w-[15px] h-[15px] border border-[var(--border-color)] rounded-full bg-yellow-600'>
            </div>
            <div className='w-[15px] h-[15px] border border-[var(--border-color)] rounded-full bg-green-600'>
            </div>
        </div>
        <div className='flex w-full absolute -right-1/2 -translate-x-8 '>
            <h1>
                removebg
            </h1>
        </div>
        <div className='w-full h-full flex flex-col justify-center items-center gap-3' onDragEnter={handleDragEnter} onDragLeave={handleDragLeave} onDragOver={(e) => e.preventDefault()} onDrop={handleDrop}>
            {/* <AnimatePresence > */}
            <AnimatePresence >

           {
            !isDropOver ? (
                <>
                <motion.div
                    initial={{
                         filter : "blur(200px)"    
                    }}
                    animate={{
                        
                        filter : "blur(0px)"                       
                    }}
                    exit={{
                         filter : "blur(200px)"    
                    }}
                    transition={{
                        duration: .5,
                        
                    }} className='w-full h-full flex flex-col justify-center items-center'>
                    <h2 className='text-xl'>
                        Drag and Drop the file.
                    </h2>
                    <p>
                        or
                    </p>
                    <Button>
                        Browse
                    </Button>
                </motion.div>
                </>
            ) : (
                <>
                <motion.div
                    initial={{
                         filter : "blur(200px)"    
                    }}
                    animate={{
                        x: [-20, 20, -20, 20, -20],
                        y: [-20, 20, -20, 20, -20],
                        filter : "blur(10px)"                       
                    }}
                    exit={{
                         filter : "blur(200px)"    
                    }}
                    transition={{
                        duration: .8,
                        
                    }} className='w-full h-full blur-md flex justify-center items-center'>
                    {/* <div className='w-[70px] h-[70px] bg-green-500 rounded-full'>

                    </div> */}
                    <div className='w-full flex justify-center items-center'>
                        <img src/>
                    </div>
                </motion.div>
                </>
            )
           }
                </AnimatePresence>
        </div>
    </div>
  )
}

export default Playground