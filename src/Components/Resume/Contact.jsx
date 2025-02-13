import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="bg-black text-white py-16">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 text-center">
        <h2 className="text-3xl font-bold mb-8">
          Get in <span className="text-yellow-500">Touch</span>
        </h2>
        <p className="mb-6">
          I’m available for freelance projects, collaborations, or any web development opportunities. Let’s connect!
        </p>
        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          className="space-y-6 max-w-lg mx-auto"
        >
          {/* Web3Forms API Key */}
          <input type="hidden" name="access_key" value="c11ceca1-1a80-45b9-9b40-441515e92744" />

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full px-4 py-2 rounded-md bg-gray-500 text-black placeholder:text-white focus:outline-none focus:bg-white"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 rounded-md bg-gray-500 text-black placeholder:text-white focus:outline-none focus:bg-white"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            className="w-full h-32 px-4 py-2 rounded-md bg-gray-500 text-black placeholder:text-white focus:outline-none focus:bg-white"
            required
          ></textarea>
          <button
            type="submit"
            className="px-6 py-2 bg-yellow-500 rounded-md text-black font-semibold hover:bg-yellow-600"
          >
            Send Message
          </button>
        </form>
        <p className="mt-6">
          Or email me directly at{" "}
          <a href="mailto:Contact.rahulmudgal@gmail.com" className="text-yellow-500">
          Contact.rahulmudgal@gmail.com
          </a>
        </p>
      </div>
    </section>
  );
};

export default Contact;
