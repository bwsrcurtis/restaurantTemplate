import React from 'react';

const Menu = () => {

  return (
    <div id="menu" className="w-full h-fit px-12 py-12 mx-0 text-left lg:flex gap-12 bg-secondary">
      <div className='w-full lg:w-1/3'>
        <h2 className='text-tertiary text-xl pb-6'>Cupcakes</h2>
        <p className='text-text/75 text-lg pb-1'>
          French Toast
        </p>
        <p className='text-text/50 text-lg pb-6'>
          Maple Flavored Cake with Maple Frosting Topped with Bacon
        </p>
        <p className='text-text/75 text-lg pb-1'>
          Vanilla Birthday Cake
        </p>
        <p className='text-text/50 text-lg pb-6'>
          Vanilla funfetti cake, teal-colored vanilla buttercream frosting, rainbow sprinkles
        </p>
        <p className='text-text/75 text-lg pb-1'>
          Chocolate Peanut Butter
        </p>
        <p className='text-text/50 text-lg pb-6'>
          Chocolate cake, whipped peanut butter frosting, crushed reese&apos;s peanut butter cups
        </p>
        <p className='text-text/75 text-lg pb-1'>
          Red Velvet
        </p>
        <p className='text-text/50 text-lg pb-6'>
          Red velvet cake, cream cheese frosting
        </p>
        <p className='text-text/75 text-lg pb-1'>
          Mint Oreo
        </p>
        <p className='text-text/50 text-lg pb-6'>
          Chocolate cake, mint oreo frosting, sprinkled with cookie crumbs
        </p>
      </div>
      <div className='w-full lg:w-1/3'>
        <h2 className='text-tertiary text-xl pb-6'>Cakes</h2>

        <p className='text-text/75 text-lg pb-1'>
          Classic Chocolate with Vanilla or Chocolate Buttercream
        </p>
        <p className='text-text/50 text-lg pb-6'>
          Pairs well with raspberry jam, creamy milk chocolate or rich dark chocolate ganache, or silky dulce de leche
        </p>
        <p className='text-text/75 text-lg pb-1'>
          Classic Vanilla with Vanilla or Chocolate Buttercream
        </p>
        <p className='text-text/50 text-lg pb-6'>
          Pairs well with raspberry jam, creamy milk chocolate or rich dark chocolate ganache, or silky dulce de leche
        </p>
        <p className='text-text/75 text-lg pb-1'>
          Classic Red Velvet with Cream Cheese
        </p>
        <p className='text-text/50 text-lg pb-6'>
          Pairs well with a rich dark chocolate ganache
        </p>
        <p className='text-text/75 text-lg pb-1'>
          French Toast
        </p>
        <p className='text-text/50 text-lg pb-6'>
          Maple Flavored Cake with Maple Frosting Topped with Bacon
        </p>
        <p className='text-text/75 text-lg pb-1'>
          Strawberry Shortcake
        </p>
        <p className='text-text/50 text-lg pb-6'>
          Vanilla cake with fluffy strawberry Italian meringue buttercream and strawberry cream cheese
        </p>
      </div>
      <div className='w-full lg:w-1/3'>
        <h2 className='text-tertiary text-xl pb-6'>Prices</h2>
        <div className='pb-4'>
          <p className='text-text text-lg pb-2'>
            Cupcakes
          </p>
          <div className='flex justify-between pb-1 text-text/75 text-md'>
            <p>1/2 Dozen</p>
            <p>18</p>
          </div>
          <div className='flex justify-between pb-1 text-text/75 text-md'>
            <p>Dozen</p>
            <p>24</p>
          </div>
          <div className='flex justify-between pb-1 text-text/75 text-md'>
            <p>2 Dozen</p>
            <p>32</p>
          </div>
        </div>
        <div className='pb-4'>
          <p className='text-text text-lg pb-2'>
            Cakes
          </p>
          <div className='flex justify-between pb-1 text-text/75 text-md'>
            <p>One Tier (Serves 6)</p>
            <p>25</p>
          </div>
          <div className='flex justify-between pb-1 text-text/75 text-md'>
            <p>Two Tier (Serves 12)</p>
            <p>40</p>
          </div>
          <div className='flex justify-between pb-1 text-text/75 text-md'>
            <p>Three Tier (Serves 18)</p>
            <p>75</p>
          </div>
        </div>
        <div className='pb-4'>
          <p className='text-text text-lg pb-2'>
            Wedding/Event Cakes
          </p>
          <div className='flex justify-between pb-1 text-text/75 text-md'>
            <p>
              Please Contact For Details
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
