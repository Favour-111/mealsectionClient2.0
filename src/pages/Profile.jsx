import { IoArrowBackOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

// A component for a single menu item in the profile list
function ProfileMenuItem({ icon, label, link, value }) {
  return (
    <Link
      to={link}
      className="flex items-center justify-between py-3 border-b border-gray-200 hover:bg-gray-50"
    >
      <div className="flex items-center space-x-4">
        <span className="text-gray-500">{icon}</span>
        <span className="text-gray-800 font-medium">{label}</span>
      </div>
      {value && (
        <span className="text-sm text-green-500 font-semibold">{value}</span>
      )}
      {/* Optional arrow icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-gray-400"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
          clipRule="evenodd"
        />
      </svg>
    </Link>
  );
}

function Profile() {
  const user = {
    name: "John Doe",
    email: "xxxxxxx@gmail.com",
    profileImageUrl: "https://via.placeholder.com/150",
    loyaltyPoints: 550,
  };

  return (
    <div className="bg-[url('https://png.pngtree.com/png-clipart/20240717/original/pngtree-fast-food-pattern-in-red-png-image_15580267.png')] px-4 sm:px-10 bg-cover bg-center bg-no-repeat bg-white/97 bg-blend-overlay flex flex-col min-h-screen relative overflow-hidden">
      {/* Header with back button */}
      <div className="p-4 flex items-center">
        <Link to="/" className="text-gray-600 mr-4">
          <IoArrowBackOutline size={24} />
        </Link>
        <h2 className="text-xl md:text-2xl font-semibold flex-grow text-center">
          Profile
        </h2>
        <span className="w-6"></span> {/* Spacer for alignment */}
      </div>

      {/* Main content wrapper */}
      <div className=" space-y-6">
        {/* User Profile Section */}
        <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <img
            src={user.profileImageUrl}
            alt="Profile"
            className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full border-2 border-white shadow-sm"
          />
          <h3 className="text-lg md:text-xl font-semibold mt-4">{user.name}</h3>
          <p className="text-sm md:text-base text-gray-500">{user.email}</p>
        </div>

        {/* Profile Menu Items */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 space-y-1">
          <ProfileMenuItem
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 9V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2v-4m-12-6L2 7V3h4l2-2"
                />
              </svg>
            }
            label="Wallet"
            link="/wallet"
          />
          <ProfileMenuItem
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zM12 21a9 9 0 100-18 9 9 0 000 18z"
                />
              </svg>
            }
            label="Order History"
            link="/orders"
          />
          <ProfileMenuItem
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 13h6m-3-3v6m-9 1a9 9 0 1118 0 9 9 0 01-18 0z"
                />
              </svg>
            }
            label="Loyalty Points"
            link="/loyalty"
            value={`${user.loyaltyPoints} points`}
          />
          <ProfileMenuItem
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 18V6m-6 6h12M9 5l3 3m0 0l3-3m-3 3v6"
                />
              </svg>
            }
            label="Referral"
            link="/referral"
          />
          <ProfileMenuItem
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8.228 9.277L14.414 15.46a2 2 0 01-2.828 2.829l-6.186-6.186a2 2 0 010-2.828l6.186-6.186a2 2 0 012.828 0"
                />
              </svg>
            }
            label="Help"
            link="/help"
          />
        </div>

        {/* Sign Out Button */}
        <div className="flex justify-center mt-6">
          <button
            onClick={() => console.log("Signing out...")}
            className="flex items-center space-x-2 text-red-600 font-semibold text-lg hover:text-red-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H7a3 3 0 01-3-3V7a3 3 0 013-3h3a3 3 0 013 3v1"
              />
            </svg>
            <span>Sign Out</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
