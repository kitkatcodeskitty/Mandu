
import React, { useState } from 'react';

export const Contact = () => {
  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Validate inputs
  const validate = () => {
    let tempErrors = {};

    if (!formData.firstName.trim()) tempErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) tempErrors.lastName = "Last name is required";
    if (!formData.email) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid";
    }
    if (formData.phone && !/^\+?\d{7,15}$/.test(formData.phone)) {
      tempErrors.phone = "Enter a valid phone number";
    }
    if (!formData.message.trim()) tempErrors.message = "Message is required";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Form submission logic would go here
      setIsSubmitted(true);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
      setErrors({});
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }
  };

  return (
      <div className="bg-white-50 min-h-screen px-6 py-16 flex items-center justify-center">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Side - Form */}
        <div className="lg:col-span-7 bg-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Contact Us</h2>
          <p className="text-gray-600 mb-8">
            Get in touch with us for any questions or support. We're here to help!
          </p>

          {/* Success Message */}
          {isSubmitted && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-green-600 text-sm">
                Thank you for contacting us! We'll get back to you soon.
              </p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* First Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className={`w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#46052D] focus:outline-none ${
                  errors.firstName ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
              )}
            </div>

            {/* Last Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className={`w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#46052D] focus:outline-none ${
                  errors.lastName ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#46052D] focus:outline-none ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#46052D] focus:outline-none ${
                  errors.phone ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
              )}
            </div>

            {/* Message */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                What do you have in mind?
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                placeholder="Please enter query..."
                className={`w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#46052D] focus:outline-none ${
                  errors.message ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <div className="md:col-span-2">
              <button 
                type="submit"
                className="w-full bg-[#46052D] text-white py-3 rounded-xl hover:bg-[#2d0319] transition duration-200"
              >
                Submit
              </button>
            </div>
          </form>
        </div>

        {/* Right Side - Contact Info */}
        <div className="lg:col-span-5 bg-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Get in Touch</h2>
          <p className="text-gray-600 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <div className="space-y-6">
            <div className="flex items-center">
              <img
                src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ET21.jpg"
                alt="phone"
                className="w-6 h-6 mr-3"
              />
              <span className="text-gray-700">+1258 3258 5679</span>
            </div>

            <div className="flex items-center">
              <img
                src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ET22.jpg"
                alt="email"
                className="w-6 h-6 mr-3"
              />
              <span className="text-gray-700">hello@workik.com</span>
            </div>

            <div className="flex items-center">
              <img
                src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ET23.jpg"
                alt="address"
                className="w-6 h-6 mr-3"
              />
              <span className="text-gray-700">102 street, y cross 485656</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex space-x-4 mt-8">
            <a href="#">
              <img
                src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-mail.svg"
                alt="mail"
                className="w-6 h-6"
              />
            </a>
            <a href="#">
              <img
                src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-twitter.svg"
                alt="twitter"
                className="w-6 h-6"
              />
            </a>
            <a href="#">
              <img
                src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-insta.svg"
                alt="instagram"
                className="w-6 h-6"
              />
            </a>
            <a href="#">
              <img
                src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-fb.svg"
                alt="facebook"
                className="w-6 h-6"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
