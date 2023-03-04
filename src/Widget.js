import React from "react";
import "./Widget.css";
import { IconButton } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";

import TodayIcon from "@mui/icons-material/Today";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import LightbulbCircleIcon from "@mui/icons-material/LightbulbCircle";
import AddIcon from "@mui/icons-material/Add";
const Widget = () => {
  return (
    <div>
      <div className="widget">
        <div className="widgetIcon">
          <IconButton style={{ color: "blue" }} className="icons">
            <TodayIcon />
          </IconButton>
          <IconButton style={{ color: "yellow" }} className="icons">
            <LightbulbCircleIcon />
          </IconButton>
          <IconButton style={{ color: "blue" }} className="icons">
            <TaskAltIcon />
          </IconButton>
          <IconButton style={{ color: "blue" }} className="icons">
            <PersonIcon />
          </IconButton>
          <div className="icon__add">
            <IconButton className="icons">
              <AddIcon />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Widget;
