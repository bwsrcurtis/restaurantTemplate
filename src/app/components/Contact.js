import Form from './Form.js';

const Contact = () => {

  return (
    <div className="w-full h-fit px-12 py-12 mx-0 text-left lg:flex bg-secondary">
      <div className='w-full lg:w-1/2 lg:pr-32 pb-8'>
        <div className='pb-4'>
          <p className='pb-4 text-3xl text-tertiary'>HOURS:</p>
          <div className='mb-2'>
            <p className='pb-2'>MONDAY-FRIDAY</p>
            <p className='pb-2'>9:00AM - 5:00PM</p>
          </div>
          <div className='mb-2'>
            <p className='pb-2'>SATURDAY</p>
            <p className='pb-2'>11:00AM - 3:00PM</p>
          </div>
          <div className='mb-2'>
            <p className='pb-2'>SUNDAY</p>
            <p className='pb-2'>Closed</p>
          </div>
        </div>
        <div className='pb-4 text-md lg:text-2xl text-tertiary'>
          <p>888 SALISBURY AVE</p>
          <p>SALISBURY, MD 21860</p>
          <p>888-888-8888</p>
        </div>
        <div className='pb-4 text-md lg:text-2xl text-tertiary'>
          <p>CHRISTINESBAKERY@EMAIL.COM</p>
        </div>
      </div>
      <div className='w-full lg:w-2/3 lg:px-32 lg:justify-self-center'><Form></Form></div>
    </div>
  );
};

export default Contact;
