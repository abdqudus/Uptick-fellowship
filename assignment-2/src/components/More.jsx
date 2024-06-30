import React from 'react'

const More = () => {
    return (
        <div className='px-8 py-16'>
            <div className='grid gap-6 lg:grid-cols-2'>

                <div>
                    <h3 className='text-xl leading-[1.1] font-bold md:text-[2.625rem]'>Read More Articles From Our Blog</h3>
                    <div className='mt-8'>
                        <div>
                            <img className='w-full' src="/SEO.svg" alt="" />
                        </div>
                        <p className='my-2 text-[#808371] md:text-[18px]'>AUGUST 17, 2021</p>
                        <p className='font-medium text-2xl md:text-[26px'>10 Reasons to invest in SEO copywriting services</p>
                    </div>
                    <button className='px-6 mt-8 py-2 rounded-full border border-[#A3B938] font-semibold text-[#A3B938]'>Read More</button>
                </div>
                <div className='md:mt-8'>
                    <div className='flex items-center justify-center gap-8'>
                        <p>Content Writing</p>
                        <p>Content Marketing</p>
                    </div>
                    <div className='flex flex-wrap lg:grid lg:grid-cols-2 gap-4 mt-12'>
                        <div className='flex-grow'>
                            <div className=''>
                                <img className='w-full' src="/digital.svg" alt="" />
                            </div>
                            <div>
                                <p className='mt-2'>AUGUST 17, 2021</p>
                                <p className='my-3 font-medium text-[1.2rem] md:text-[1.5rem] text-[#253D32]'>How to get hired at a top Digital Marketing</p>
                                <p>Agency life. We've all seen the photos posted on social media - the cool...</p>
                            </div>
                            <span className='w-[68px] flex justify-center items-center mt-8 h-[68px] rounded-full border border-[#A3B938]'>
                                <img src="/show.svg" alt="" />
                            </span>
                        </div>
                        <div className='flex-grow mt-4' >
                            <div>
                                <img className='w-full' src="/copywriting.svg" alt="" />
                            </div>
                            <div>
                                <p className='mt-2'>AUGUST 17, 2021</p>
                                <p className='my-3 font-medium text-[1.2rem]  md:text-[1.5rem] text-[#253D32]'>Copywriting guidelines during the coronavirus</p>
                                <p>Since the coronavirus hit earlier this year, it's hard to go anywhere...</p>
                            </div>
                            <span className='w-[68px] flex justify-center items-center mt-8 h-[68px] rounded-full border border-[#A3B938]'>
                                <img src="/show.svg" alt="" />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='h-[523px]  relative mt-4 text-white p-4 px-8 bg-[#20372c] flex gap-8 flex-col justify-center items-center'>
                <p>Subscribe to get information, latest news and other interesting offers about </p>
                <img src="/logo.svg" alt="" />
                <div className='flex flex-wrap gap-4'>
                    <input className='flex-grow sm:min-w-[372px] bg-[#f6f6f6] outline-0 text-black p-4 rounded-full' type="text" />
                    <button className="bg-gradient-to-tl cursor-pointer from-[#98AA28] to-[#D6FF7E] px-6 py-3 text-white rounded-full font-semibold font-rubik">Subscribe</button>

                </div>
            </div>
        </div>
    )
}

export default More
