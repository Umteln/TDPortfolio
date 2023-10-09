import React from 'react';
import { BsStarFill } from 'react-icons/bs';
import { FaArrowRight } from 'react-icons/fa';
import { services } from '../objectsAndArrays/arrays';
import Link from 'next/link';

const Services = () => {
    return (
        <section
            id='services'
            className='flex flex-col justify-center items-center'
        >
            <h2 className='text-2xl font-semibold underline'>
                Work & Experience
            </h2>

            <div className='grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4 pt-20 pb-10 lg:pt-40 lg:pb-20'>
                {services.map((service) => (
                    <div key={service.name}>
                        <div className='flex flex-col p-6 bg-[#2e1172] rounded-lg justify-center items-center'>
                            <div className='flex flex-col justify-center items-center text-red-600'>
                                <BsStarFill className='text-[#e85605] text-2xl' />

                                <h3 className='text-lg font-bold mb-2 text-white mt-3 '>
                                    {service.name}
                                </h3>
                            </div>

                            <p className='text-sm leading-6 text-white'>
                                {service.desc}
                            </p>
                            <div>
                                <Link
                                    className='flex justify-center items-center text-[#e85605] gap-3 cursor-pointer hover:text-red-600 hover:scale-105 ease-in duration-300 p-3'
                                    href={`/${service.page}`}
                                >
                                    <p> Explore more </p>
                                    <FaArrowRight />
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;
