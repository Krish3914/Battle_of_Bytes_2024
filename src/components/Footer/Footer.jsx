import { Link } from "react-router-dom";

import kmct_logo from "../../../images/BOB Logo-20240411T095943Z-001/BOB Logo/BoB Logo.png";
import azraqz_logo from "../../assets/Bitmesra.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedinIn,
  faFacebookF,
  // faWebsite,
  faWhatsapp,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import "./Footer.css";

function Footer() {
  return (
    <footer className="flex flex-col items-center p-4 footer">
      <div className="container max-w-screen-xl m-4 mb-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 w-full justify-between gap-10">
        <div className="">
          <a href="">
            <h1>Home</h1>
          </a>
          <a href="">
            <p>Meet the team</p>
          </a>
          <a href="">
            <p>Sponsors</p>
          </a>
          <a href="">
            <p>Proshows</p>
          </a>
          <a href="#Teams">
            <p>Teams</p>
          </a>
          <a href="#events">
            <p>Auction</p>
          </a>
          {/* <Link to="https://maps.app.goo.gl/S9Q6vhUcStcXADbj7">
            <a href="https://maps.app.goo.gl/S9Q6vhUcStcXADbj7">
              <p>College MAP</p>
            </a>
          </Link> */}
        </div>
        <div className="">
          <a href="">
            <h1>Information</h1>
          </a>
          <a href="">
            <p>FAQ</p>
          </a>
          <a href="">
            <p>Blog</p>
          </a>
          <a href="">
            <p>Support</p>
          </a>
        </div>
        <div className="">
          <Link to="/">
            <p>Event Home</p>
          </Link>
          <a href="">
            <p>About Battle_of_Bytes'2024</p>
          </a>
          <Link to="/login">
            <a href="">
              <p>Team Login</p>
            </a>
          </Link>
          <Link to="/l/contact" target="_blank">
            <p>Contact us</p>
          </Link>
        </div>
        <div className="flex flex-col items-center sm:col-span-3 md:col-span-1">
          <p className="font-sans uppercase">Powered By</p>
          <a href="https://www.instagram.com/battle_of_bytes">
            <img src={azraqz_logo} alt="azraqz" className="w-[171px] h-38 azraqz-logo" />
          </a>
          <p className="text-3xl font-orbitron tracking-wide font-bold text-white">
            {/* 2020-2024 */}
          </p>
        </div>
      </div>
      <hr className="w-full max-w-screen-xl divider" />
      <div className="flex flex-col flex-hidden sm:flex-row gap-8 justify-between items-center container max-w-screen-xl mb-8 mt-8">
        <div className="flex justify-center lg:justify-start ">
          <img src={kmct_logo} alt="karma" className="md:w-auto w-[100px] h-[110px]" />
        </div>
        <div className="flex flex-wrap justify-center">
          <Link to="/terms">
            <h1 className="px-[20px]">Terms</h1>
          </Link>

          <Link to="/l/privacy-policy">
            <h1 className="px-[20px]">Privacy</h1>
          </Link>
          <Link to="/l/spotlight">
            <h1 className="px-[20px]">SpotLight</h1>
          </Link>

          <Link to="/cancellation">
            <h1 className="px-[20px]">Team Backout</h1>
          </Link>
        </div>
        <div className="flex">
          <a
            className="icon-container"
            href="https://battleofbytes.techverse.ltd"
          >
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
          <a className="icon-container" href="https://www.linkedin.com/company/battle-of-bytes/">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          <a className="icon-container" href="https://www.instagram.com/battle_of_bytes">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>
      <div>
        Designed and Developed by Team: <b>Tech-Troopers</b>
        {/* <br /> */}
        {/* Team Members: <em>Krish, Dhruv,</em> Krishna, Mayank, Nainav, Abhijeet, Siddharth, Ishan, Akshat,  */}
      </div>
    </footer>
  );
}

export default Footer;
