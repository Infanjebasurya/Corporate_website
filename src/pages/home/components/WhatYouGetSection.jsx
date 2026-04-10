import React, { useState, useEffect, useRef } from 'react';
import Teame from '../../../assets/Images/corprate1.jpg';
import TechTotaLogo from '../../../assets/Images/image.png';

const Transforming = () => {
    const [stats, setStats] = useState([
        { number: '0+', label: 'Successful Deployments', target: 50, animated: false },
        { number: '0+', label: 'Client Partnerships', target: 50, animated: false },
        { number: '0+', label: 'Technology Stack', target: 30, animated: false },
        { number: '0+', label: 'Years of Excellence', target: 1, animated: false }
    ]);
    
    const sectionRef = useRef(null);
    const [hasAnimated, setHasAnimated] = useState(false);

    // Function to animate numbers
    const animateNumbers = () => {
        if (hasAnimated) return;
        
        const duration = 2000; // 2 seconds animation
        const steps = 60; // Number of animation steps
        const stepDuration = duration / steps;

        stats.forEach((stat, index) => {
            let currentStep = 0;
            const startValue = 0;
            const endValue = stat.target;
            const increment = endValue / steps;

            const interval = setInterval(() => {
                currentStep++;
                const currentValue = Math.min(Math.floor(startValue + (increment * currentStep)), endValue);
                
                setStats(prevStats => {
                    const newStats = [...prevStats];
                    newStats[index] = {
                        ...newStats[index],
                        number: currentValue + '+'
                    };
                    return newStats;
                });

                if (currentStep >= steps) {
                    clearInterval(interval);
                }
            }, stepDuration);
        });
        
        setHasAnimated(true);
    };

    // Scroll observer to trigger animation when component comes into view
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !hasAnimated) {
                        animateNumbers();
                    }
                });
            },
            { threshold: 0.3 } // Trigger when 30% of the component is visible
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, [hasAnimated]);

    return (
        <div ref={sectionRef} className="w-full bg-white py-8 sm:py-12">
            <div className="w-full mx-auto">
                <div className="relative w-full h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] xl:h-[550px]">

                    {/* Background Image - Full Screen Cover Without Gaps */}
                    <div className="absolute inset-0 w-full h-full overflow-hidden">
                        <img
                            src={Teame}
                            alt="TechTota Team"
                            className="w-full h-full object-cover"
                            onError={(e) => {
                                e.target.style.display = 'none';
                            }}
                        />
                        {/* Content Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-transparent flex items-center">
                            <div className="w-full mx-auto px-4 sm:px-6 md:px-8 text-center text-white">
                                
                                {/* Button positioned at the top */}
                                <div className="mb-0 sm:mb-6 md:mb-8">
                                    <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-5 sm:px-6 md:px-7 py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-base md:text-lg shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2 mx-auto border border-blue-500/30">
                                        Know More About
                                        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                        </svg>
                                    </button>
                                </div>

                                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 leading-tight">
                                    Transforming Ideas into <span className="text-orange-500">Digital Reality</span>
                                </h2>
                                <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-4 sm:mb-6 md:mb-8 max-w-2xl md:max-w-3xl mx-auto leading-relaxed px-2">
                                    Leveraging cutting-edge technologies to build scalable, high-performance solutions
                                    that drive business growth and digital transformation.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Side - Stats Box (50% Inside, 50% Outside Background) */}
                    <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2 w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%] xl:w-[75%] h-[140px] sm:h-[150px] md:h-[160px] lg:h-[170px] bg-black p-4 sm:p-6 lg:p-8 flex items-center justify-center shadow-2xl">

                        {/* Logo Badge - Centered on Top with Logo Image */}
                        <div className="absolute -top-6 sm:-top-8 md:-top-10 left-1/2 transform -translate-x-1/2">
                            <div className="bg-white rounded-full p-2 sm:p-3 shadow-2xl">
                                <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 flex items-center justify-center">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <svg className="w-full h-full animate-spin" style={{ animationDuration: '25s' }} viewBox="0 0 100 100">
                                            <defs>
                                                <path id="circlePath" d="M 50,50 m 0,-42 a 42,42 0 1,1 0,84 a 42,42 0 1,1 0,-84" />
                                            </defs>
                                            <text fill="#374151" fontSize="6" fontWeight="700" letterSpacing="1">
                                                <textPath href="#circlePath" startOffset="0%">
                                                    #1 TOP MOBILE & WEB DEVELOPMENT COMPANY•
                                                    #2 QUALITY DELIVERY
                                                </textPath>
                                            </text>
                                        </svg>
                                    </div>
                                    <div className="text-center z-10">
                                        {/* TechTota Logo Image */}
                                        <img 
                                            src={TechTotaLogo} 
                                            alt="TechTota Logo" 
                                            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 object-contain"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Stats Grid - Responsive with Auto-Incrementing Numbers */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 md:gap-6 w-full mt-8 sm:mt-10 md:mt-12">
                            {stats.map((stat, index) => (
                                <div key={index} className="text-center">
                                    <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1 transition-all duration-300">
                                        {stat.number}
                                    </div>
                                    <div className="text-gray-400 text-xs sm:text-sm md:text-base font-normal leading-tight">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Transforming;