import React, { useContext, useReducer } from "react";
import reducer from "./reducer";
import axios from "axios";
import {
  DISPLAY_ALERT,
  CLEAR_ALERT,
  REGISTER_USER_BEGIN,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  LOGIN_USER_BEGIN,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
} from "./action";

const user = localStorage.getItem("user");
const token = localStorage.getItem("token");
const userLocation = localStorage.getItem("location");

const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: "",
  alertType: "",
  user: user ? JSON.parse(user) : null,
  token: token,
  userLocation: userLocation || "",
  jobLocation: userLocation || "",
};

// creating the context
const AppContext = React.createContext();

// create provider
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const displayAlert = () => {
    dispatch({ type: DISPLAY_ALERT });
    clearAlert();
  };

  const clearAlert = () => {
    setTimeout(() => {
      dispatch({ type: CLEAR_ALERT });
    }, 3000);
  };

  const addUserToLocalStorage = ({ user, token, location }) => {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", token);
    localStorage.setItem("location", location);
  };

  const removeUserFromLocalStorage = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    localStorage.removeItem("location");
  };

  const registerUser = async (currentUser) => {
    console.log(currentUser);
    dispatch({ type: REGISTER_USER_BEGIN });

    try {
      const response = await axios.post("/api/v1/auth/register", currentUser);
      console.log(response);
      const { user, token, location } = response.data;

      dispatch({
        type: REGISTER_USER_SUCCESS,
        payload: { user, location, token },
      });
      // local storage here
      addUserToLocalStorage({ user, token, location });
    } catch (error) {
      dispatch({
        type: REGISTER_USER_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
    clearAlert();
  };

  // login user
  const loginUser = async (currentUser) => {
    console.log(currentUser);
    dispatch({ type: LOGIN_USER_BEGIN });

    try {
      const { data } = await axios.post("/api/v1/auth/login", currentUser);
      const { user, token, location } = data;
      console.log("data", data);

      dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: { user, location, token },
      });
      // local storage here
      addUserToLocalStorage({ user, token, location });
    } catch (error) {
      dispatch({
        type: LOGIN_USER_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
    clearAlert();
  };

  return (
    <AppContext.Provider
      value={{ ...state, displayAlert, registerUser, loginUser }}
    >
      {children}
    </AppContext.Provider>
  );
};

// setting up useAppContext hook
const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, initialState, useAppContext };
