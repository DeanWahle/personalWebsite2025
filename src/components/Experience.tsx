'use client';

import { useRef, useEffect } from 'react';

// Work experience data with Gusto consolidated
const experiences = [
  {
    id: 1,
    company: 'Gusto',
    location: 'San Francisco & New York',
    period: 'Aug 2022 - Present',
    roles: [
      {
        title: 'Software Engineer - AI Platform',
        period: 'Jun 2024 - Present',
        location: 'San Francisco Bay Area',
        description: [
          'AI Platform Engineering: Creating AI-powered product features and internal tools to improve workflows for customers and employees alike',
          'Leading development of AI evaluation frameworks to ensure quality and reliability of AI systems',
          'Building sophisticated AI agents to automate complex business workflows'
        ],
        techStack: ['Python', 'LLMs', 'AI Agents', 'AI Evaluations', 'RAG']
      },
      {
        title: 'Software Engineer - Distributed Workforce',
        period: 'Aug 2023 - May 2024',
        location: 'New York City Metropolitan Area',
        description: [
          'Greenfield product development to support multi-state and international employers',
          'Designed and developed GraphQL APIs for seamless data exchange across multiple services',
          'Collaborated with cross-functional teams to deliver solutions for complex international employment scenarios'
        ],
        techStack: ['Ruby on Rails', 'GraphQL', 'TypeScript', 'React', 'PostgreSQL']
      },
      {
        title: 'Software Engineer Intern - Cashout',
        period: 'May 2022 - Aug 2022',
        location: 'San Francisco Bay Area',
        description: [
          'Developed earned wage access solutions to enhance financial wellness for customers',
          'Implemented secure financial transaction flows with appropriate validations and checks'
        ],
        techStack: ['Ruby on Rails', 'GraphQL', 'TypeScript', 'React']
      }
    ]
  },
  {
    id: 2,
    company: 'Businessolver',
    location: 'Remote',
    period: 'May 2021 - Aug 2021',
    roles: [
      {
        title: 'Software Engineer Intern',
        period: 'May 2021 - Aug 2021',
        description: [
          'Full stack engineer using Java (Spring Boot), React.js, and SQL',
          'Created RESTful APIs using Spring Framework and optimized Oracle database queries'
        ],
        techStack: ['Java', 'JavaScript', 'SQL', 'Spring Boot', 'React']
      }
    ]
  },
  {
    id: 3, 
    company: 'Uber',
    location: 'Remote',
    period: 'Dec 2020 - Jan 2021',
    roles: [
      {
        title: 'Open Source Contributor',
        period: 'Dec 2020 - Jan 2021',
        description: [
          'Contributed to M3DB, a distributed time-series database used to store billions of metrics on Uber\'s systems',
          'Implemented improvements and bug fixes through GitHub pull requests and code reviews'
        ],
        techStack: ['Golang', 'Python', 'Distributed Systems']
      }
    ]
  },
  {
    id: 4,
    company: 'Good Uncle',
    location: 'Remote',
    period: 'Sep 2020 - Jan 2021',
    roles: [
      {
        title: 'Software Engineer Intern',
        period: 'Sep 2020 - Jan 2021',
        description: [
          'Full stack engineer developing features for food delivery mobile application using Golang, React Native, and MongoDB',
          'Designed NoSQL database schemas for efficient data storage and retrieval'
        ],
        techStack: ['React Native', 'Go', 'MongoDB']
      }
    ]
  },
];

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
          
          // Animate experience cards when they come into view
          const experienceCards = document.querySelectorAll('.experience-card');
          experienceCards.forEach((card, index) => {
            setTimeout(() => {
              card.classList.add('animate-fade-in-up');
            }, 150 * index);
          });
        }
      },
      { threshold: 0.1 }
    );
    
    const currentRef = sectionRef.current;
    
    if (currentRef) {
      observer.observe(currentRef);
    }
    
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);
  
  return (
    <section 
      id="experience" 
      ref={sectionRef}
      className="py-20 bg-gray-50 dark:bg-[#0a0a0a] opacity-0 transition-opacity duration-1000"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Work Experience
          </h2>
          <div className="mt-2 w-16 h-1 bg-indigo-600 mx-auto rounded"></div>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500 dark:text-gray-400">
            My professional journey and career highlights
          </p>
        </div>
        
        <div className="space-y-8">
          {experiences.map((experience) => (
            <div 
              key={experience.id}
              className="experience-card opacity-0 group"
            >
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
                {/* Company header */}
                <div className="bg-gray-50 dark:bg-gray-800/90 px-6 py-4 border-b border-gray-100 dark:border-gray-700">
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {experience.company}
                    </h3>
                    <span className="text-indigo-600 dark:text-indigo-400 font-medium text-sm">
                      {/* Remove period from all company headers */}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                    {experience.location}
                  </p>
                </div>
                
                {/* Roles */}
                <div className="divide-y divide-gray-100 dark:divide-gray-700">
                  {experience.roles.map((role, index) => (
                    <div key={index} className="px-6 py-5">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                        <h4 className="text-base font-semibold text-gray-900 dark:text-white">
                          {role.title}
                        </h4>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {role.period}
                        </span>
                      </div>
                      
                      <ul className="mt-2 space-y-1 text-sm text-gray-600 dark:text-gray-300">
                        {role.description.map((item, i) => (
                          <li key={i} className="flex items-start">
                            <svg className="w-4 h-4 text-indigo-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <div className="flex flex-wrap gap-1.5 mt-3">
                        {role.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 