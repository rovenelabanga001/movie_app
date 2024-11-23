import React, { createContext, useContext } from "react";

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(() => {
    return localStorage.getItem("isLoggedIn") === "true";
  });
  const [user, setUser] = React.useState(() => {
    return JSON.parse(localStorage.getItem("user")) || null;
  });

  const [watchlist, setWatchlist] = React.useState(() => {
    return JSON.parse(localStorage.getItem("watchlist")) || [];
  });
  const login = (userData) => {
    setIsLoggedIn(true);
    setUser(userData);
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("user", JSON.stringify(userData));
  };
  const logout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("user");
    alert("You have been logged out!");
  };

  const addToWatchList = (movie) => {
    setWatchlist((prevWatchList) => {
      const updatedWatchList = [...prevWatchList, movie];
      localStorage.setItem("watchlist", JSON.stringify(updatedWatchList));
      return updatedWatchList;
    });
  };

  const removeFromWatchList = (movieId) =>{
    setWatchlist((prev) => prev.filter((movie) => movie.id !== movieId))
  }
  const checkLogin = () => {
    return isLoggedIn;
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        login,
        logout,
        user,
        checkLogin,
        watchlist,
        addToWatchList,
        removeFromWatchList
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
