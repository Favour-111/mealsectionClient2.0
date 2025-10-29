import axios from "axios";
import { useEffect } from "react";
import { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [Userloader, setUserLoader] = useState(false);

  const userFetch = async () => {
    try {
      setUserLoader(true);
      const response = await axios.get(
        `${import.meta.env.VITE_REACT_APP_API}/api/users/user/${userId}`
      );
      if (response) {
        setUser(response.data.user);
      } else {
        toast.error("unable to get user try again");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setUserLoader(false);
    }
  };
  useEffect(() => {
    userFetch();
  }, []);
  const userId = localStorage.getItem("userId");

  return (
    <AuthContext.Provider value={{ user, Userloader, setUserLoader }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
