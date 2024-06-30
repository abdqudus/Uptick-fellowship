import React from 'react'
import Stepper from './Stepper'

const Help = () => {
    return (
        <div className='p-8 bg-[#F6FBF9]'>
            <h3 className='font-bold text-xl md:text-[2.625rem] text-center'>How Can We Help You?</h3>
            <p className='my-6 text-[#78847D] text-lg md:text-[1.375rem] text-center'>Let's do great work together</p>
            <Stepper />
            <div className='mt-6 flex justify-center items-center'>
                <a className='flex gap-4 items-center' href="/">
                    <span className='text-[#A3B938] text-lg font-medium underline'>See More </span>
                    <img src="/Arrow - Right.svg" alt="" />
                </a>
            </div>
        </div>
    )
}

export default Help
