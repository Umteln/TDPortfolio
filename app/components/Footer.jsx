import Link from 'next/link';
import React from 'react';
import {
    AiOutlineInstagram,
    AiOutlineLinkedin,
    AiOutlineTwitter,
} from 'react-icons/ai';
const Footer = () => {
    return (
        <div className='flex flex-row justify-center items-center bg-[#2e1172] text-white max-w-full w-full p-3 mt-6'>
            <p className='p-3 text-sm'>Follow Me On Social Media </p>
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
