'use client';
import Image from 'next/image.js';
import { useState } from 'react';

const Card = ({ image, title, description, alt }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className="flex flex-col items-center bg-secondary border-2 border-text
       dark:border-darkText dark:bg-darkSecondary shadow w-11/12
       md:flex-row md:max-w-xl cursor-pointer
        hover:bg-tertiary dark:hover:bg-darkTertiary hover:-translate-y-1 transition-all"
        onClick={() => setShowModal(true)}>
        <Image width={600} height={400} className="object-cover w-full rounded-t-lg h-96 md:h-full
        md:w-48 md:rounded-none md:rounded-l-lg"
          src={image} alt={alt}></Image>
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-text dark:text-darkText">
            {title}</h5>
          <p className="mb-3 font-normal text-text/75 dark:text-darkText/75">
            {description}</p>
        </div>
      </div>
      {showModal ? (<div className="flex justify-center items-center overflow-x-hidden
      cursor-pointer overflow-y-auto fixed inset-0 z-50 focus:outline-none
       bg-text/50 dark:bg-darkText/50 backdrop-blur-sm"
        onClick={() => setShowModal(!showModal)}>
        <div className="relative w-auto mx-auto max-w-3xl">
          <div className="border-1 border-black shadow-lg relative flex flex-col w-full outline-none
          focus:outline-none">
            <div className="relative items-start justify-between border border-solid
            border-gray-300 ">
              <Image width={600} height={400} className="object-cover w-full"
                src={image} alt={alt}></Image>
              <p className=' border-t border-text dark:border-darkText pt-4 pl-4 text-2xl font-bold tracking-tight
               bg-secondary dark:bg-darkSecondary'>{title}</p>
              <p className="bg-secondary dark:bg-darkSecondary pb-4 pl-4
              font-normal text-text/75 dark:text-darkText">
                {description}</p>
            </div>
          </div>

        </div>
      </div>) : null}
    </>
  );
};

export default Card;
