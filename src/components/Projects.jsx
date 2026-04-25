import React from 'react';

const Projects = () => {
    return (
        <section id="projects" className="py-20 reveal">
            <h2 className="text-[32px] mb-12 pb-4 border-b-2 border-black">Selected Projects</h2>
            <div className="flex flex-col gap-12">

                <div className="bg-white border-2 border-black p-10 rounded-lg shadow-brutalist">
                    <div className="flex justify-between items-center mb-6 pb-4 border-b border-[#EAE6DB] flex-wrap gap-4">
                        <span className="text-[20px] font-bold">Velox</span>
                        <span className="text-[14px] bg-cream px-4 py-1.5 rounded-full border border-black font-semibold">React Native, Node.js, MongoDB, JWT</span>
                    </div>
                    <h3 className="text-[28px] mb-4">Inventory & Sales Management Platform.</h3>
                    <p>Architected an admin-first platform establishing backend and mobile parity. Executed multi-unit inventory intake, role-based access control, and robust profit tracking analytics.</p>
                </div>

                <div className="bg-white border-2 border-black p-10 rounded-lg shadow-brutalist">
                    <div className="flex justify-between items-center mb-6 pb-4 border-b border-[#EAE6DB] flex-wrap gap-4">
                        <span className="text-[20px] font-bold">HRS</span>
                        <span className="text-[14px] bg-cream px-4 py-1.5 rounded-full border border-black font-semibold">Angular, Node.js, NgRx, Tailwind CSS</span>
                    </div>
                    <h3 className="text-[28px] mb-4">Comprehensive Hotel Reservation System.</h3>
                    <p>Delivered a production-ready management platform securing dashboard analytics, booking workflows, and room states. Utilized NgRx for reactive state management.</p>
                </div>

                <div className="bg-white border-2 border-black p-10 rounded-lg shadow-brutalist">
                    <div className="flex justify-between items-center mb-6 pb-4 border-b border-[#EAE6DB] flex-wrap gap-4">
                        <span className="text-[20px] font-bold">TimeCapsule</span>
                        <span className="text-[14px] bg-cream px-4 py-1.5 rounded-full border border-black font-semibold">React Native</span>
                    </div>
                    <h3 className="text-[28px] mb-4">Emotional Context Mobile Application.</h3>
                    <p>Building a mobile application allowing parents to curate and store milestone messages for the future, heavily prioritizing intuitive UX and scalable architecture.</p>
                </div>

                <div className="bg-white border-2 border-black p-10 rounded-lg shadow-brutalist">
                    <div className="flex justify-between items-center mb-6 pb-4 border-b border-[#EAE6DB] flex-wrap gap-4">
                        <span className="text-[20px] font-bold">Abacus</span>
                        <span className="text-[14px] bg-cream px-4 py-1.5 rounded-full border border-black font-semibold">Bubble.io</span>
                    </div>
                    <h3 className="text-[28px] mb-4">Property Management MVP.</h3>
                    <p>Rapidly prototyped logic and interaction flows for property owners, delivering extreme usability bounds within no-code constraints.</p>
                </div>

            </div>
        </section>
    );
};

export default Projects;
