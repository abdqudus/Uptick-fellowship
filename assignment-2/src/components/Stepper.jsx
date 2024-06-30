import React from 'react'

const Stepper = () => {
    return (
        <div className='flex flex-col md:flex-row mx-auto md:gap-4 gap-[100px] items-start justify-between'>
            <Step text={'Update content on my Website'} />
            <Step text={'Improve User Experience'} />
            <Step text={'Request Free Website Review'} />
            <Step text={'Improve your SEO Rankings'} isLast={true} />
        </div>
    )
}

export default Stepper

const Step = ({ isLast, text }) => {
    return (
        <div>
            <div className='flex flex-row items-center gap-3 md:hidden'>
                <p className='w-[40px] relative h-[40px] bg-white rounded-full border border-[#A2BDAA]'>
                    {!isLast && <span className='absolute left-1/2 top-[120%] bg-[#A2BDAA] w-[2px] h-[80px] '></span>}
                </p>
                <p className='text-center'>{text}</p>
            </div>
            <div className=' flex-col hidden md:flex items-center gap-3'>
                <p className='w-[40px] relative h-[40px] bg-white rounded-full border border-[#A2BDAA]'>
                    {!isLast && <span className='absolute translate-x-3/4 md:w-[120px] -left-1/2 top-1/2 lg:w-[160px]  border h-[2px] '></span>}                </p>
                <p className='max-w-[100px] text-center'>{text}</p>
            </div>
        </div>
    )
}