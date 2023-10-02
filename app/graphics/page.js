import React from 'react';
import { projects } from '../objectsAndArrays/arrays';
import Image from 'next/image';

const Graphics = () => {
    let graphics = projects.filter(
        (projects) => projects.category === 'graphic'
    );

    return (
        <div className='flex flex-col justify-center items-center m-10'>
            <h1 className='text-4xl font-bold p-3'>Graphic | Logos | Print</h1>
            <p className='text-md font-semibold p-3'>
                Upcoming & Previous Projects
            </p>
            <div className='grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4 pt-20 pb-10 lg:pt-40 lg:pb-20'>
                {graphics.map((graphic) => (
                    <div
                        key={graphic.name}
                        className='flex flex-col p-6 bg-[#14213D] rounded-lg justify-center items-center'
                    >
                        <div className='flex  justify-center items-center '>
                            <Image
                                src={graphic.img}
                                alt='mural'
                                width={400}
                                height={400}
                            />
                        </div>

                        <p className='text-sm leading-6 text-white'>
                            {graphic.desc}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Graphics;
