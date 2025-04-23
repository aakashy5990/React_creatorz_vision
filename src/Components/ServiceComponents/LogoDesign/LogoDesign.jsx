import React from "react";
import { useOutletContext } from "react-router-dom";
import style from "./LogoDesign.module.css";
import { logodesignData } from "../../../assets/assets";
import { useState } from "react";

function LogoDesign() {
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
              <p>LOGO</p>
              <p>Brand deserves more</p>
              <p>than just Comic Sans.</p>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- *************End intro content section ****************** -->

<!-- ******************text slider section start ******************* --> */}
      <div className="service_main_slider_container">
        <div className="text_service_main_slide">
          <div className="text_service_slide">
            <p>Boldideas,</p>
            <p>minimal</p>
            <p>effort</p>
          </div>
          <div className="text_service_slide">
            <p>Bold ideas,</p>
            <p>minimal</p>
            <p>effort</p>
          </div>
          <div className="text_service_slide">
            <p>Bold ideas,</p>
            <p>minimal</p>
            <p>effort</p>
          </div>
          <div className="text_service_slide">
            <p>Bold ideas,</p>
            <p>minimal</p>
            <p>effort</p>
          </div>
          <div className="text_service_slide">
            <p>Bold ideas,</p>
            <p>minimal</p>
            <p>effort</p>
          </div>
        </div>

        <div className="service_main_slide">
          <div className="service_slide">
            <p>Logo design</p>
            <p>Custom logos</p>
            <p>Brand logo</p>
            <p>Business logos</p>
            <p>Creative logos</p>
          </div>
          <div className="service_slide">
            <p>Logo design</p>
            <p>Custom logos</p>
            <p>Brand logo</p>
            <p>Business logos</p>
            <p>Creative logos</p>
          </div>
          <div className="service_slide">
            <p>Logo design</p>
            <p>Custom logos</p>
            <p>Brand logo</p>
            <p>Business logos</p>
            <p>Creative logos</p>
          </div>
          <div className="service_slide">
            <p>Logo design</p>
            <p>Custom logos</p>
            <p>Brand logo</p>
            <p>Business logos</p>
            <p>Creative logos</p>
          </div>
          <div className="service_slide">
            <p>Logo design</p>
            <p>Custom logos</p>
            <p>Brand logo</p>
            <p>Business logos</p>
            <p>Creative logos</p>
          </div>
        </div>
        <div className="service_main_slide2">
          <div className="service_slide2">
            <p>Minimalist logo</p>
            <p>Modern logo</p>
            <p>Logo designer</p>
            <p>Professional logos</p>
            <p>Unique logos</p>
          </div>
          <div className="service_slide2">
            <p>Minimalist logo</p>
            <p>Modern logo</p>
            <p>Logo designer</p>
            <p>Professional logos</p>
            <p>Unique logos</p>
          </div>
          <div className="service_slide2">
            <p>Minimalist logo</p>
            <p>Modern logo</p>
            <p>Logo designer</p>
            <p>Professional logos</p>
            <p>Unique logos</p>
          </div>
          <div className="service_slide2">
            <p>Minimalist logo</p>
            <p>Modern logo</p>
            <p>Logo designer</p>
            <p>Professional logos</p>
            <p>Unique logos</p>
          </div>
          <div className="service_slide2">
            <p>Minimalist logo</p>
            <p>Modern logo</p>
            <p>Logo designer</p>
            <p>Professional logos</p>
            <p>Unique logos</p>
          </div>
        </div>
      </div>

      {/* <!-- collaps section start  --> */}
      <div className="collaps_container">
        <p className="coll-first">
          Expert Logo Design Services | Create a Lasting Brand Identity
        </p>
        <p className="coll-second">
          Professional Logo Design for Unparalleled Brand Recognition
        </p>
        <p className="coll-third">
          Elevate your brand with our professional logo design services. Unique,
          memorable, and scalable designs to establish your brand's visual
          identity.
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
              Crafting Unique Logos that Reflect Your Brand's Essence
            </p>
            <p className="content-heading">
              {" "}
              our expert logo designers craft custom logos that capture your
              brand's essence and values. We ensure scalability, uniqueness, and
              memorability.
            </p>

            <div className="content-block">
              <div className="content-block_container">
                <div className="content-block_heading">
                  <p className="content_list_heading">Logo Design Services:</p>
                </div>
                <div className="content_block_list">
                  <ul>
                    <li>
                      <span>1.Custom Logo Design:</span> Tailored to your
                      brand's identity
                    </li>
                    <li>
                      <span>2.Logo Redesign:</span> Refresh your existing logo
                    </li>
                    <li>
                      <span>3.Logo Variation:</span> Adapt logos for different
                      platforms
                    </li>
                    <li>
                      <span>4.Brand Guidelines:</span> Consistent branding
                      across channels
                    </li>
                    <li>
                      <span>5.Vector Graphics:</span> Scalable, high-resolution
                      logos
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
                      <span>1.Corporate & Business:</span> Professional logos
                      for companies
                    </li>
                    <li>
                      <span>2.E-commerce & Retail:</span> Memorable logos for
                      online stores
                    </li>
                    <li>
                      <span>3.Healthcare & Wellness:</span> Compassionate logos
                      for healthcare services
                    </li>
                    <li>
                      <span>4.Education & Training:</span> Informative logos for
                      educational institutions
                    </li>
                    <li>
                      <span>5.Food & Beverage:</span> Appetizing logos for
                      restaurants & brands
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
                      <span>1.Expertise:</span> Seasoned designers with a keen
                      eye for detail
                    </li>
                    <li>
                      <span>2.Quality:</span> Unique, high-resolution designs
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
                Get a quote for your logo design project today! Contact us at
                vikashy263@gmail.com or +91 7455925669 to discuss your vision.
              </p>
              <p>FAQs:</p>
              <p>Q: What file formats do you provide?</p>
              <p>A: We provide AI, EPS, PNG, JPEG, and other formats.</p>
              <p>Q: How long does logo design take?</p>
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
          {logodesignData.map((item, index) => (
            <div key={index} className="service_card_main_container">
              <div className="service_card_box_one service_box_comm">
                <img src={item.img} className="blur-img" alt="" />
              </div>
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default LogoDesign;
