import Special from './menuComponents/Special.js';
import Bundles from './menuComponents/Bundles.js';
import Cupcakes from './menuComponents/Cupcakes.js';
import SpecialOccasion from './menuComponents/SpecialOccasion.js';

const Menu = () => {
  return (
    <>
      <div id="menu" className="w-full px-12 py-8 mx-0 text-center">
        <p className='text-5xl font-bold mb-4 text-tertiary'>Sweets</p>
        <Special></Special>
        <p className='text-5xl font-bold my-2 text-tertiary'>**</p>
        <Bundles></Bundles>
        <p className='text-5xl font-bold my-2 text-tertiary'>**</p>
        <Cupcakes></Cupcakes>
        <p className='text-5xl font-bold my-2 text-tertiary'>**</p>
        <SpecialOccasion></SpecialOccasion>
      </div>
    </>
  );
};

export default Menu;
