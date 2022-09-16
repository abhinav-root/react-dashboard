import { FiSearch, FiSettings, FiMenu } from "react-icons/fi";
import { BiMessageSquare, BiBell } from "react-icons/bi";
import { FaRegUserCircle } from "react-icons/fa";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setisMenuOpen] = useState(false);

  function handleMenuClick() {
    setisMenuOpen(!isMenuOpen);
  }

  return (
    <header>
      <div className="logo">Artemis</div>
      <div className="searchbar">
        <FiSearch className="search-icon" />
        <input type="search" placeholder="Type to search" />
      </div>
      <div className="nav-links">
        <FiSettings className="settings" size={20} />
        <BiMessageSquare className="messages" />
        <BiBell className="bell" />
        <div className="profile">
          <div className="info">
            <div className="full-name">tom holland</div>
            <div className="designation">actor</div>
          </div>
          <img
            className="user-profile-image"
            src="https://www.themoviedb.org/t/p/original/bBRlrpJm9XkNSg0YT5LCaxqoFMX.jpg"
            alt="user profile image"
          />
        </div>
      </div>
      <FiMenu onClick={handleMenuClick} className="menu-icon" />
      <div
        className="menubox"
        style={{ display: isMenuOpen ? "block" : "none" }}
      >
        <div>
          <FiSettings />
          <span>Settings</span>
        </div>
        <div>
          <BiMessageSquare />
          <span>Messages</span>
        </div>
        <div>
          <BiBell />
          <span>Notifications</span>
        </div>
        <div>
          <FaRegUserCircle />
          <span>Profile</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
