import React from 'react';

const Footer = () => {
    return (
        <footer className="border-t-2 border-black py-20 px-6 bg-white reveal">
            <div className="max-w-[1200px] mx-auto flex flex-col items-center gap-6 text-center">
                <p><strong className="font-bold text-black text-[18px]">Odetoyinbo Oluwapelumi</strong></p>
                <p>odetoyinbopelumi42@gmail.com • 08101435936 • Lagos, Nigeria</p>

                <div className="flex gap-4">
                    <a href="https://linkedin.com/in/odetoyinbo-oluwapelumi" target="_blank" rel="noreferrer" className="btn btn-secondary text-[16px]">LinkedIn</a>
                    <a href="https://github.com/Oluwapelumi-Odetoyinbo" target="_blank" rel="noreferrer" className="btn btn-secondary text-[16px]">GitHub</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
