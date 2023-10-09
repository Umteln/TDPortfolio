'use client';
import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import { slides } from '../objectsAndArrays/arrays';
import Pagination from './Pagination';
import Image from 'next/image';

const Slider = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(1);

    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;

    const currentPosts = slides.slice(firstPostIndex, lastPostIndex);

    return (
        <div className='flex justify-center items-center max-w-[1400px] max-h-[750px] w-full m-auto px-4 relative group'>
            <div className='flex flex-col justify-center items-center w-full mt-6 relative group gap-6 '>
                {currentPosts.map((project) => (
                    <Image
                        key={project.name}
                        src={project.img}
                        alt={project.name}
                        priority
                        className='max-w-full max-h-full h-auto w-auto rounded-xlg'
                    />
                ))}
                <Pagination
                    totalPosts={slides.length + 1}
                    postsPerPage={postsPerPage}
                    setCurrentPage={setCurrentPage}
                    currentPage={currentPage}
                />
            </div>
        </div>
    );
};
export default Slider;
