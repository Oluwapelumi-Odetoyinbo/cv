import React from 'react';

const Philosophy = () => {
    return (
        <section id="philosophy" className="py-20 reveal">
            <h2 className="text-[32px] mb-12 pb-4 border-b-2 border-black">Philosophy & Strengths</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white border-2 border-black p-10 rounded-lg shadow-brutalist">
                    <h3 className="text-[24px] mb-4">End-to-End Ownership.</h3>
                    <p>I assume full responsibility for feature delivery across the entire stack, ensuring seamless integration from database to client.</p>
                </div>
                <div className="bg-white border-2 border-black p-10 rounded-lg shadow-brutalist">
                    <h3 className="text-[24px] mb-4">Clean Architecture</h3>
                    <p>An advocate for clean code. I prioritize modular, scalable systems with clean separation of concerns and structured API designs.</p>
                </div>
                <div className="bg-white border-2 border-black p-10 rounded-lg shadow-brutalist">
                    <h3 className="text-[24px] mb-4">Rapid Adaptation</h3>
                    <p>A fast learner capable of aggressively adopting and mastering new frameworks to meet product demands.</p>
                </div>
                <div className="bg-white border-2 border-black p-10 rounded-lg shadow-brutalist">
                    <h3 className="text-[24px] mb-4">Product Focus</h3>
                    <p>I build for the user. I apply product-focused thinking to bridge the gap between technical execution and business value.</p>
                </div>
            </div>
        </section>
    );
};

export default Philosophy;
