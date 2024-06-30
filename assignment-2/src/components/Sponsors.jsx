import React from 'react';

const Sponsors = () => {
    return (
        <section className='bg-[#F6FBF9] p-4  '>
            <div className='flex flex-wrap gap-4  items-start justify-between'>
                <img className='w-[40px] sm:w-auto' src="/slack.svg" alt="Slack" />
                <img className='w-[40px] sm:w-auto' src="/amazon.svg" alt="Amazon" />
                <img className='w-[40px] sm:w-auto' src="/logitech.svg" alt="Logitech" />
                <img className='w-[40px] sm:w-auto' src="/google.svg" alt="Google" />
                <img className='w-[40px] sm:w-auto' src="/facebook.svg" alt="Facebook" />
            </div>

        </section>
    );
};

export default Sponsors;
