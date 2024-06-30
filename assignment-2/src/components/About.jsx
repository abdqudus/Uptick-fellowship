import React from 'react'

const About = () => {
    return (
        <div className='px-4 md:px-16 py-16'>
            <div className='grid lg:grid-cols-2 gap-12 '>
                <div>
                    <h3 className='font-bold text-4xl text-[#253D32] leading-[45px]'>We're Strategic Digital
                        Marketing Agency</h3>
                    <p className='my-6 text-[#78847D] text-lg '>We've created a full-stack structure for our working workflow processe, were from the funny the century initial all made, have spare to negatives </p>
                    <a className='flex gap-4 items-center' href="/">
                        <span className='text-[#A3B938] text-lg font-medium underline'>See More </span>
                        <img src="/Arrow - Right.svg" alt="" />
                    </a>
                </div>
                <div className='grid gap-6 md:grid-cols-2'>
                    <div className='border md:border-0 md:p-0  p-2 rounded-[4px]'>
                        <img src="/strategy.svg" alt="" />
                        <h4 className='font-semibold text-xl my-4 text-[#253D32] sm:text-[1.5rem]'>Content Strategy</h4>
                        <p className='text-[#78847D] text-lg sm:text-[1.375rem]'>All our content marketing service packages include
                            a custom content strategy</p>
                    </div>
                    <div className='border md:border-0 md:p-0  p-2 rounded-[4px]'>
                        <img src="/pyramid.svg" alt="" />
                        <h4 className='font-medium text-xl my-4 text-[#253D32] sm:text-[1.5rem]'>Content Development</h4>
                        <p className='text-[#78847D] text-lg sm:text-[1.375rem]'>We create some content calendar for your company's must-share contenty</p>
                    </div>
                    <div className='border md:border-0 md:p-0  p-2 rounded-[4px]'>
                        <img src="/creation.svg" alt="" />
                        <h4 className='font-medium text-xl my-4 text-[#253D32] sm:text-[1.5rem]'>Content Creation</h4>
                        <p className='text-[#78847D] text-lg sm:text-[1.375rem]'>Experienced in copywriting and marketing team begins creating content</p>
                    </div>
                    <div className='border md:border-0 md:p-0  p-2 rounded-[4px]'>
                        <img src="/optimisation.svg" alt="" />
                        <h4 className='font-medium text-xl my-4 text-[#253D32] sm:text-[1.5rem]'>Content Optimization</h4>
                        <p className='text-[#78847D] text-lg sm:text-[1.375rem]'>Your content marketing management services also include SEO</p>
                    </div>
                </div>
            </div>
            {/* ****************************************************************************************** */}
            <div className='grid lg:grid-cols-2 lg:p-6 mt-6 lg:mt-12 gap-6'>
                <div className='bg-[#22392e] relative rounded-[8px] flex justify-center items-center aspect-square  lg:max-w-[470px] lg:h-[295px]'>
                    <img src="/logo.svg" alt="" />
                </div>
                <div >
                    <h4 className='text-[#253D32] leading-[1.1] font-bold text-xl md:text-[2.625rem]'>Increase Business on Social Media Reach</h4>
                    <p className='my-4'>Using our network of industry influencers, we help promote your content</p>
                    <button className="bg-gradient-to-tl cursor-pointer from-[#98AA28] to-[#D6FF7E] px-6 py-3 text-white rounded-full font-semibold font-rubik">Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default About
