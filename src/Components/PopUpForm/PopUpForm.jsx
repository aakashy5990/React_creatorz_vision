import React, { useState } from "react";
import "./PopUpForm.css";
import { IoClose } from "react-icons/io5";
import title from "../../assets/creatorzvision.png";
import { GoLink } from "react-icons/go";
import { BsEmojiGrin } from "react-icons/bs";
import SuccessMessage from "./SuccessMessage";

function PopUpForm({ popUp, setPopUp, handleClosePopUp }) {

  const [filename,setFileName] = useState("No file chosen");

  const handleChange= (event) =>{
    const file = event.target.files[0];
    // setFileName(file.name);
    setFileName(file ? file.name : "No file selected");
  }

  return (
    <div className={`popup-container ${popUp ? "active" : ""}`} id="popup">
      <div className="popup-box">
        <div className="pop_nav_main">
          <div className="pop_nav_con">
            <div className="pop_logo">
              <img src={title} alt="" />
            </div>
            <div className="pop_nav_child">
              <div className="pop_nav_head">
                <p>Message Vikash Yadav</p>
              </div>
              <div className="pop_nav_pera">
                <p>Online</p>
              </div>
            </div>
          </div>
          <span
            className="close-btn"
            id="close-popup"
            onClick={handleClosePopUp}
          >
            <IoClose size={25} />
          </span>
        </div>

        <form
          action="https://creatorz.creatorzvision.com/contact/submit_data.php"
          method="POST"
          encType="multipart/form-data"
        >
          <div className="pop_input">
            <div id="word-count" className="uper"></div>
            <textarea
              name="message"
              rows="14"
              id="message"
              placeholder="Ask Vikash Yadav a question or share your project details (requirements,timeline,budget etc.)"
              required
            ></textarea>
            <div id="word-count" className="lower">
              0/2500 words
            </div>
          </div>

          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Enter your email..."
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Enter your phone number..."
              required
            />
          </div>

          <div className="pop_sub">
            <div className="pop_sub_con">
              <div className="pop_sub_child1">
                <div className="emo_btn" id="emoji-btn">
                  <BsEmojiGrin size={20} />
                </div>
                <div className="attach_btn">
                  <input
                    type="file"
                    id="file"
                    name="file"
                    accept=".jpg,.jpeg,.png,.pdf"
                    style={{ display: 'none' }}
                    onChange={handleChange}
                  />
                  <label htmlFor="file" className="file-icon">
                    <GoLink size={20} />
                  </label>
                </div>
                <span id="file-name">{filename}</span>
              </div>
              <div className="pop_sub_child2">
                <div className="pop_sub_btn">
                  <input type="submit" value="Submit" />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PopUpForm;
