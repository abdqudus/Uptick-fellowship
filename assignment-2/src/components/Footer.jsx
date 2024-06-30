import React from 'react'

const Footer = () => {
    return (
        <div className='px-8 py-16'>
            <div className='grid sm:grid-cols-[2fr_3fr] gap-8 '>
                <div>
                    <img src="/logo-dark.svg" alt="" />
                    <p className='my-4 text-[#78847D] text-lg md:text-[20px]'>Marketing is a company that focus on developing company's strategy for increase digital marketing</p>
                    <img src="/socials.svg" alt="" />
                </div>
                {/* ************************************************* */}
                <div className='flex flex-wrap justify-between gap-4'>
                    <div>
                        <h3 className='text-[#253D32] text-[1.5rem] font-bold'>Menu</h3>
                        <ul className=' text-[#78847D] flex flex-col gap-3 mt-6'>
                            <li className='text-[##78847D]'>Home</li>
                            <li className='text-[##78847D]'>Features</li>
                            <li className='text-[##78847D]'>Pricing About</li>
                            <li className='text-[##78847D]'>Contact Us</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className='text-[#253D32] text-[1.5rem] font-bold'>Services</h3>
                        <ul className=' text-[#78847D] flex flex-col gap-3 mt-6'>
                            <li className='text-[##78847D]'>Content Strategy</li>
                            <li className='text-[##78847D]'>Content Development</li>
                            <li className='text-[##78847D]'>Content Creation</li>
                            <li className='text-[##78847D]'>Content Optimization</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className='text-[#253D32] text-[1.5rem] font-bold'>Company</h3>
                        <ul className=' text-[#78847D] flex flex-col gap-3 mt-6'>
                            <li className='text-[##78847D]'>Site Map</li>
                            <li className='text-[##78847D]'>Terms Of Use</li>
                            <li className='text-[##78847D]'>Privacy Notice</li>
                            <li className='text-[##78847D]'>Cookies</li>
                            <li className='text-[##78847D]'>Modern Slavery </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
