"use client";
import React, { useState, forwardRef} from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const ContactUs = forwardRef<HTMLElement>((props, ref) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const templateParams = {
      to_name: "Blue Sky - Rottingdean",
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message
  };
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_SERVICE_ID!,
        process.env.NEXT_PUBLIC_TEMPLATE_ID!,
        templateParams,
        process.env.NEXT_PUBLIC_PUBLIC_KEY!
      );

      toast.success("Your message has been sent successfully!");
      setFormData({ name: "", email: "", message: "" }); // Reset form
    } catch (err) {
      toast.error("Failed to send message. Please try again later.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section ref={ref} id="contact" className="py-16">
      <ToastContainer position="top-center" autoClose={5000} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="contact-us-heading text-3xl font-bold text-gray-900 sm:text-4xl">
            Contact Us
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Get in touch for appointments and inquiries
          </p>
        </div>
        <div className="mt-12">
          <form
            id="contact-form"
            onSubmit={handleSubmit}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 border rounded-xl p-8 shadow-lg"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 pl-2"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                id="name"
                autoComplete="off"
                value={formData.name}
                onChange={handleChange}
                required
                className="pl-2 mt-1 h-10 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 pl-2"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                id="email"
                autoComplete="off"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 pl-2 h-10 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md"
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 pl-2"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows={8}
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Enter your message..."
                className="pl-2 pt-2 resize-none mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md"
              ></textarea>
            </div>
            <div className="sm:col-span-2">
              <button
                type="submit"
                className="w-full inline-flex justify-center py-3 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                {isLoading ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
});


ContactUs.displayName = 'ContactUs';

export default ContactUs;
