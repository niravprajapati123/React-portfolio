import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_h4o830g',     //'service_Id'
      'template_7vl0zlj',    //'template_Id'
      form.current,
      'wmcgyjYSif43o8ozx'      // 'public key'
    ).then(
      (result) => {
        alert("Message sent successfully!");
        form.current.reset(); // Clear form
      },
      (error) => {
        alert("Something went wrong. Please try again.");
        console.error(error.text);
      }
    );
  };

  return (
    <div className="bg-[#2f4b6b] text-white py-16 px-6 flex justify-center items-center min-h-screen">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Side: Contact Info */}
        <div className="space-y-8">
          <h2 className="text-4xl font-bold">GET IN TOUCH</h2>
          <p className="text-lg">
            Let’s connect to discuss the scope of your project. I will provide you a detailed document of features and their estimation, with no cost involved.
          </p>

          <div>
            <h4 className="text-sm font-bold tracking-wide uppercase">Email</h4>
            <p className="text-2xl font-semibold">nirav10102002@gmail.com</p>
          </div>

          <div>
            <h4 className="text-sm font-bold tracking-wide uppercase">Phone</h4>
            <p className="text-2xl font-semibold">+91 9601692319</p>
          </div>

          <div>
            <h4 className="text-sm font-bold tracking-wide uppercase">Follow Me</h4>
            <div className="flex gap-4 mt-2">
      
              <a href="https://www.instagram.com/code.crafters09/" target="_blank" rel="noopener noreferrer" className="bg-white p-2 rounded text-[#2f4b6b] hover:bg-gray-200">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/in/nirav-prajapati-4b6896286/" target="_blank" rel="noopener noreferrer" className="bg-white p-2 rounded text-[#2f4b6b] hover:bg-gray-200">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://github.com/niravprajapati123" target="_blank" rel="noopener noreferrer" className="bg-white p-2 rounded text-[#2f4b6b] hover:bg-gray-200">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="bg-white p-8 rounded shadow-md">
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="w-full border text-black border-gray-300 px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email*"
              className="w-full border text-black border-gray-300 px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              className="w-full border text-black border-gray-300 px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <textarea
              name="message"
              rows="4"
              placeholder="Message"
              className="w-full border text-black border-gray-300 px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-rose-600 hover:bg-rose-700 text-white font-bold py-3 px-6 rounded transition cursor-pointer"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
