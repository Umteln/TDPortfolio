import React from 'react';

import Image from 'next/image';
import { projects } from '@/app/objectsAndArrays/arrays';

const Graphics = () => {
    let graphics = projects.filter(
        (projects) => projects.category === 'graphic'
    );

    return (
        <div className='flex flex-col justify-center items-center m-10'>
            <h1 className='text-2xl lg:text-4xl font-bold p-3'>
                Graphic | Logos | Print
            </h1>
            <p className='text-md font-semibold p-3'>
                Upcoming & Previous Projects
            </p>
            <div className='grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4 pt-20 pb-10 lg:pt-40 lg:pb-20 text-white'>
                {graphics.map((graphic) => (
                    <div
                        key={graphic.name}
                        className='flex flex-col p-6 bg-[#14213D] rounded-lg justify-center items-center'
                    >
                        <h3 className='text-2xl mb-3 font-semibold text-[#e85605]'>
                            {graphic.name}
                        </h3>
                        <div className='flex  justify-center items-center '>
                            <Image
                                src={graphic.img}
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
                            <p className='text-sm leading-6 p-3'>
                                {graphic.desc}
                            </p>
                        </div>

                        <div className='grid grid-cols-2 gap-4 md:grid-cols-2 xl:grid-cols-4 pt-10 pb-10 lg:pt-40 lg:pb-20'>
                            {graphic.tools.map((tool) => (
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
            </div>
        </div>
    );
};

export default Graphics;
