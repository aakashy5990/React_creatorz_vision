import React from "react";
import style from "./SocialMedia.module.css";
import { socialmediaData } from "../../../assets/assets";
import { Link } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import { useState } from "react";

function SocialMedia() {
  const { isOpen, setIsOpen, toggle } = useOutletContext();
  const [popup, setPopup] = useState(false);
  const [videoSrc, setVideoSrc] = useState("");

  const handleshowpop = (videoUrl) => {
    setVideoSrc(videoUrl);
    setPopup(true);
  };

  return (
    <>
      <div className={style.intro_section}>
        {/* <!-- ************* intro content section is start ****************** --> */}
        <div className="intro_content">
          <div className="intro_content_main">
            <div className="intro_text_content">
              <p>3d Product Animation</p>
              <p>
                Bringing Your Ideas to Life <br /> with Stunning 3D Visuals
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- *************End intro content section ****************** -->

<!-- ******************logo slider section start ******************* --> */}
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
            <p>3D product animation</p>
            <p>Product visualization</p>
            <p>3D product demo</p>
            <p>3D motion graphics</p>
            <p>Product explainer</p>
          </div>
          <div className="service_slide">
            <p>3D product animation</p>
            <p>Product visualization</p>
            <p>3D product demo</p>
            <p>3D motion graphics</p>
            <p>Product explainer</p>
          </div>
          <div className="service_slide">
            <p>3D product animation</p>
            <p>Product visualization</p>
            <p>3D product demo</p>
            <p>3D motion graphics</p>
            <p>Product explainer</p>
          </div>
          <div className="service_slide">
            <p>3D product animation</p>
            <p>Product visualization</p>
            <p>3D product demo</p>
            <p>3D motion graphics</p>
            <p>Product explainer</p>
          </div>
          <div className="service_slide">
            <p>3D product animation</p>
            <p>Product visualization</p>
            <p>3D product demo</p>
            <p>3D motion graphics</p>
            <p>Product explainer</p>
          </div>
        </div>
        <div className="service_main_slide2">
          <div className="service_slide2">
            <p>3D product video</p>
            <p>Interactive 3D</p>
            <p>Product animation</p>
            <p>3D commercial</p>
            <p>Realistic product animation</p>
          </div>
          <div className="service_slide2">
            <p>3D product video</p>
            <p>Interactive 3D</p>
            <p>Product animation</p>
            <p>3D commercial</p>
            <p>Realistic product animation</p>
          </div>
          <div className="service_slide2">
            <p>3D product video</p>
            <p>Interactive 3D</p>
            <p>Product animation</p>
            <p>3D commercial</p>
            <p>Realistic product animation</p>
          </div>
          <div className="service_slide2">
            <p>3D product video</p>
            <p>Interactive 3D</p>
            <p>Product animation</p>
            <p>3D commercial</p>
            <p>Realistic product animation</p>
          </div>
          <div className="service_slide2">
            <p>3D product video</p>
            <p>Interactive 3D</p>
            <p>Product animation</p>
            <p>3D commercial</p>
            <p>Realistic product animation</p>
          </div>
        </div>
      </div>

      {/* <!-- collaps section start  --> */}
      <div className="collaps_container">
        <p className="coll-first">
          Expert 3D Animation Services | Bring Your Vision to Life
        </p>
        <p className="coll-second">
          Professional 3D Animation for Unparalleled Storytelling
        </p>
        <p className="coll-third">
          Elevate your storytelling with our stunning 3D animation services.
          From concept to reality, we bring your vision to life.
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
              Transform Your Message with Engaging 3D Animations
            </p>
            <p className="content-heading">
              Our 3D animation services help you captivate audiences and convey
              complex ideas. Our expert artists craft stunning animations to
              elevate your brand.
            </p>

            <div className="content-block">
              <div className="content-block_container">
                <div className="content-block_heading">
                  <p className="content_list_heading">3D Animation Services:</p>
                </div>
                <div className="content_block_list">
                  <ul>
                    <li>
                      <span>1.3D Modeling:</span> Precise, detailed models
                    </li>
                    <li>
                      <span>2.Texturing and Lighting:</span> Realistic textures
                      and lighting
                    </li>
                    <li>
                      <span>3.Animation and Simulation:</span> Fluid motion and
                      realistic simulations
                    </li>
                    <li>
                      <span>4.Visual Effects (VFX):</span> Enhanced visual
                      storytelling
                    </li>
                    <li>
                      <span>5.Motion Graphics:</span> Dynamic, animated text and
                      graphics
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
                      <span>1.Architecture:</span> 3D building visualizations
                    </li>
                    <li>
                      <span>2.Product Visualization:</span> Realistic product
                      demos
                    </li>
                    <li>
                      <span>3.Medical Animation:</span> Educational, informative
                      animations
                    </li>
                    <li>
                      <span>4.Film and TV:</span> Cinematic 3D animation
                    </li>
                    <li>
                      <span>5.Advertising:</span> Engaging, attention-grabbing
                      ads
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
                      <span>1.Expertise:</span> Seasoned artists with industry
                      knowledge
                    </li>
                    <li>
                      <span>2.Quality:</span> High-end, realistic animations
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
                Get a quote for your 3D animation project today! Contact us at
                vikashy263@gmail.com or +91 7455925669 to discuss your vision.
              </p>
              <p>FAQs:</p>
              <p>Q: What file formats do you provide?</p>
              <p>A: We provide MP4, AVI, MOV, and other formats.</p>
              <p>Q: How long does 3D animation take?</p>
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

      {/* <!-- service card  --> */}
      <div class="service_card_container" id="service_card_container">
        <div class="service_card_main">
          {socialmediaData.map((item, index) => (
            <div key={index} class="service_card_main_container">
              <div class="service_card_box_one service_box_comm">
                <Link to={item.link}>
                  <img src={item.img} class="blur-img" alt="" />
                </Link>
              </div>
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default SocialMedia;
