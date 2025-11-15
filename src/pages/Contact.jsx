import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { RiCustomerService2Fill } from "react-icons/ri";
import { BiSupport } from "react-icons/bi";

function Contact() {
  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-gray-50 min-h-screen text-gray-800">
      {/* Local animations */}
      <style>{`
        @keyframes fadeUp { from { opacity: 0; transform: translateY(6px) } to { opacity: 1; transform: translateY(0) } }
        .contact-reveal { opacity: 0; animation: fadeUp .5s ease-out forwards }
      `}</style>
      {/* Header */}
      <div className="bg-gradient-to-r from-[#9e0505] to-[#c91a1a] text-white py-10 px-4">
        <div
          className="max-w-4xl mx-auto text-center contact-reveal"
          style={{ animationDelay: "40ms" }}
        >
          <div className="w-16 h-16 mx-auto mb-3 bg-white/15 backdrop-blur-sm rounded-full flex items-center justify-center ring-1 ring-white/20 transform-gpu">
            <BiSupport size={30} className="text-white" />
          </div>
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-2">
            Contact Us
          </h1>
          <p className="text-white/90 max-w-2xl mx-auto text-sm md:text-base">
            We'd love to hear from you! Whether you have a question, complaint,
            feedback, or need support, our team is here to help.
          </p>
        </div>
      </div>

      {/* Contact Options */}
      <div className="max-w-4xl mx-auto px-4 -mt-8">
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          {/* Email Card */}
          <div className="contact-reveal" style={{ animationDelay: "80ms" }}>
            <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 hover:shadow-lg transition-all duration-300 transform-gpu hover:-translate-y-0.5">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-red-100 to-orange-100 rounded-xl flex items-center justify-center flex-shrink-0 ring-1 ring-red-200/60">
                  <MdEmail size={22} className="text-[var(--default)]" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-0.5 text-base">
                    Email Us
                  </p>
                  <a
                    href="mailto:xxxxx@gmail.com"
                    aria-label="Email MealSection support"
                    className="text-gray-600 hover:text-[var(--default)] transition-colors text-sm"
                  >
                    xxxxx@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Phone Card */}
          <div className="contact-reveal" style={{ animationDelay: "120ms" }}>
            <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 hover:shadow-lg transition-all duration-300 transform-gpu hover:-translate-y-0.5">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0 ring-1 ring-emerald-200/60">
                  <MdPhone size={22} className="text-green-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-0.5 text-base">
                    Call/Message
                  </p>
                  <a
                    href="tel:0800000000"
                    aria-label="Call MealSection support"
                    className="text-gray-600 hover:text-green-600 transition-colors text-sm"
                  >
                    0800000000
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Support Hours */}
        <div className="contact-reveal" style={{ animationDelay: "160ms" }}>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center ring-1 ring-indigo-200/60">
                <RiCustomerService2Fill size={20} className="text-blue-600" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                Customer Support Hours
              </h3>
            </div>
            <div className="space-y-1.5 text-gray-600 text-sm">
              <p className="flex justify-between">
                <span className="font-medium">Monday - Friday:</span>
                <span>9:00 AM - 6:00 PM</span>
              </p>
              <p className="flex justify-between">
                <span className="font-medium">Saturday:</span>
                <span>10:00 AM - 4:00 PM</span>
              </p>
              <p className="flex justify-between">
                <span className="font-medium">Sunday:</span>
                <span className="text-gray-400">Closed</span>
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="contact-reveal" style={{ animationDelay: "200ms" }}>
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
            <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">
              Frequently Asked Questions
            </h3>
            <div className="space-y-3">
              <details className="group p-4 bg-white rounded-xl border border-gray-100 transition-all">
                <summary className="list-none cursor-pointer select-none flex items-center justify-between">
                  <span className="font-medium text-gray-900 text-base">
                    How do I track my order?
                  </span>
                  <span className="text-gray-500 group-open:rotate-180 transition-transform">
                    ▾
                  </span>
                </summary>
                <p className="text-gray-600 text-sm mt-2">
                  Navigate to the Orders page to see real-time updates on all
                  your orders.
                </p>
              </details>
              <details className="group p-4 bg-white rounded-xl border border-gray-100 transition-all">
                <summary className="list-none cursor-pointer select-none flex items-center justify-between">
                  <span className="font-medium text-gray-900 text-base">
                    What payment methods do you accept?
                  </span>
                  <span className="text-gray-500 group-open:rotate-180 transition-transform">
                    ▾
                  </span>
                </summary>
                <p className="text-gray-600 text-sm mt-2">
                  We currently accept wallet payments. You can fund your wallet
                  through various methods.
                </p>
              </details>
              <details className="group p-4 bg-white rounded-xl border border-gray-100 transition-all">
                <summary className="list-none cursor-pointer select-none flex items-center justify-between">
                  <span className="font-medium text-gray-900 text-base">
                    How long does delivery take?
                  </span>
                  <span className="text-gray-500 group-open:rotate-180 transition-transform">
                    ▾
                  </span>
                </summary>
                <p className="text-gray-600 text-sm mt-2">
                  Delivery typically takes 30-45 minutes depending on your
                  location and order size.
                </p>
              </details>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
