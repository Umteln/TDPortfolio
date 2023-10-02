import Link from 'next/link';
import React from 'react';
import {
    AiOutlineInstagram,
    AiOutlineLinkedin,
    AiOutlineTwitter,
} from 'react-icons/ai';
const Footer = () => {
    return (
        <div className='flex flex-row justify-center items-center bg-[#14213D] text-white max-w-full w-full h-[75px] p-3'>
            <p className='p-3 text-md'>Follow Me on Social Media </p>
            <div className='flex flex-row justify-center items-center gap-3'>
                <Link href=''>
                    <AiOutlineInstagram size={30} />
                </Link>
                <Link href=''>
                    <AiOutlineLinkedin size={30} />
                </Link>
                <Link href=''>
                    <AiOutlineTwitter size={30} />
                </Link>
            </div>
        </div>
    );
};

export default Footer;
