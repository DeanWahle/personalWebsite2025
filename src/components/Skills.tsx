'use client';

import { useRef, useEffect } from 'react';

const frontendSkills = [
  { name: 'React', level: 90 },
  { name: 'JavaScript', level: 95 },
  { name: 'TypeScript', level: 85 },
  { name: 'HTML/CSS', level: 90 },
  { name: 'Tailwind CSS', level: 85 },
  { name: 'Next.js', level: 80 },
];

const backendSkills = [
  { name: 'Node.js', level: 85 },
  { name: 'Express', level: 80 },
  { name: 'Python', level: 75 },
  { name: 'Django', level: 70 },
  { name: 'SQL', level: 80 },
  { name: 'GraphQL', level: 75 },
];

const otherSkills = [
  { icon: '🔄', name: 'CI/CD', description: 'GitHub Actions, Jenkins' },
  { icon: '☁️', name: 'Cloud', description: 'AWS, Google Cloud' },
  { icon: '🛢️', name: 'Databases', description: 'MongoDB, PostgreSQL, MySQL' },
  { icon: '🧪', name: 'Testing', description: 'Jest, React Testing Library' },
  { icon: '📱', name: 'Mobile', description: 'React Native, Flutter basics' },
  { icon: '🔒', name: 'Security', description: 'OWASP, Auth best practices' },
  { icon: '⚙️', name: 'DevOps', description: 'Docker, Kubernetes basics' },
  { icon: '🌐', name: 'Web Services', description: 'REST API, WebSockets' },
];

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
          
          // Animate skill bars when they come into view
          const skillBars = document.querySelectorAll('.skill-bar-progress');
          skillBars.forEach((bar, index) => {
            setTimeout(() => {
              (bar as HTMLElement).style.width = (bar as HTMLElement).dataset.level + '%';
            }, 100 * index);
          });
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
      id="skills" 
      ref={sectionRef}
      className="py-24 bg-gray-50 dark:bg-[#0a0a0a] opacity-0 transition-opacity duration-1000"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            My Skills
          </h2>
          <div className="mt-2 w-16 h-1 bg-indigo-600 mx-auto rounded"></div>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400">
            Technologies and tools I work with
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Frontend Development</h3>
            <div className="space-y-5">
              {frontendSkills.map((skill) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} />
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Backend Development</h3>
            <div className="space-y-5">
              {backendSkills.map((skill) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} />
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-20">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-8 text-center">Other Skills & Technologies</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {otherSkills.map((skill) => (
              <SkillCard key={skill.name} icon={skill.icon} name={skill.name} description={skill.description} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillBar({ name, level }: { name: string; level: number }) {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="text-gray-700 dark:text-gray-300 font-medium">{name}</span>
        <span className="text-gray-500 dark:text-gray-400">{level}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
        <div
          className="skill-bar-progress bg-indigo-600 h-2.5 rounded-full transition-all duration-1000 ease-out"
          style={{ width: '0%' }}
          data-level={level}
        ></div>
      </div>
    </div>
  );
}

function SkillCard({ icon, name, description }: { icon: string; name: string; description: string }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="text-3xl mb-2">{icon}</div>
      <h4 className="text-lg font-medium text-gray-900 dark:text-white">{name}</h4>
      <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">{description}</p>
    </div>
  );
} 