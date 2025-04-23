import React, { useState } from "react";
import style from "./VideoEditing.module.css";
import { useOutletContext } from "react-router-dom";
import ServicePopUp from "../ServicePopUp/ServicePopUp";
import { videoEditingData } from "../../../assets/assets";

function VideoEditing() {
  const { isOpen, setIsOpen, toggle } = useOutletContext();
  const [popup, setPopup] = useState(false);
  const [videoSrc, setVideoSrc] = useState(" ");

  const handleshowpop = (videoUrl) => {
    setVideoSrc(videoUrl);
    setPopup(true);
  };

  return (
    <>
      <div className={style.intro_section}>
        <div className="intro_content">
          <div className="intro_content_main">
            <div className="intro_text_content">
              <p>Video Editing</p>
              <p>Stories Frame By Frame</p>
            </div>
          </div>
        </div>
      </div>

      <div className="service_main_slider_container">
        <div className="text_service_main_slide">
          <div className="text_service_slide">
            <p>Your</p>
            <p>Brand</p>
            <p>Is</p>
            <p>Your</p>
            <p>Voice.</p>
          </div>
          <div className="text_service_slide">
            <p>Your</p>
            <p>Brand</p>
            <p>Is</p>
            <p>Your</p>
            <p>Voice.</p>
          </div>
          <div className="text_service_slide">
            <p>Your</p>
            <p>Brand</p>
            <p>Is</p>
            <p>Your</p>
            <p>Voice.</p>
          </div>
          <div className="text_service_slide">
            <p>Your</p>
            <p>Brand</p>
            <p>Is</p>
            <p>Your</p>
            <p>Voice.</p>
          </div>
          <div className="text_service_slide">
            <p>Your</p>
            <p>Brand</p>
            <p>Is</p>
            <p>Your</p>
            <p>Voice.</p>
          </div>
        </div>

        <div className="service_main_slide">
          <div className="service_slide">
            <p>Video editing</p>
            <p>Editing services</p>
            <p>Pro video edit</p>
            <p>YouTube editing</p>
            <p>Social media edits</p>
          </div>
          <div className="service_slide">
            <p>Video editing</p>
            <p>Editing services</p>
            <p>Pro video edit</p>
            <p>YouTube editing</p>
            <p>Social media edits</p>
          </div>
          <div className="service_slide">
            <p>Video editing</p>
            <p>Editing services</p>
            <p>Pro video edit</p>
            <p>YouTube editing</p>
            <p>Social media edits</p>
          </div>
          <div className="service_slide">
            <p>Video editing</p>
            <p>Editing services</p>
            <p>Pro video edit</p>
            <p>YouTube editing</p>
            <p>Social media edits</p>
          </div>
          <div className="service_slide">
            <p>Video editing</p>
            <p>Editing services</p>
            <p>Pro video edit</p>
            <p>YouTube editing</p>
            <p>Social media edits</p>
          </div>
        </div>
        <div className="service_main_slide2">
          <div className="service_slide2">
            <p>Freelance editor</p>
            <p>Film editing</p>
            <p>Custom edits</p>
            <p>Wedding edits</p>
            <p>Business videos</p>
          </div>
          <div className="service_slide2">
            <p>Freelance editor</p>
            <p>Film editing</p>
            <p>Custom edits</p>
            <p>Wedding edits</p>
            <p>Business videos</p>
          </div>
          <div className="service_slide2">
            <p>Freelance editor</p>
            <p>Film editing</p>
            <p>Custom edits</p>
            <p>Wedding edits</p>
            <p>Business videos</p>
          </div>
          <div className="service_slide2">
            <p>Freelance editor</p>
            <p>Film editing</p>
            <p>Custom edits</p>
            <p>Wedding edits</p>
            <p>Business videos</p>
          </div>
          <div className="service_slide2">
            <p>Freelance editor</p>
            <p>Film editing</p>
            <p>Custom edits</p>
            <p>Wedding edits</p>
            <p>Business videos</p>
          </div>
        </div>
      </div>

      <div className="collaps_container">
        <p className="coll-first">
          Expert Video Editing Services | Bring Your Vision to Life
        </p>
        <p className="coll-second">
          Video Editing Solutions for Various Industries
        </p>
        <p className="coll-third">
          Transform your footage into captivating videos with our expert video
          editing services. Fast turnaround, affordable rates, and stunning
          results.
        </p>
        <div className="know_btn">
          <button
            type="button"
            className={`collapsible ${isOpen ? "active" : " "}`}
            onClick={toggle}
          >
            Know More
          </button>
          <div
            className="content"
            style={{ display: isOpen ? "block" : "none" }}
          >
            <p className="content-pera">
              Elevate Your Brand with Our Expert Video Editors
            </p>
            <p className="content-heading">
              At Creatorz Vision, our video editing services help you convey
              your message, evoke emotions, and leave a lasting impression. Our
              team of skilled editors crafts compelling stories, ensuring your
              vision shines through.
            </p>

            <div className="content-block">
              <div className="content-block_container">
                <div className="content-block_heading">
                  <p className="content_list_heading">
                    Video Editing Services:
                  </p>
                </div>
                <div className="content_block_list">
                  <ul>
                    <li>
                      <span>1.Multicam Editing:</span> Seamless synchronization
                      for dynamic visuals
                    </li>
                    <li>
                      <span>2.Color Grading:</span> Enhance mood and atmosphere
                      with precise color correction
                    </li>
                    <li>
                      <span>3.Visual Effects:</span> Stunning VFX for an
                      immersive experience
                    </li>
                    <li>
                      <span>4.Sound Design:</span> Crystal-clear audio for
                      optimal engagement
                    </li>
                    <li>
                      <span>5.Motion Graphics:</span> Animated text, logos, and
                      graphics for visual appeal
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="content-block">
              <div className="content-block_container">
                <div className="content-block_heading">
                  <p className="content_list_heading">
                    Industry-Specific Solutions:
                  </p>
                </div>
                <div className="content_block_list">
                  <ul>
                    <li>
                      <span>1.Corporate Videos:</span> Effective communication
                      for business
                    </li>
                    <li>
                      <span>2.Social Media Videos:</span> Engaging content for
                      online platforms
                    </li>
                    <li>
                      <span>3.Event Videos:</span> Capturing moments, creating
                      memories
                    </li>
                    <li>
                      <span>4.Advertising Videos:</span> Compelling ads for TV,
                      online, or cinema
                    </li>
                    <li>
                      <span>5.Film and TV:</span> Expert editing for cinematic
                      productions
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="content-block">
              <div className="content-block_container">
                <div className="content-block_heading">
                  <p className="content_list_heading">Why Choose Us:</p>
                </div>
                <div className="content_block_list">
                  <ul>
                    <li>
                      <span>1.Expertise:</span> Seasoned editors with a keen eye
                      for detail
                    </li>
                    <li>
                      <span>2.Quality:</span> High-end equipment, precision
                      software
                    </li>
                    <li>
                      <span>3.Timeliness:</span> Quick turnaround, meeting
                      deadlines
                    </li>
                    <li>
                      <span>4.Affordability:</span> Competitive rates, flexible
                      packages
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="content_quite">
              <p>
                Get a quote for your video editing project today! Contact us at
                vikashy263@gmail.com or +91 7455925669 to discuss your vision.
              </p>
              <p>FAQs:</p>
              <p>Q: What file formats do you accept?</p>
              <p>A: We accept most file formats, including MP4, AVI, MOV.</p>
              <p>Q: How long does video editing take?</p>
              <p>A: Turnaround times vary depending on project complexity.</p>
            </div>

            <div className="port_btn_container">
              <a
                href="http://portfolio.creatorzvision.com/"
                className="port_btn"
              >
                Portfolio
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="service_card_container">
        <div className="service_card_main">
          {videoEditingData.map((item, index) => (
            <div key={index} className="service_card_main_container">
              <div className="service_card_box_one service_box_comm" onClick={() => handleshowpop(item.link)}>
                <a>
                  <img src={item.img} className="blur-img" alt="" />
                </a>
              </div>
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
      <ServicePopUp popup={popup} setPopup={setPopup} videoSrc={videoSrc} />
    </>
  );
}

export default VideoEditing;
