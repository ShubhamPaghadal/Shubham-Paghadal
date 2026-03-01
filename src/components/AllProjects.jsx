"use client";
import React from 'react';
import ProjectSection from './ProjectSection';
import projectsData from '@/data/projectsData';

const AllProjects = () => {
    return (
        <div className="space-y-0">
            {projectsData.map((project) => (
                <ProjectSection
                    key={project.id}
                    {...project}
                />
            ))}
        </div>
    );
};

export default AllProjects;
