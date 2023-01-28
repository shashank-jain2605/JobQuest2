import Wrapper from "../assets/wrappers/Navbar";
import { FaAlignLeft, FaUserCircle, FaCaretDown } from "react-icons/fa";
import { useAppContext } from "../context/appContext";
import Logo from "./Logo";
import { useState } from "react";

const Navbar = () => {
  const { toggleSidebar, showSidebar, user, logoutUser } = useAppContext();
  console.log(user);

  // logout display state
  const [showLogout, setShowLogout] = useState(false);

  // first letter uppercase fn:

  const initialCase = (name) => {
    return name
      .split(" ")
      .map((item) => item[0].toUpperCase() + item.slice(1, item.length));
  };
  return (
    <Wrapper>
      <div className="nav-center">
        <button
          className="toggle-btn"
          onClick={() => {
            toggleSidebar();
            console.log(showSidebar);
          }}
        >
          <FaAlignLeft />
        </button>
        <div>
          <Logo />
          <h3 className="logo-name">Dashboard</h3>
        </div>
        <div className="btn-container">
          <button
            className="toggle-btn"
            onClick={() => {
              setShowLogout(!showLogout);
            }}
          >
            <FaUserCircle />
            {user && initialCase(user.name)}
            <FaCaretDown />
          </button>
          <div className={showLogout ? " dropdown show-dropdown" : "dropdown"}>
            <button
              className="toggle-btn"
              onClick={() => {
                logoutUser();
                console.log("logged out");
              }}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;
