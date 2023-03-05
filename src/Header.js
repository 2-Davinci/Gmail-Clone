import React from "react";
import "./Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import TuneIcon from "@mui/icons-material/Tune";
import AppsIcon from "@mui/icons-material/Apps";

import SettingsIcon from "@mui/icons-material/Settings";
import HelpIcon from "@mui/icons-material/Help";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "./Features/userSlice";
import { auth } from "./firebase";
const Header = () => {
  const dispatch = useDispatch();
  const signOut = () => {
    auth.signOut().then(() => {
      dispatch(logout());
    });
  };
  const user = useSelector(selectUser);
  return (
    <div className="header">
      <div className="header__left">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img
          src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r5.png"
          alt=""
        />
      </div>
      <div className="header__middle">
        <IconButton>
          <SearchIcon className="search" />
        </IconButton>

        <input type="text" placeholder="Search mail" />
        <IconButton>
          <TuneIcon />
        </IconButton>
      </div>
      <div className="header__right">
        <IconButton>
          <HelpIcon />
        </IconButton>
        <IconButton>
          <SettingsIcon />
        </IconButton>
        <IconButton>
          <AppsIcon />
        </IconButton>
        <span className="logout">
          <Avatar src={user?.photoUrl} />
          <p onClick={signOut}>Logout</p>
        </span>
      </div>
    </div>
  );
};

export default Header;
