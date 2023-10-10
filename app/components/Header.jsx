import React from 'react';
import {
    AiOutlineMail,
    AiOutlineInstagram,
    AiOutlineLinkedin,
    AiOutlineTwitter,
} from 'react-icons/ai';
import Link from 'next/link';
import Image from 'next/image';
import td from '../assets/td.png';

const Header = () => {
    return (
        <header className='flex flex-col justify-center items-center  w-full h-full p-10 text-[#333] mt-10'>
            <Image
                src={td}
                alt='Orange and Grey Tyson Davis Logo'
                className='max-w-full  w-full md:w-1/2'
            />

            <p className='p-3 mb-6 text-lg'>
                Mural <span className='text-[#e85605] font-bold'>|</span> Logo{' '}
                <span className='text-[#e85605] font-bold'>|</span> Graphics{' '}
            </p>

            <div className='flex flex-col justify-between items-center '>
                <div className='flex justify-between items-center '>
                    <Link
                        href='#contact'
                        className='p-3 rounded-lg border border-transparent text-white bg-[#e85605] shadow-xl shadow-gray-600/50 mx-3 hover:bg-red-600 hover:scale-105 ease-in duration-300 cursor-pointer'
                    >
                        <AiOutlineMail size={30} />
                    </Link>
                    <Link
                        href='#contact'
                        className='p-3 rounded-lg border border-transparent text-white bg-[#e85605] shadow-xl shadow-gray-600/50 mx-3 hover:bg-red-600 hover:scale-105 ease-in duration-300 cursor-pointer'
                    >
                        <AiOutlineInstagram size={30} />
                    </Link>
                    <Link
                        href='#contact'
                        className='p-3 rounded-lg border border-transparent text-white bg-[#e85605] shadow-xl shadow-gray-600/50 mx-3 hover:bg-red-600 hover:scale-105 ease-in duration-300 cursor-pointer'
                    >
                        <AiOutlineLinkedin size={30} />
                    </Link>
                    <Link
                        href='#contact'
                        className='p-3 rounded-lg border border-transparent text-white bg-[#e85605] shadow-xl shadow-gray-600/50 mx-3 hover:bg-red-600 hover:scale-105 ease-in duration-300 cursor-pointer'
                    >
                        <AiOutlineTwitter size={30} />
                    </Link>
                </div>

                <div className=' gap-4'>
                    <p className='text-sm md:text-md p-6 text-[#333] italic font-semibold '>
                        Transforming Blank Spaces
                    </p>
                </div>
            </div>
        </header>
    );
};
export default Header;
