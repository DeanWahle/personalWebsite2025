'use client';

import Image from 'next/image';
import { useRef, useEffect } from 'react';

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-24 bg-white dark:bg-[#121212] opacity-0 transition-opacity duration-1000"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            About Me
          </h2>
          <div className="mt-2 w-16 h-1 bg-indigo-600 mx-auto rounded"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-2 flex justify-center lg:justify-end">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full overflow-hidden border-4 border-indigo-100 dark:border-indigo-900/30 shadow-xl">
              {/* Add your profile picture to public/images/profile.jpg */}
              <Image 
                src="/images/profile.jpg" 
                alt="Dean Wahle" 
                fill 
                sizes="(max-width: 768px) 100vw, 300px"
                className="object-cover"
                priority
              />
            </div>
          </div>
          
          <div className="lg:col-span-3">
            <div className="prose prose-lg dark:prose-invert max-w-none space-y-6">
              <p>
                Hello! I'm <strong>Dean</strong>, a software engineer specializing in AI platform engineering at Gusto. I build AI systems that automate complex workflows and enhance user experiences.
              </p>
              
              <p>
                My expertise spans AI/ML technologies and web development, focusing on creating evaluation frameworks and sophisticated AI agents for enterprise applications.
              </p>
              
              <p>
                When I'm not coding, you can find me exploring new technologies and building tools that make development more efficient and enjoyable.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 