import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
export default function Contact() {
    const [state, handleSubmit] = useForm("xaqpelky");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
    <section
      className="relative bg-cover bg-center py-16 px-6 dark:bg-black"
      style={{ backgroundImage: "url('/contact.png')" }} // Replace with your image path
      id="contact"
    >
      {/* Overlay */}
      <div className="absolute inset-0  "></div>

      <div className="relative max-w-3xl mx-auto text-center ">
        <p className=" font-semibold uppercase mb-2">Get In Touch</p>
        <h2 className="font-bold text-3xl mb-6">
          Contact <span className="text-[#7c6aea]">Me</span>
        </h2>
 
        {/* Contact Form */}
        {/* <form
          action="https://formspree.io/f/yourFormID" // Replace with your Formspree form ID
          method="POST"
          className="bg-white/90 text-black p-8 rounded-lg shadow-lg flex flex-col gap-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#7c6aea]"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#7c6aea]"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#7c6aea]"
          ></textarea>
          <button
            type="submit"
            className="bg-[#7c6aea] text-white font-semibold px-6 py-3 rounded hover:bg-indigo-700 transition"
          >
            Submit
          </button>
        </form> */}
{state.succeeded ? (
          <p className="bg-green-100 text-green-800 px-6 py-3 rounded-md">
            Thank you! Your message has been sent.
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-white/90 text-black p-8 rounded-lg shadow-lg flex flex-col gap-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#7c6aea]"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#7c6aea]"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              required
              className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#7c6aea]"
            ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />

            <button
              type="submit"
              disabled={state.submitting}
              className="bg-[#7c6aea] text-white font-semibold px-6 py-3 rounded hover:bg-indigo-700 transition"
            >
              Submit
            </button>
          </form>
        )}
        {/* Resume Button */}
        {/* <div className="mt-6">
          <a
            href="/AfshanaZaman_Resume.pdf" // Replace with your resume path
            download
            className="inline-block bg-[#7c6aea] text-white px-6 py-3 rounded hover:bg-[#7c6aea] transition font-semibold"
          >
            Download Resume
          </a>
        </div> */}
      </div>
    </section>
  );
}