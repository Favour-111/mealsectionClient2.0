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
import Contact from "./pages/contact";
import ReferralScreen from "./pages/Referral";
import WelcomeScreen from "./pages/WelcomeScreen";
import ResetPassword from "./components/ResetPassword";
import Wallet from "./pages/Wallet";
import ProductCard from "./components/ProductCard";
import Vendor from "./pages/vendor";
import Message from "./components/Message";
import OrderTimeline from "./components/OrderTimeline";
import OrderDetails from "./pages/OrderDetails";


const routes = [
  { path: "/", element: <Home /> },
  { path: "/onboarding", element: <Onboarding /> },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <Signup /> },
  { path: "/meals", element: <MealList /> },
  { path: "/meals/:id", element: <MealDetails /> },
  { path: "/cart", element: <Cart /> },
  { path: "/checkout", element: <Checkout /> },
  { path: "/profile", element: <Profile /> },
  { path: "/orders", element: <Orders /> },
  { path: "/contact", element: <Contact /> },
  { path: "/referral", element: <ReferralScreen /> },
  { path: "/welcomescreen", element: <WelcomeScreen /> },
  { path: "/resetPassword", element: <ResetPassword /> },
  { path: "/wallet", element: <Wallet /> },
  { path: "/productcard", element: <ProductCard /> },
  { path: "/vendor", element: <Vendor /> },
  { path: "/message", element: <Message /> },
  { path: "/ordertimeline", element: <OrderTimeline /> },
  { path: "/orderdetils", element: <OrderDetails /> },
     
];

export default routes;
