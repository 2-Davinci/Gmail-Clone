import React from "react";
import { Checkbox, IconButton } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import RedoIcon from "@mui/icons-material/Redo";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import InboxIcon from "@mui/icons-material/Inbox";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import PeopleIcon from "@mui/icons-material/People";
import "./EmailList.css";
import Section from "./Section";
import EmailRow from "./EmailRow";
const EmailList = () => {
  return (
    <div className="emailList">
      <div className="emailList__settings">
        <div className="emailList__settingsLeft">
          <Checkbox />
          <IconButton>
            <ArrowDropDownIcon />
          </IconButton>
          <IconButton>
            <RedoIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        <div className="emailList__settingsRight">
          <IconButton>
            <ChevronLeftIcon />
          </IconButton>
          <IconButton>
            <ChevronRightIcon />
          </IconButton>
          <IconButton>
            <KeyboardIcon />
          </IconButton>
          <IconButton>
            <ArrowDropDownIcon />
          </IconButton>
        </div>
      </div>
      <div className="emailList__sections">
        <Section Icon={InboxIcon} title="Primary" color="blue" selected />
        <Section Icon={LocalOfferIcon} title="Promotions" color="green" />
        <Section Icon={PeopleIcon} title="Social" color="#1a73e8" />
      </div>
      <div className="emailList__list">
        <EmailRow
          title="Davinci"
          subject="Hey my Fellow Followers !!!"
          description="This is a test"
          time="11am"
        />
        <EmailRow
          title="Davinci"
          subject="Hey my Fellow Followers !!!"
          description="This is a test"
          time="11am"
        />
      </div>
    </div>
  );
};

export default EmailList;
