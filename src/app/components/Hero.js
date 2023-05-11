import Image from 'next/image.js';

const Hero = () => {
  return (
    <>
      <div className="w-screen h-[860px] relative">
        <div className='-z-10 absolute'>
          <Image src='/cupcakes.jpg' alt="Row of Cupcakes" width={1920} height={1080}
            className='object-cover h-[860px]'
          ></Image>
        </div>
        <div className='relative flex flex-col items-center
			justify-center w-full h-[860px] mx-auto'>
          <h1 className='text-7xl text-center font-bold font-script
          sm:text-8xl lg:text-9xl text-tertiary -translate-y-32'>
            Christine&apos;s Bakery
          </h1>

        </div>
      </div>
    </>
  );
};

export default Hero;
