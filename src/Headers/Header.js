import React from "react";
import "./Header.css";
import logo from "./logoround.png";
import searchic from "./searchic.png";
import home from "./homeicon.png";
import flag from "./flagicon.png";
import subscription from "./subscribe.png";
import store from "./storeicon.png";
import usersup from "./user.png";
import { IconButton } from "@material-ui/core";
import add from "./add.png";
import { Avatar } from "@material-ui/core";
import messenger from "./messenger.png";
import notification from "./notificaiton.png";
import AddIcon from "@material-ui/icons/Add";
import { ExpandMore, Forum } from "@material-ui/icons";
import ForumIcon from "@material-ui/icons/Forum";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ThemeButton from "../ThemeButton/ThemeButton";
function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img src={logo} alt="" />
        <div className="header__input">
          <img src={searchic} alt="" />
          <input type="text" placeholder="Search FooBar" />
        </div>
      </div>

      <div className="header__center">
        <div className="header__option">
          <img src={home} alt="" />

          <img src={flag} alt="" />

          <img src={subscription} alt="" />

          <img src={store} alt="" />

          <img src={usersup} alt="" />
        </div>
      </div>
      <div className="header__right">
        <div className="header__info">
          <IconButton>
            <AddIcon />
          </IconButton>
          <IconButton>
            <ForumIcon />
          </IconButton>
          <IconButton>
            <NotificationsActiveIcon />
          </IconButton>
          <IconButton>
            <ExpandMoreIcon />
          </IconButton>
          <Avatar />
          <h4>Username</h4>
        </div>
        <div className="themeChanger">
        <ThemeButton/>

        </div>
      </div>
    </div>
  );
}

export default Header;
