'use client';
import React, { useState } from 'react';
import { blankContact } from '../objectsAndArrays/objects';
import Image from 'next/image';
import email from '../assets/email.png';

const Contact = () => {
    // const contactCollectionRef = collection(db, 'contacts');
    const [form, setForm] = useState(blankContact);

    const createContact = async (e) => {
        e.preventDefault();
        await addDoc(contactCollectionRef, {
            ...form,
        });

        alert('submitted');
        setForm(blankContact);
    };
    const handleChange = (event) => {
        setForm((prevValue) => ({
            ...prevValue,
            [event.target.name]: event.target.value,
        }));
    };

    return (
        <section
            id='contact'
            className='max-w-full w-full'
        >
            <h2 className='text-2xl font-semibold underline my-12  text-center'>
                Contact
            </h2>

            <div className='bg-[#2e1172] rounded-xl shadow-xl shadow-gray-400 '>
                <div className='flex'>
                    {/* title */}
                    <div className='hidden md:flex flex-col justify-center items-center p-3 mt-3  max-w-full w-full '>
                        <div className='flex flex-col justify-between items-center p-3 mt-3 text-white'>
                            <p className='md:text-2xl lg:text-4xl font-semibold text-red-600 p-3 mt-2'>
                                Let&apos;s Create Together
                            </p>
                            <h1 className='md:text-xl lg:text-3xl  font-bold my-4 '>
                                Tyson Davis
                            </h1>
                            <p className='p-3 mb-6 text-lg'>
                                Mural{' '}
                                <span className='text-red-600 font-bold'>
                                    |
                                </span>{' '}
                                Logo{' '}
                                <span className='text-red-600 font-bold'>
                                    |
                                </span>{' '}
                                Graphics{' '}
                            </p>
                        </div>

                        <Image
                            src={email}
                            alt='contact img'
                            priority
                            className='max-w-full w-[400px] h-[400px] p-3'
                        />
                    </div>
                    {/* form */}
                    <div className='col-span-3 max-w-full w-full lg:p-4 bg-gray-100 rounded-lg m-8'>
                        <div className='p-3 mt-3'>
                            <form onSubmit={createContact}>
                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2 text-[#14213D] font-bold'>
                                        Name
                                    </label>
                                    <input
                                        className='border-2 rounded-lg p-3 flex border-gray-300 w-full'
                                        placeholder='Name'
                                        type='text'
                                        name='name'
                                        id='name'
                                        autoFocus
                                        onChange={handleChange}
                                        value={form.name}
                                    />
                                </div>

                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2 text-[#14213D] font-bold'>
                                        Email
                                    </label>
                                    <input
                                        className='border-2 rounded-lg p-3 flex border-gray-300'
                                        type='email'
                                        placeholder='Email'
                                        name='email'
                                        id='email'
                                        onChange={handleChange}
                                        value={form.email}
                                        autoFocus
                                    />
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2 text-[#14213D] font-bold'>
                                        Subject
                                    </label>
                                    <input
                                        className='border-2 rounded-lg p-3 flex border-gray-300'
                                        type='text'
                                        placeholder='Subject'
                                        name='subject'
                                        id='subject'
                                        onChange={handleChange}
                                        value={form.subject}
                                        autoFocus
                                    />
                                </div>
                                <div className='flex flex-col py-2 '>
                                    <label className='uppercase text-sm py-2 text-[#14213D] font-bold'>
                                        Message
                                    </label>
                                    <textarea
                                        className='border-2 rounded-lg p-3 border-gray-300'
                                        rows='10'
                                        name='message'
                                        id='message'
                                        placeholder='Hello...'
                                        onChange={handleChange}
                                        value={form.message}
                                        autoFocus
                                    ></textarea>
                                </div>
                                <div className='flex justify-center items-center'>
                                    <button className='w-3/4 mt-2 p-3 rounded-lg border border-transparent text-white font-bold bg-[#e85605] shadow-xl  mx-3 hover:bg-red-600 hover:scale-105 ease-in duration-300'>
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
