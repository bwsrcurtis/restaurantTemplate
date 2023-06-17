const Form = () => {

  return (
    <>
      <form
        name='contact'
        id='contact'
        className='mx-auto w-full'
        action='/success'
        method='POST'
        data-netlify='true'
        data-netlify-honeypot='bot-field'>
        <input type='hidden' name='form-name' value='contact'></input>
        <p className='mb-1 text-xl'>Your Name</p>
        <p className='hidden'>
          <input name="bot-field"></input>
        </p>
        <input
          type='text'
          name='Name'
          placeholder='Jane Smith'
          className='w-full border-solid border-2 text-lg px-2
        border-background dark:border-darkBackground mb-4 dark:placeholder:text-darkPrimary
        text-text dark:text-darkText placeholder:text-text/50'></input>
        <p className='mb-1 text-xl'>Your Email</p>
        <input type='email'
          name='Email'
          placeholder='jane@example.com'
          className='w-full border-solid border-2 text-lg px-2
        border-background dark:border-darkBackground mb-4 dark:placeholder:text-darkPrimary
        text-text dark:text-darkText placeholder:text-text/50'></input>
        <p className='mb-1 text-xl'>Message</p>
        <textarea type='textarea' name='Message'
          className='w-full h-48 border-solid border-2 resize-none text-lg px-2
        border-background dark:border-darkBackground mb-4 dark:placeholder:text-darkPrimary
        text-text dark:text-darkText placeholder:text-text/50'
          placeholder='Your Message'></textarea>
        <button type='submit'
          className='w-full z-10 hover:scale-105 hover:bg-primary rounded-lg
					bg-tertiary text-darkText	transition delay-100 p-2 border border-secondary'>
          Send a Message</button>
      </form>
    </>
  );
};

export default Form;
