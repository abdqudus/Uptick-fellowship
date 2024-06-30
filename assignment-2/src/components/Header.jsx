
const Header = () => {
    return (
        <header className="bg-[#243c30] -z-50 h-screen relative p-4">
            <div className="lg:px-[3rem] h-full  flex flex-col sm:px-[1rem] font-rubik text-base">
                <nav className="text-white flex justify-between items-center">
                    <div>

                        <img src="/logo.svg" alt="Logo" />
                    </div>
                    <NavLinks />
                    <button className="bg-[#3d5248] md:flex hidden border font-rubik  border-btn-border px-5 py-2 rounded-full">Free trial</button>
                    <img className="md:hidden" src="/hamburger.png" alt="Hamburger menu" />
                </nav>
                <div className="flex flex-grow justify-between py-[4.5rem] md:py-6 lg:justify-start lg:py-0 text-gray-100  flex-col gap-3 mt-6 items-center md:mt-12">
                    <div className="flex items-center md:gap-6 flex-col">

                        <p className="flex font-semibold text-2xl sm:text-[2.25rem] items-center gap-4">
                            <span className="w-[30px] md:w-[60px] rounded-[5px] bg-white h-[1px]"></span>
                            <span>The Best</span>
                            <span className="w-[30px] md:w-[60px] rounded-[5px] bg-white h-[1px]"></span>
                        </p>
                        <p className="font-bold md:flex flex-col justify-center items-center lg:block sm:text-[5.625rem] leading-[1.1] text-3xl">
                            <span>Digital </span>
                            <span className="relative inline-block ">
                                Marketing
                                <div className="left-0 right-0 -bottom-0 absolute">
                                    <img src="/wave.svg" alt="" />
                                </div>
                            </span>
                        </p>
                    </div>
                    <p className="max-w-[600px] text-[1.125rem] text-center mt-6 leading-[40px]">Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer</p>
                    <button className="bg-gradient-to-tl cursor-pointer from-[#98AA28] to-[#D6FF7E] px-6 py-3  rounded-full font-semibold font-rubik">Get Started</button>
                </div>
            </div>
            <CubeDiv />
        </header>
    )
}

export default Header

const NavLinks = () => {
    return (
        <ul className="md:flex gap-6 hidden" >
            <li>
                <a href="/">Features</a>

            </li>
            <li>
                <a href="/">Pricing</a>
            </li>
            <li>
                <a href="/">About</a>
            </li>
            <li>
                <a href="/">Contact us</a>
            </li>

        </ul>
    )
}
const CubeDiv = () => {
    return (
        <div className="absolute -z-40 bottom-0 left-0 right-0 flex items-end justify-between">
            <img width={'150'} src="/left.svg" alt="" />
            <img width={'50'} src="/right.png" alt="" />
        </div>
    )
}