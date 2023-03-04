import React from "react";
import "./Sidebar.css";
import CreateIcon from "@mui/icons-material/Create";
import InboxIcon from "@mui/icons-material/Inbox";
import StarIcon from "@mui/icons-material/Star";

import AccessTimeInboxIcon from "@mui/icons-material/AccessTime";

import NearMeIcon from "@mui/icons-material/NearMe";
import NoteIcon from "@mui/icons-material/Note";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SidebarOption from "./SidebarOption";
import { useDispatch } from "react-redux";
import { openSendMessage } from "./Features/mailSlice";

const Sidebar = () => {
  const dispatch = useDispatch();
  return (
    <div className="sidebar">
      <button
        onClick={() => dispatch(openSendMessage())}
        className="sidebar__compose">
        <CreateIcon className="cricon" /> <></> Compose
      </button>
      <SidebarOption
        Icon={InboxIcon}
        title="inbox"
        number={4154}
        selected={true}
      />
      <SidebarOption Icon={StarIcon} title="Starred" number={32} />
      <SidebarOption Icon={AccessTimeInboxIcon} title="Snoozed" number={4} />

      <SidebarOption Icon={NearMeIcon} title="Sent" />
      <SidebarOption Icon={NoteIcon} title="Drafts" number={10} />
      <SidebarOption Icon={ExpandMoreIcon} title="More" />
    </div>
  );
};

export default Sidebar;
