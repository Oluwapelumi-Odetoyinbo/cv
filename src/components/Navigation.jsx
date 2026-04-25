import React from 'react';

const Navigation = () => {
    return (
        <nav className="w-full py-6 flex justify-center">
            <div className="w-full max-w-[1200px] px-10 flex justify-between items-center">
                <div className="font-bold text-[20px] flex items-center gap-2">
                    Odetoyinbo Oluwapelumi <span className="w-2.5 h-2.5 bg-yellow border-2 border-black rounded-full inline-block"></span>
                </div>
                
                <div className="hidden lg:flex gap-10">
                    <a href="#" className="text-black font-medium text-[16px] relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-olive">Home</a>
                    <a href="#philosophy" className="text-[#4A4A4A] font-medium text-[16px] transition-colors hover:text-black">Philosophy</a>
                    <a href="#projects" className="text-[#4A4A4A] font-medium text-[16px] transition-colors hover:text-black">Projects</a>
                </div>
                
                <a href="mailto:odetoyinbopelumi42@gmail.com" className="btn btn-primary text-[14px] px-5 py-2.5">Let's talk &rarr;</a>
            </div>
        </nav>
    );
};

export default Navigation;
