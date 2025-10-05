import { Link } from "react-router-dom";

function Contact() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* ✅ Page Content only (Navbar removed) */}
      <div className="p-4 max-w-2xl mx-auto">
        <h2 className="text-lg md:text-2xl font-semibold mb-2">Contact Us</h2>
        <p className="text-sm md:text-base text-gray-600 mb-6">
          We'd love to hear from you! Whether you have a question, complaint,
          feedback, or need support, our team is here to help.
        </p>

        {/* Contact Options */}
        <div className="space-y-4 md:space-y-0 md:grid md:grid-cols-2 md:gap-4">
          {/* Email Card */}
          <div className="bg-white p-4 rounded-lg shadow-sm flex items-center space-x-4 hover:shadow-md transition">
            <div className="bg-red-500 p-2 rounded-full text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 md:h-7 md:w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-gray-700">Email</p>
              <a
                href="mailto:xxxxx@gmail.com"
                className="text-sm md:text-base text-gray-500"
              >
                xxxxx@gmail.com
              </a>
            </div>
          </div>

          {/* Call/Message Card */}
          <div className="bg-white p-4 rounded-lg shadow-sm flex items-center space-x-4 hover:shadow-md transition">
            <div className="bg-green-500 p-2 rounded-full text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 md:h-7 md:w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 10l4.553 2.276A2 2 0 0121 14.118V17a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h14a2 2 0 012 2v.882a2 2 0 01-1.447 1.842L15 12V10z"
                />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-gray-700">Call/Message</p>
              <a
                href="tel:0800000000"
                className="text-sm md:text-base text-gray-500"
              >
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
