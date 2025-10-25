import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Onboarding from "./pages/Onboarding";
import MealList from "./pages/MealList";
import MealDetails from "./pages/MealDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Profile from "./pages/Profile";
import Orders from "./pages/Orders";
import Contact from "./pages/Contact";
import ReferralScreen from "./pages/Referral";
import WelcomeScreen from "./pages/WelcomeScreen";
import ResetPassword from "./components/ResetPassword";
import Wallet from "./pages/Wallet";
import Vendor from "./pages/Vendor";
import OrderDetails from "./pages/OrderDetails";
import SplashPage from "./pages/SplashPage";
import Vendors from "./pages/Vendors";

const routes = [
  { path: "/home", element: <Home /> },
  { path: "/onboarding", element: <Onboarding /> },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <Signup /> },
  { path: "/meals", element: <MealList /> },
  { path: "/meals/:id", element: <MealDetails /> },
  { path: "/cart", element: <Cart /> },
  { path: "/checkout", element: <Checkout /> },
  { path: "/profile", element: <Profile /> },
  { path: "/vendors", element: <Vendors /> },
  { path: "/orders", element: <Orders /> },
  { path: "/contact", element: <Contact /> },
  { path: "/referral", element: <ReferralScreen /> },
  { path: "/", element: <WelcomeScreen /> },
  { path: "/reset-password", element: <ResetPassword /> },
  { path: "/wallet", element: <Wallet /> },
  { path: "/vendor/:id", element: <Vendor /> }, // ✅ dynamic vendor route
  { path: "/orderdetails", element: <OrderDetails /> },
  { path: "/splashpage", element: <SplashPage /> },
];

export default routes;
