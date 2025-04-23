import React from "react";
import style from "./Guidelines.module.css";
import { guidelinesData } from "../../../assets/assets";
import { Link } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import { useState } from "react";

function Guidelines() {
  const { isOpen, setIsOpen, toggle } = useOutletContext();
  const [popup, setPopup] = useState(false);
  const [videoSrc, setVideoSrc] = useState("");

  const handleshowpop = (videoUrl) => {
    setVideoSrc(videoUrl);
    setPopup(true);
  };
  return (
    <>
      <div class={style.intro_section}>
        {/* <!-- ************* intro content section is start ****************** --> */}
        <div class="intro_content">
          <div class="intro_content_main">
            <div class="intro_text_content">
              <p>Brand Guidelines</p>
              <p>Your Blueprint for </p>
              <p>a Stronger Brand</p>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- *************End intro content section ****************** -->

  <!-- ******************logo slider section start ******************* --> */}
      <div class="service_main_slider_container">
        <div class="text_service_main_slide">
          <div class="text_service_slide">
            <p>Your</p>
            <p>Brand</p>
            <p>Is</p>
            <p>Your</p>
            <p>Voice.</p>
          </div>
          <div class="text_service_slide">
            <p>Your</p>
            <p>Brand</p>
            <p>Is</p>
            <p>Your</p>
            <p>Voice.</p>
          </div>
          <div class="text_service_slide">
            <p>Your</p>
            <p>Brand</p>
            <p>Is</p>
            <p>Your</p>
            <p>Voice.</p>
          </div>
          <div class="text_service_slide">
            <p>Your</p>
            <p>Brand</p>
            <p>Is</p>
            <p>Your</p>
            <p>Voice.</p>
          </div>
          <div class="text_service_slide">
            <p>Your</p>
            <p>Brand</p>
            <p>Is</p>
            <p>Your</p>
            <p>Voice.</p>
          </div>
        </div>

        <div class="service_main_slide">
          <div class="service_slide">
            <p>Brand guidelines</p>
            <p>Visual identity</p>
            <p>Brand manual</p>
            <p>Logo usage</p>
            <p>Typography guide</p>
          </div>
          <div class="service_slide">
            <p>Brand guidelines</p>
            <p>Visual identity</p>
            <p>Brand manual</p>
            <p>Logo usage</p>
            <p>Typography guide</p>
          </div>
          <div class="service_slide">
            <p>Brand guidelines</p>
            <p>Visual identity</p>
            <p>Brand manual</p>
            <p>Logo usage</p>
            <p>Typography guide</p>
          </div>
          <div class="service_slide">
            <p>Brand guidelines</p>
            <p>Visual identity</p>
            <p>Brand manual</p>
            <p>Logo usage</p>
            <p>Typography guide</p>
          </div>
          <div class="service_slide">
            <p>Brand guidelines</p>
            <p>Visual identity</p>
            <p>Brand manual</p>
            <p>Logo usage</p>
            <p>Typography guide</p>
          </div>
        </div>
        <div class="service_main_slide2">
          <div class="service_slide2">
            <p>Color palette</p>
            <p>Design system</p>
            <p>Brand consistency</p>
            <p>Corporate identity</p>
            <p>Style guide</p>
          </div>
          <div class="service_slide2">
            <p>Color palette</p>
            <p>Design system</p>
            <p>Brand consistency</p>
            <p>Corporate identity</p>
            <p>Style guide</p>
          </div>
          <div class="service_slide2">
            <p>Color palette</p>
            <p>Design system</p>
            <p>Brand consistency</p>
            <p>Corporate identity</p>
            <p>Style guide</p>
          </div>
          <div class="service_slide2">
            <p>Color palette</p>
            <p>Design system</p>
            <p>Brand consistency</p>
            <p>Corporate identity</p>
            <p>Style guide</p>
          </div>
          <div class="service_slide2">
            <p>Color palette</p>
            <p>Design system</p>
            <p>Brand consistency</p>
            <p>Corporate identity</p>
            <p>Style guide</p>
          </div>
        </div>
      </div>

      {/* <!-- collaps section start  --> */}
      <div class="collaps_container">
        <p class="coll-first">
          Expert Brand Guidelines Services | Consistent Branding
        </p>
        <p class="coll-second">
          Professional Brand Guidelines for Unified Branding
        </p>
        <p class="coll-third">
          Establish a strong brand identity with our comprehensive brand
          guidelines services. Ensure consistency across all channels.
        </p>
        <div class="know_btn">
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
            <p class="content-pera">Define Your Brand's Visual Identity</p>
            <p class="content-heading">
              Our brand guidelines services help you maintain a consistent brand
              image. Our experts develop comprehensive guidelines to ensure
              unity across all marketing materials.
            </p>

            <div class="content-block">
              <div class="content-block_container">
                <div class="content-block_heading">
                  <p class="content_list_heading">Brand Guidelines Services:</p>
                </div>
                <div class="content_block_list">
                  <ul>
                    <li>
                      <span>1.Brand Positioning:</span> Define your brand's
                      mission and values
                    </li>
                    <li>
                      <span>2.Visual Identity:</span> Logos, color palettes,
                      typography, and imagery
                    </li>
                    <li>
                      <span>3.Tone of Voice:</span> Language and communication
                      style
                    </li>
                    <li>
                      <span>4.Usage Guidelines:</span> Correct usage of brand
                      assets
                    </li>
                    <li>
                      <span>5.Style Guide:</span> Consistent design elements
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="content-block">
              <div class="content-block_container">
                <div class="content-block_heading">
                  <p class="content_list_heading">
                    Industry-Specific Solutions:
                  </p>
                </div>
                <div class="content_block_list">
                  <ul>
                    <li>
                      <span>1.Corporate & Business:</span> Professional branding
                      for companies
                    </li>
                    <li>
                      <span>2.E-commerce & Retail:</span> Consistent branding
                      for online stores
                    </li>
                    <li>
                      <span>3.Healthcare & Wellness:</span> Compassionate
                      branding for healthcare services
                    </li>
                    <li>
                      <span>4.Education & Training:</span> Informative branding
                      for educational institutions
                    </li>
                    <li>
                      <span>5.Food & Beverage:</span> Appetizing branding for
                      restaurants & brands
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="content-block">
              <div class="content-block_container">
                <div class="content-block_heading">
                  <p class="content_list_heading">Why Choose Us:</p>
                </div>
                <div class="content_block_list">
                  <ul>
                    <li>
                      <span>1.Expertise:</span> Seasoned designers with branding
                      expertise
                    </li>
                    <li>
                      <span>2.Quality:</span> Comprehensive guidelines for
                      consistent branding
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

            <div class="content_quite">
              <p>
                Get a quote for your brand guidelines project today! Contact us
                at vikashy263@gmail.com or +91 7455925669 to discuss your
                vision.
              </p>
              <p>FAQs:</p>
              <p>Q: What is included in brand guidelines?</p>
              <p>
                A: Logos, color palettes, typography, imagery, tone of voice,
                and usage guidelines.
              </p>
              <p>Q: Why are brand guidelines important?</p>
              <p>A: Consistency, professionalism, and brand recognition.</p>
            </div>

            <div class="port_btn_container">
              <a href="http://portfolio.creatorzvision.com/" class="port_btn">
                Portfolio
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- service card  --> */}
      <div class="service_card_container">
        <div class="service_card_main">
          {guidelinesData.map((item, index) => (
            <div key={index} class="service_card_main_container">
              <div class="service_card_box_two service_box_comm">
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

export default Guidelines;
