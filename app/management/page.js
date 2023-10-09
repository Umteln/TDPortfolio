import React from 'react';
import { projects } from '@/app/objectsAndArrays/arrays';
import Image from 'next/image';
import Link from 'next/link';

const ProjectManagement = () => {
    let artwork = projects.filter(
        (projects) => projects.category === 'projects'
    );

    return (
        <div className='flex flex-col justify-center items-center m-10'>
            <h1 className='text-2xl lg:text-4xl font-bold p-3'>
                Project Management{' '}
            </h1>
            <p className='text-md font-semibold p-3'>
                Upcoming & Previous Projects
            </p>
            {/* <div className='grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4 pt-20 pb-10 lg:pt-40 lg:pb-20 text-white'>
                {artwork.map((art) => (
                    <div
                        key={art.name}
                        className='flex flex-col p-6 bg-[#14213D] rounded-lg justify-center items-center'
                    >
                        <h3 className='text-2xl mb-3 font-semibold text-[#e85605]'>
                            {art.name}
                        </h3>
                        <div className='flex  justify-center items-center '>
                            <Image
                                src={art.img}
                                alt='mural'
                                priority
                                width={400}
                                height={400}
                            />
                        </div>
                        <div className='flex flex-col justify-center items-center text-center mt-6'>
                            <h6 className='font-semibold text-md text-[#e85605]'>
                                Description
                            </h6>
                            <p className='text-sm leading-6 p-3'>{art.desc}</p>
                        </div>

                        {/* <div className='grid grid-cols-2 gap-4 md:grid-cols-2 xl:grid-cols-4 pt-10 pb-10 lg:pt-40 lg:pb-20'>
                            {art.tools.map((tool) => (
                                <p
                                    className='font-semibold text-sm text-[#e85605]'
                                    key={tool}
                                >
                                    {tool}
                                </p>
                            ))}
                        </div> 
                    </div>
                ))}
            </div> */}
            <p className='text-4xl font-bold mt-20'>COMING SOON</p>
            <Link
                href='/'
                className='text-lg text-orange-600 cursor-pointer hover:text-orange-700'
            >
                {' '}
                Go Home{' '}
            </Link>
        </div>
    );
};

export default ProjectManagement;
