import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";
import style from "./Brochure.module.css";
import { brochurecatalougeData } from "../../../assets/assets";
import { Link } from "react-router-dom";
import ServicePopUp from "../ServicePopUp/ServicePopUp";

function Brochure() {
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
        <div className="intro_content">
          <div className="intro_content_main">
            <div className="intro_text_content">
              <p>Brochure & Catalouge</p>
              <p>Turning Pages Into Experiences</p>
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
            <p>Brochure design</p>
            <p>Catalogue design</p>
            <p>Print materials</p>
            <p>Custom brochures</p>
            <p>Product catalogues</p>
          </div>
          <div className="service_slide">
            <p>Brochure design</p>
            <p>Catalogue design</p>
            <p>Print materials</p>
            <p>Custom brochures</p>
            <p>Product catalogues</p>
          </div>
          <div className="service_slide">
            <p>Brochure design</p>
            <p>Catalogue design</p>
            <p>Print materials</p>
            <p>Custom brochures</p>
            <p>Product catalogues</p>
          </div>
          <div className="service_slide">
            <p>Brochure design</p>
            <p>Catalogue design</p>
            <p>Print materials</p>
            <p>Custom brochures</p>
            <p>Product catalogues</p>
          </div>
          <div className="service_slide">
            <p>Brochure design</p>
            <p>Catalogue design</p>
            <p>Print materials</p>
            <p>Custom brochures</p>
            <p>Product catalogues</p>
          </div>
        </div>
        <div className="service_main_slide2">
          <div className="service_slide2">
            <p>Corporate brochures</p>
            <p>Creative layouts</p>
            <p>Marketing brochures</p>
            <p>Digital catalogues</p>
            <p>Brand materials</p>
          </div>
          <div className="service_slide2">
            <p>Corporate brochures</p>
            <p>Creative layouts</p>
            <p>Marketing brochures</p>
            <p>Digital catalogues</p>
            <p>Brand materials</p>
          </div>
          <div className="service_slide2">
            <p>Corporate brochures</p>
            <p>Creative layouts</p>
            <p>Marketing brochures</p>
            <p>Digital catalogues</p>
            <p>Brand materials</p>
          </div>
          <div className="service_slide2">
            <p>Corporate brochures</p>
            <p>Creative layouts</p>
            <p>Marketing brochures</p>
            <p>Digital catalogues</p>
            <p>Brand materials</p>
          </div>
          <div className="service_slide2">
            <p>Corporate brochures</p>
            <p>Creative layouts</p>
            <p>Marketing brochures</p>
            <p>Digital catalogues</p>
            <p>Brand materials</p>
          </div>
        </div>
      </div>

      <div className="collaps_container">
        <p className="coll-first">
          Expert Brochure & Catalogue Design Services | Elevate Your Brand
        </p>
        <p className="coll-second">
          Professional Brochure & Catalogue Design for Business Success
        </p>
        <p className="coll-third">
          Create stunning brochures & catalogues with our expert design
          services. Enhance your brand's visual identity & leave a lasting
          impression.
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
              Brochure & Catalogue Design Solutions for Various Industries
            </p>
            <p className="content-heading">
              our brochure & catalogue design services help you showcase your
              products, services, and brand story in style. Our expert designers
              craft visually appealing, informative, and engaging materials.
            </p>

            <div className="content-block">
              <div className="content-block_container">
                <div className="content-block_heading">
                  <p className="content_list_heading">
                    Brochure & Catalogue Design Services:
                  </p>
                </div>
                <div className="content_block_list">
                  <ul>
                    <li>
                      <span>1.Corporate Brochures:</span> Effective
                      communication for business
                    </li>
                    <li>
                      <span>2.Product Catalogues:</span> Showcase your products
                      with elegance
                    </li>
                    <li>
                      <span>3.Sales Brochures:</span> Compelling designs to
                      drive conversions
                    </li>
                    <li>
                      <span>4.Company Profiles:</span> Professional profiles to
                      establish credibility
                    </li>
                    <li>
                      <span>5.Digital Catalogues:</span> Interactive, engaging
                      online experiences
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
                      <span>1.Retail & E-commerce:</span> Showcase products,
                      promotions, and brand
                    </li>
                    <li>
                      <span>2.Real Estate & Construction:</span> Highlight
                      properties, features, and services
                    </li>
                    <li>
                      <span>3.Healthcare & Wellness:</span> Communicate
                      services, treatments, and expertise
                    </li>
                    <li>
                      <span>4.Education & Training:</span> Informative materials
                      for students, faculty
                    </li>
                    <li>
                      <span>5.Hospitality & Tourism:</span> Showcase
                      experiences, amenities, and destinations
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
                      <span>2.Quality:</span> High-end designs, precision
                      printing
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
                Get a quote for your brochure & catalogue design project today!
                Contact us at vikashy263@gmail.com or +91 7455925669 to discuss
                your vision.
              </p>
              <p>FAQs:</p>
              <p>Q: What file formats do you provide?</p>
              <p>A: We provide PDF, JPEG, PNG, and other formats.</p>
              <p>Q: How long does brochure & catalogue design take?</p>
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
          {brochurecatalougeData.map((item, index) => (
            <div key={index} className="service_card_main_container">
              <div
                className="service_card_box_one service_box_comm"
                onClick={() => handleshowpop(item.link)}
              >
                <Link to={item.link}>
                  <img src={item.img} className="blur-img" alt="" />
                </Link>
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

export default Brochure;
