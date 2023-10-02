import React from 'react';
import Slider from './Slider';

const Projects = () => {
    return (
        <section
            id='projects'
            className='flex flex-col justify-center items-center w-full'
        >
            <h2 className='text-2xl font-semibold underline'>Projects</h2>
            <Slider />
        </section>
    );
};

export default Projects;
