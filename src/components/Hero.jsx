import React from 'react';

const Hero = () => {
    return (
        <section className="flex flex-col lg:flex-row items-center justify-between gap-[60px] min-h-[70vh] w-full mt-10 lg:mt-0 reveal">
            <div className="flex-1 max-w-[540px] flex flex-col items-center text-center lg:items-start lg:text-left">
                <div className="text-[12px] font-bold uppercase tracking-[0.15em] text-[#4A4A4A] mb-6">
                    DELIVERING SCALABLE APPS — CURRENTLY @FREELANCE
                </div>

                <h1 className="text-[clamp(48px,5vw,64px)] leading-[1.1] mb-6 font-bold">
                    Systems architecture<br className="hidden lg:block" />
                    that <span className="text-olive font-extrabold">scale</span>, not<br className="hidden lg:block" />
                    just <span className="text-olive font-extrabold">clean code</span>
                </h1>

                <p className="text-[20px] leading-[1.5] mb-10 text-[#4A4A4A]">
                    I combine solid engineering principles and thoughtful system design to help businesses run flawlessly and efficiently.
                </p>

                <a href="#projects" className="btn btn-primary text-[18px] px-8 py-4 shadow-brutalist hover:shadow-brutalist-hover transition-shadow">
                    See what I've built
                </a>
            </div>

            <div className="flex-1 relative h-[560px] min-w-[560px] hidden lg:block">
                {/* Main Pill */}
                <div className="absolute border-[3px] border-black rounded-full overflow-hidden w-[280px] h-[500px] left-0 top-[20px] z-[2] bg-[#F2EAD8]">
                    <img src="./asset/img/me-removebg-preview.png" alt="Odetoyinbo Oluwapelumi" className="w-full h-full object-cover object-top" />
                </div>

                {/* Secondary Pill */}
                <div className="absolute border-[3px] border-black rounded-full overflow-hidden w-[250px] h-[460px] left-[310px] top-[80px] z-[1] bg-yellow">
                    <img src="./asset/img/phone_onboarding.png" alt="Mobile App UI" className="w-full h-full object-cover object-center" />
                </div>

                {/* Floating Badges */}
                <div className="absolute bg-white rounded-full py-3 px-6 text-[14px] font-semibold shadow-[0_10px_30px_rgba(0,0,0,0.1)] whitespace-nowrap z-10 top-[60px] left-[170px] flex items-center gap-2">
                    <span className="w-2.5 h-2.5 bg-yellow rounded-full inline-block"></span> Full-Stack Engineer
                </div>

                <div className="absolute bg-white rounded-[24px_24px_24px_8px] py-6 px-8 text-[#4A4A4A] leading-[1.5] font-medium text-[16px] shadow-[0_10px_40px_rgba(0,0,0,0.1)] z-10 bottom-[20px] left-[-40px]">
                    Designing systems that help<br />
                    <strong className="text-black font-bold">businesses scale efficiently</strong>
                </div>

                <div className="absolute w-12 h-12 rounded-full flex items-center justify-center shadow-[0_10px_20px_rgba(0,0,0,0.1)] border-[3px] border-black z-10 left-[271px] top-[240px] bg-white p-0">
                    <span className="w-4 h-4 rounded-full bg-yellow border-2 border-black"></span>
                </div>

                    {/* <div className="absolute bg-white rounded-full w-[100px] h-[100px] flex flex-col justify-center items-center text-[12px] leading-[1.2] shadow-[0_10px_30px_rgba(0,0,0,0.1)] z-10 top-[40px] right-0 text-center">
                        <strong className="text-[18px] font-bold text-black">5+ years</strong>
                        <span className="text-black">experience</span>
                    </div> */}
            </div>
        </section>
    );
};

export default Hero;
