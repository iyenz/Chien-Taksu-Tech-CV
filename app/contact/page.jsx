'use client'
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';


function ContactForm() {
  const [state, handleSubmit] = useForm("xayrqrew");


  return (
    
    <form onSubmit={handleSubmit} className='text-black flex flex-col  lg:max-w-[1500px] mx-auto p-8 border border-transparent rounded-md lg:w-[1200px]'>
      <label htmlFor="email" className="mb-4 text-lg">
        Email Address
      </label>
      <input
        id="email"
        type="email"
        name="email"
        className="border border-gray-300 p-3 mb-4 rounded-md text-lg"
      />
      <ValidationError
        prefix="Email"
        field="email"
        errors={state.errors}
        className="text-red-500"
      />

      <label htmlFor='message' className="mb-4 text-lg">
        Message
      </label>
      <textarea
        id="message"
        name="message"
        className='border border-gray-300 p-3 mb-4 rounded-md text-lg'
      />
      <ValidationError
        prefix="Message"
        field="message"
        errors={state.errors}
        className="text-red-500"
      />

      <button
        type="submit"
        disabled={state.submitting}
        className="bg-blue-500 text-white p-3 rounded-md cursor-pointer text-lg"
      >
        {state.submitting ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}

function App() {
  return (
    <div className="bg-white flex items-center justify-center pb-11 -mt-[100px]">
      <ContactForm />
    </div>
  );
}

export default App;
