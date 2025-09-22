import { Link } from "react-router-dom";

// Note: In a real-world app, the header would be a separate, reusable component.
function Contact() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header and Top Bar */}
      <div className="bg-white p-4 flex items-center justify-between shadow-sm">
        <button className="text-gray-600">
          {/* Hamburger menu icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <div className="flex items-center">
          {/* Replace with your logo component or image */}
          <img
            src="https://via.placeholder.com/24x24.png?text=Logo"
            alt="Logo"
            className="h-6 mr-1"
          />
          <h1 className="text-lg font-bold text-red-600">Mealsection</h1>
        </div>
        <Link to="/cart" className="text-gray-600">
          {/* Cart icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.105 1.706.894 1.707H17.5a2 2 0 002-2v-10h-2m-2-4l-2 2" />
          </svg>
        </Link>
      </div>

      <div className="p-4 max-w-md mx-auto">
        {/* Page Title */}
        <h2 className="text-lg font-semibold mb-2">Contact Us</h2>
        <p className="text-sm text-gray-600 mb-6">
          We'd love to hear from you! Whether you have a question, complaint,
          feedback, or need support, our team is here to help.
        </p>

        {/* Contact Options Section */}
        <div className="space-y-4">
          {/* Email Card */}
          <div className="bg-white p-4 rounded-lg shadow-sm flex items-center space-x-4">
            {/* Email Icon */}
            <div className="bg-red-500 p-2 rounded-full text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-gray-700">Email</p>
              <a href="mailto:xxxxx@gmail.com" className="text-sm text-gray-500">
                xxxxx@gmail.com
              </a>
            </div>
          </div>

          {/* Call/Message Card */}
          <div className="bg-white p-4 rounded-lg shadow-sm flex items-center space-x-4">
            {/* Phone Icon */}
            <div className="bg-green-500 p-2 rounded-full text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 001 2v10a2 2 000 2h10a2 2 010-4H7a2 2 011-2H17a2 2 011-2H11a2 2 000-4H9a2 2 000-4H7a2 2 010-4H5a2 2 000-4H3zM12 21v-4" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-gray-700">Call/Message</p>
              <a href="tel:0800000000" className="text-sm text-gray-500">
                0800000000
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;