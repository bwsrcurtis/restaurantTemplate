import React from 'react';
import Image from 'next/image.js';

const DividerImageOne = () => {
  return (
    <>
      <div className="w-screen h-[375px] relative">
        <div className='-z-10 absolute'>
          <Image src='/donuts.jpg' alt="Row of Cupcakes" width={1920} height={1080}
            className='object-cover h-[375px]'>
          </Image>
        </div>
      </div>
    </>
  );
};

export default DividerImageOne;
