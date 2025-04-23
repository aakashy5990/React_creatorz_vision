import React from "react";
import './About.css'
import about_banner from '../../assets/About-banner.png'
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="about_container">
      <div className="about_head">
        <div className="main_about_head_container">
          <p>ABOUT</p>
        </div>
        <p className="who_im">WHO AM I ?</p>
      </div>
      <div className="about_main_container">
        <div className="about_img_container">
          <img src={about_banner} alt="" />
        </div>
        <div className="about_content_container">
          <p className="about_content_heading">I am Dynamic and Creative</p>
          <p className="about_content_first_pera pera">
            Creatorz Vision is all about bringing your ideas to life through
            design. As a passionate creative, I specialize in graphic design, 3D
            modeling, 3D animation, video editing, and more. My goal? To help
            you tell your story and connect with your audience in a memorable
            and impactful way.
          </p>
          <p className="about_content_second_pera pera">
            I understand that each project is unique, so I work closely with
            clients to ensure every design aligns with their vision. Whether
            you're looking to build a brand, create stunning visuals, or craft
            engaging videos, I'm here to make it happen. With a blend of fresh
            ideas and the latest technology, I deliver quality work that meets
            deadlines and exceeds expectations.
          </p>

          <div className="about_btn_container">
            <div className="btn_container">
              <Link to="#" className="dawnload_cv_btn">
                Portfolio
              </Link>
              <Link to="https://whatsform.com/4bj9mX\" className="hire_me_btn">
                HIRE ME
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
