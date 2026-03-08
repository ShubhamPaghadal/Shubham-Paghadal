"use client";
import React from 'react';
import ProjectSection from './ProjectSection';
import portfolioProjectsData from '@/data/portfolioProjectsData';

const PortfolioProjects = () => {
    return (
        <div className="space-y-0">
            {portfolioProjectsData.map((project) => (
                <ProjectSection
                    key={project.id}
                    {...project}
                />
            ))}
        </div>
    );
};

export default PortfolioProjects;
