'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import {
    AiOutlineClose,
    AiOutlineMail,
    AiOutlineMenu,
    AiOutlineInstagram,
    AiOutlineLinkedin,
    AiOutlineTwitter,
} from 'react-icons/ai';

// import { useRouter } from 'next/router';

const Navbar = () => {
    const [nav, setNav] = useState(false);

    // const router = useRouter();

    // useEffect(() => {
    //   if (
    //     router.asPath === '/property' ||
    //     router.asPath === '/crypto' ||
    //     router.asPath === '/netflix' ||
    //     router.asPath === '/twitch'
    //   ) {
    //     setNavBg('transparent');
    //     setLinkColor('#ecf0f3');
    //   } else {
    //     setNavBg('#ecf0f3');
    //     setLinkColor('#1f2937');
    //   }
    // }, [router]);

    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <nav
            className={
                'bg-[#14213D] fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300 text-white m-auto'
            }
        >
            <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
                <Link href='/'>
                    <p className=' text-white font-bold text-lg cursor-pointer'>
                        TD
                    </p>
                </Link>
                <div>
                    <ul className='hidden md:flex text-white'>
                        <li className='ml-10 text-sm uppercase hover:border-b'>
                            <Link href='/#home'>Home</Link>
                        </li>
                        <li className='ml-10 text-sm uppercase hover:border-b'>
                            <Link href='/#services'>Services</Link>
                        </li>
                        <li className='ml-10 text-sm uppercase hover:border-b'>
                            <Link href='/#gallery'>Gallery</Link>
                        </li>

                        <li className='ml-10 text-sm uppercase hover:border-b'>
                            <Link href='/#contact'>Contact</Link>
                        </li>
                    </ul>
                    {/* Hamburger Icon */}
                    <div
                        style={{ color: '#fff' }}
                        onClick={handleNav}
                        className='md:hidden'
                    >
                        <AiOutlineMenu size={25} />
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {/* Overlay */}
            <div
                className={
                    nav
                        ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70'
                        : ''
                }
            >
                {/* Side Drawer Menu */}
                <div
                    className={
                        nav
                            ? ' fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#14213D] p-10 ease-in duration-500'
                            : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
                    }
                >
                    <div>
                        <div className='flex w-full items-center justify-between'>
                            <Link href='/'>
                                <p className='text-3xl font-bold cursor-pointer'>
                                    TD
                                </p>
                            </Link>
                            <div
                                onClick={handleNav}
                                className='bg-red-600 rounded-full shadow-lg shadow-gray-900 p-3 cursor-pointer'
                            >
                                <AiOutlineClose />
                            </div>
                        </div>
                        <div className='border-b border-gray-300 my-4'>
                            <p className='w-[85%] md:w-[90%] py-4 text-red-600 font-semibold'>
                                Transforming Blank Spaces
                            </p>
                        </div>
                    </div>
                    <div className='py-4 flex flex-col'>
                        <ul className='uppercase'>
                            <Link href='/'>
                                <li
                                    onClick={() => setNav(false)}
                                    className='py-4 text-sm'
                                >
                                    Home
                                </li>
                            </Link>
                            <Link href='/#services'>
                                <li
                                    onClick={() => setNav(false)}
                                    className='py-4 text-sm'
                                >
                                    Services
                                </li>
                            </Link>
                            <Link href='/#gallery'>
                                <li
                                    onClick={() => setNav(false)}
                                    className='py-4 text-sm'
                                >
                                    Gallery
                                </li>
                            </Link>

                            <Link href='/#contact'>
                                <li
                                    onClick={() => setNav(false)}
                                    className='py-4 text-sm'
                                >
                                    Contact
                                </li>
                            </Link>
                        </ul>
                        <div className='pt-40'>
                            <p className='uppercase tracking-widest  text-white p-3'>
                                Let&#39;s Connect
                            </p>
                            <div className='flex justify-between items-center '>
                                <Link
                                    href='#contact'
                                    className='p-3 rounded-lg border border-transparent text-white bg-red-700 shadow-xl shadow-gray-900 mx-3 hover:bg-red-600 hover:scale-105 ease-in duration-300 cursor-pointer'
                                >
                                    <AiOutlineMail size={30} />
                                </Link>
                                <Link
                                    href='#contact'
                                    className='p-3 rounded-lg border border-transparent text-white bg-red-700 shadow-xl shadow-gray-900 mx-3 hover:bg-red-600 hover:scale-105 ease-in duration-300 cursor-pointer'
                                >
                                    <AiOutlineInstagram size={30} />
                                </Link>
                                <Link
                                    href='#contact'
                                    className='p-3 rounded-lg border border-transparent text-white bg-red-700 shadow-xl shadow-gray-900 mx-3 hover:bg-red-600 hover:scale-105 ease-in duration-300 cursor-pointer'
                                >
                                    <AiOutlineLinkedin size={30} />
                                </Link>
                                <Link
                                    href='#contact'
                                    className='p-3 rounded-lg border border-transparent text-white bg-red-700 shadow-xl shadow-gray-900 mx-3 hover:bg-red-600 hover:scale-105 ease-in duration-300 cursor-pointer'
                                >
                                    <AiOutlineTwitter size={30} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
