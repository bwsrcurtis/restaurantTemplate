import Image from 'next/image.js';

const About = () => {
  return (
    <>
      <div id="about" className="w-full h-fit px-12 py-12 mx-0 text-left bg-secondary
      lg:flex justify-evenly grow gap-16 flex-row">
        <div className='w-full lg:w-1/2 pr-0 lg:pr-20'>
          <h2 className='text-tertiary text-xl pb-6'>Who Are We</h2>
          <p className='text-text/50 text-lg pb-12'>
            We are a family-owned bakery that has been serving our community for over five years.
            Our passion for baking began in the home, and we have been dedicated to making
            delicious and fresh baked goods ever since.
          </p>
          <p className='text-text/50 text-lg pb-12'>
            At Christine&apos;s Bakery, we believe that every baked good should be made with the
            highest quality ingredients and crafted with care. We use only the freshest ingredients
            in our recipes and ensure that every item is made from scratch daily.
          </p>
          <p className='text-text/50 text-lg pb-12'>
            We are proud to be a part of our community and strive to create a warm and welcoming
            environment for our customers. Thank you for choosing our bakery for your sweet
            cravings, and we look forward to serving you soon!
          </p>

        </div>
        <div className='w-full lg:w-1/2 relative'>
          <Image src='/squareCupcakes.jpg' alt='Pink Smeared Frosting' width={500} height={500}
            className='w-[46rem] h-auto top-2'
          ></Image>
        </div>

      </div >
    </>
  );
};

export default About;
