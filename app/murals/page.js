import React from 'react';
import { projects } from '@/app/objectsAndArrays/arrays';
import Image from 'next/image';

const Murals = () => {
    let murals = projects.filter((projects) => projects.category === 'mural');

    return (
        <div className='flex flex-col justify-center items-center m-10'>
            <h1 className='text-4xl font-bold p-3'>Murals </h1>
            <p className='text-md font-semibold p-3'>
                Upcoming & Previous Projects
            </p>
            <div className='grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4 pt-20 pb-10 lg:pt-40 lg:pb-20'>
                {murals.map((mural) => (
                    <div
                        key={mural.name}
                        className='flex flex-col p-6 bg-[#14213D] rounded-lg justify-center items-center text-white'
                    >
                        <h3 className='text-2xl font-semibold'>{mural.name}</h3>
                        <div className='flex  justify-center items-center p-3'>
                            <Image
                                src={mural.img}
                                alt='mural'
                                width={400}
                                height={400}
                            />
                        </div>
                        <div className='flex flex-col justify-center items-center text-center mt-6'>
                            <h6 className='font-semibold text-md text-[#e85605]'>
                                Description
                            </h6>
                            <p className='text-sm leading-6 p-3'>
                                {mural.desc}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Murals;
