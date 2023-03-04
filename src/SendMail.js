import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import MinimizeIcon from "@mui/icons-material/Minimize";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";
import FormatColorTextIcon from "@mui/icons-material/FormatColorText";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import DeleteIcon from "@mui/icons-material/Delete";
import "./SendMail.css";
import { useForm } from "react-hook-form";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import { IconButton } from "@mui/material";
import { useDispatch } from "react-redux";
import { closeSendMessage } from "./Features/mailSlice";
const SendMail = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch(closeSendMessage);
  const onsubmit = (formData) => {
    console.log(formData);
  };
  return (
    <div className="sendMail">
      <div className="sendMail__header">
        <h3>New Message</h3>

        <div className="iconRight">
          <IconButton>
            <MinimizeIcon />
          </IconButton>
          <IconButton>
            <CloseFullscreenIcon />
          </IconButton>
          <IconButton onClick={() => dispatch(closeSendMessage())}>
            <CloseIcon className="sendMail_close" />
          </IconButton>
        </div>
      </div>
      <form onSubmit={handleSubmit(onsubmit)}>
        <input
          placeholder="To"
          name="to"
          type="email"
          {...register("to", { required: true })}
        />
        <input
          placeholder="Subject"
          name="subject"
          type="text"
          {...register("subject", { required: true })}
        />
        <input
          className="sendMail__message"
          placeholder="To"
          name="message"
          type="text"
          {...register("message", { required: true })}
        />
        <div className="sendMail__options">
          <div className="sendMail__option1">
            <button className="sendMail__send">
              Send{" "}
              <span>
                <IconButton className="drop">
                  <ArrowDropDownIcon />
                </IconButton>
              </span>
            </button>
            <IconButton>
              <FormatColorTextIcon />
            </IconButton>
            <IconButton>
              <AttachFileIcon />
            </IconButton>

            <IconButton>
              <InsertPhotoIcon />
            </IconButton>
          </div>
          <div className="sendMail__option2">
            <IconButton>
              <DeleteIcon />
            </IconButton>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SendMail;
