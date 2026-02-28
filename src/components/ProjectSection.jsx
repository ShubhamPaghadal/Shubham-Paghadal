"use client";
import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectSection = (props) => {
    const { id, layout = 'standard' } = props;
    const isReverse = layout === 'reverse';

    return (
        <section id={`project-${id}`} className="max-w-[1400px] mx-auto px-4 sm:px-8 py-16 sm:py-24 lg:py-32 relative z-10 overflow-hidden">
            {/* Background Decoration */}
            <div className={`absolute ${isReverse ? 'top-[-5%] right-[-5%]' : 'bottom-[-5%] left-[-5%]'} w-[200px] sm:w-[300px] h-[200px] sm:h-[300px] rounded-full border-20 sm:border-30 ${id % 2 === 0 ? 'border-brand-green/10' : 'border-brand-yellow/10'} blur-sm z-0 opacity-50`}></div>

            <ProjectCard {...props} />
        </section>
    );
};

export default ProjectSection;
