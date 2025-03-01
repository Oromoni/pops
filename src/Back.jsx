import React, { useState } from 'react';
import { FaUser, FaEnvelope } from 'react-icons/fa'; // Importing icons
import PhoneInput from 'react-phone-number-input'; // Import the PhoneInput component
import 'react-phone-number-input/style.css'; // Import the styles
import bc from './asset/bc.jpg'; // Import your background image

const Back = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle phone number change
  const handlePhoneChange = (value) => {
    setFormData({ ...formData, phone: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div
      className="min-h-screen w-full bg-cover bg-center relative"
      style={{ backgroundImage: `url(${bc})` }}
    >
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content on top of the image */}
      <div className="relative z-10 flex justify-center items-center pt-16 p-4">
        <form
          onSubmit={handleSubmit}
          className="bg-white w-full sm:w-[550px] p-8 rounded-lg shadow-lg"
        >
          <h2 className="text-2xl font-bold text-center mb-6">Contact Us</h2>
          
          {/* Name Field */}
          <div className="mb-4 relative">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <div className="flex items-center border border-gray-300 rounded-md focus-within:ring-2 focus-within:ring-blue-500">
              <FaUser className="ml-3 text-gray-500" />
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 pl-10 focus:outline-none rounded-md"
                placeholder="Enter your name"
                required
              />
            </div>
          </div>

          {/* Email Field */}
          <div className="mb-4 relative">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <div className="flex items-center border border-gray-300 rounded-md focus-within:ring-2 focus-within:ring-blue-500">
              <FaEnvelope className="ml-3 text-gray-500" />
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 pl-10 focus:outline-none rounded-md"
                placeholder="Enter your email"
                required
              />
            </div>
          </div>

          {/* Phone Field with react-phone-number-input */}
          <div className="mb-4 relative">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <PhoneInput
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handlePhoneChange}
              defaultCountry="US" // Set default country to USA
              international
              className="w-full px-4 py-2 focus:outline-none rounded-md"
              placeholder="Enter your phone number"
              required
            />
            <small className="text-gray-500 mt-2 block">
              Please enter a valid phone number (e.g., +123 456 7890).
            </small>
          </div>

          {/* Message Field */}
          <div className="mb-4 relative">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your message here..."
              required
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Back;
