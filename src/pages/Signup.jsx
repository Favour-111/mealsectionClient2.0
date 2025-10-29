import { useState } from "react";
import InputField from "../components/InputField";
import { useNavigate } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";

import axios from "axios";
import toast from "react-hot-toast";

function Message({ message, type }) {
  return (
    <div
      className={`fixed bottom-6 left-1/2 transform -translate-x-1/2 px-4 py-3 rounded-lg shadow-md text-white font-medium
        ${type === "error" ? "bg-[var(--default)]" : "bg-green-600"}`}
    >
      {message}
    </div>
  );
}

function Signup() {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    fullName: "",
    emailOrPhone: "",
    password: "",
    university: "",
    role: "customer",
    profilePicture: null,
  });
  const [checked, setChecked] = useState(false);
  const [errors, setErrors] = useState({});

  const handleStatus = (e) => {
    setChecked(e.target.checked); // true if checked, false if unchecked
  };

  const [message, setMessage] = useState(null);
  const navigate = useNavigate();

  // const handleSignup = async (e) => {
  //   e.preventDefault(); // <-- prevent page reload

  //   if (!form.termsAccepted) {
  //     setMessage({
  //       text: "You must accept the terms and conditions.",
  //       type: "error",
  //     });
  //     setTimeout(() => setMessage(null), 3000);
  //     return;
  //   }

  //   if (
  //     !form.fullName ||
  //     !form.emailOrPhone ||
  //     !form.password ||
  //     !form.role ||
  //     !form.university
  //   ) {
  //     toast.error("All fields are required");
  //     return;
  //   }

  //   try {
  //     setLoading(true);
  //     const formData = new FormData();
  //     formData.append("fullName", form.fullName);
  //     formData.append("email", form.emailOrPhone);
  //     formData.append("password", form.password);
  //     formData.append("university", form.university);
  //     formData.append("role", form.role);
  //     if (form.profilePicture)
  //       formData.append("profilePicture", form.profilePicture);

  //     const { data } = await axios.post(
  //       "http://localhost:5000/api/users/signup",
  //       formData,
  //       { headers: { "Content-Type": "multipart/form-data" } }
  //     );

  //     localStorage.setItem("token", data.token);
  //     localStorage.setItem("userId", data.user._id);

  //     toast.success("Signup successful!");
  //     navigate("/dashboard");
  //   } catch (error) {
  //     toast.error(error.response?.data?.message || "Signup failed");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const handleFunction = async () => {
    const newErrors = {};

    if (!form.fullName) newErrors.fullName = "Full Name is required";
    if (!form.emailOrPhone)
      newErrors.emailOrPhone = "Email or Phone is required";
    if (!form.password) newErrors.password = "Password is required";
    if (!form.university) newErrors.university = "University is required";
    if (!form.role) newErrors.role = "Role is required";
    if (!checked)
      newErrors.termsAccepted = "You must accept the terms and conditions";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      try {
        setLoading(true);

        // Send plain JSON instead of FormData
        const { data } = await axios.post(
          `${import.meta.env.VITE_REACT_APP_API}/api/users/signup`,
          {
            fullName: form.fullName,
            email: form.emailOrPhone,
            password: form.password,
            university: form.university,
            role: form.role,
          },
          { headers: { "Content-Type": "application/json" } }
        );

        localStorage.setItem("token", data.token);
        localStorage.setItem("userId", data.user._id);

        toast.success("Signup successful!");
        navigate("/home");
      } catch (error) {
        toast.error(error.response?.data?.message || "Signup failed");
      } finally {
        setLoading(false);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "checkbox") {
      setForm({ ...form, [name]: checked });
    } else if (type === "file") {
      setForm({ ...form, [name]: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  return (
    <div className="bg-[url('https://png.pngtree.com/png-clipart/20240717/original/pngtree-fast-food-pattern-in-red-png-image_15580267.png')] bg-cover bg-center bg-no-repeat bg-white/95 bg-blend-overlay flex flex-col min-h-screen font-sans relative overflow-hidden">
      <div className="px-6 sm:px-10 pt-10 flex justify-between items-center">
        <button
          aria-label="Go back"
          className="text-gray-600 hover:text-gray-800"
          onClick={() => navigate("/login")}
        >
          <IoIosArrowRoundBack size={30} />
        </button>
        <h1 className="font-[600]">Sign Up</h1>
        <h1></h1>
      </div>

      <div className="relative z-10 flex flex-col items-center flex-grow ">
        <div className="flex flex-col items-center text-center mb-12 mt-8 sm:mt-12">
          <img
            src="https://favour-111.github.io/MEalSection-ComongSoon-2.0/WhatsApp%20Image%202024-08-24%20at%2020.18.12_988ce6f9.jpg"
            alt=""
            className="w-50"
          />
        </div>

        <div className="bg-white rounded-t-3xl shadow w-[100%] px-8 sm:px-14 py-10 mt-auto">
          <div className="space-y-4 sm:space-y-5">
            <div className="mb-4">
              <InputField
                label="Full Name*"
                type="text"
                onChange={handleChange}
                name="fullName"
                placeholder="Enter your full name"
                required
              />
              {errors.fullName && (
                <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>
              )}
            </div>

            <div className="mb-4">
              <InputField
                label="Email or Phone*"
                type="text"
                onChange={handleChange}
                name="emailOrPhone"
                placeholder="Enter your email or phone number"
                required
              />
              {errors.emailOrPhone && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.emailOrPhone}
                </p>
              )}
            </div>
            <div className="mb-4">
              <InputField
                label="Password*"
                type="password"
                onChange={handleChange}
                name="password"
                placeholder="Enter your password"
                required
              />
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">{errors.password}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="university"
                className="block text-sm font-semibold text-gray-700"
              >
                Your University*
              </label>
              <select
                id="university"
                name="university"
                value={form.university} // <-- bind value to state
                onChange={handleChange}
                className="outline-none font-[400] mt-1 block w-full rounded-[10px] border bg-gray-50 border-gray-300 p-3 placeholder:text-sm text-sm"
                required
              >
                <option value="" disabled>
                  Select your university
                </option>
                <option value="university_a">University A</option>
                <option value="university_b">University B</option>
              </select>
              {errors.university && (
                <p className="text-red-500 text-xs mt-1">{errors.university}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Role*
              </label>
              <div className="mt-1 flex flex-wrap gap-4">
                {["customer", "vendor", "rider"].map((role) => (
                  <label key={role} className="inline-flex items-center">
                    <input
                      type="radio"
                      className="form-radio h-4 w-4 text-[var(--default)]"
                      name="role"
                      value={role}
                      checked={form.role === role} // <-- This is important
                      onChange={handleChange}
                    />
                    <span className="ml-2 text-gray-700 capitalize">
                      {role}
                    </span>
                  </label>
                ))}
              </div>
            </div>
            {errors.role && (
              <p className="text-red-500 text-xs mt-1">{errors.role}</p>
            )}

            <div>
              <label
                htmlFor="profilePicture"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Upload Profile Picture
              </label>
              <input
                type="file"
                id="profilePicture"
                name="profilePicture"
                onChange={handleChange}
                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-[500] file:bg-red-50 file:text-[var(--default)] hover:file:bg-red-100"
              />
              {form.profilePicture && (
                <p className="text-xs text-gray-500 mt-1">
                  File selected: {form.profilePicture.name}
                </p>
              )}
            </div>

            <div className="flex items-center">
              <input type="checkbox" onChange={handleStatus} />
              <label
                htmlFor="termsAccepted"
                className="ml-2 block text-sm text-gray-900"
              >
                By clicking "Sign Up", you agree with the{" "}
                <a href="#" className="text-[var(--default)] hover:underline">
                  terms and conditions
                </a>
              </label>
            </div>
            {errors.termsAccepted && (
              <p className="text-red-500 text-xs mt-1">
                {errors.termsAccepted}
              </p>
            )}
            <button
              onClick={() => handleFunction()}
              type="submit"
              className="w-full bg-[var(--default)] text-white py-2.5 sm:py-3 px-4 rounded-lg font-[600] hover:opacity-80 transition-colors duration-200 focus:outline-none focus:ring-2 text-sm focus:ring-offset-2"
            >
              {loading ? "Creating account..." : "Sign Up"}
            </button>
          </div>
        </div>
      </div>

      {message && <Message message={message.text} type={message.type} />}
    </div>
  );
}

export default Signup;
