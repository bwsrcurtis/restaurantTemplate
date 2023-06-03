import React from 'react';
import Image from 'next/image.js';

const DividerImageTwo = () => {

  return (
    <>
      <div className="w-screen h-[400px] relative">
        <div className='-z-10 absolute'>
          <Image src='/divMacaroons.jpg' alt="Row of Cupcakes" width={1920} height={1080}
            className='object-cover h-[400px]'
          ></Image>
        </div>

      </div>
    </>
  );
};

export default DividerImageTwo;
