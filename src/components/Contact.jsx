import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-[800px] bg-white flex justify-center items-center p-4 my-2 text-center lg:h-screen"
    >
      <form
        method="POST"
        action="https://getform.io/f/pbnvyqpb"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8 flex justify-center">
          <p className="text-4xl font-bold inline border-b-4 border-[#0092FF] text-black">
            Contact
          </p>
        </div>
        <p className="text-black py-4">Send me a message!</p>
        <div className="flex flex-col border-gray border-2 p-6 rounded-lg">
          <input
            className="bg-white p-2 border-gray border-2 rounded-lg"
            type="text"
            placeholder="Name"
            name="name"
          />
          {/* add hidden Honeypot input to prevent spams --> */}
          <input
            type="hidden"
            name="_gotcha"
            // style="display: none !important"
          />
          <input
            className="my-4 p-2 bg-white border-gray border-2 rounded-lg"
            type="email"
            placeholder="Email"
            name="email"
          />
          <textarea
            className="bg-white p-2 border-gray border-2 rounded-lg"
            name="message"
            rows="10"
            placeholder="Message"
          ></textarea>
          <button className="text-[#0092FF] border-2 border-[#0092FF] rounded-lg font-medium hover:bg-[#0092FF] hover:text-white px-4 py-3 my-8 mx-auto flex items-center">
            Let's Collaborate
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
