import React from "react";
import "./footer.css";
import { FaFacebookSquare, FaPhone, FaWhatsapp } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { IoLocation } from "react-icons/io5";
import { Link } from "react-router-dom";
import { MdOutlinePhone } from "react-icons/md";
const Footer = () => {
  return (
    <div className="footer-body">
      <div className="footer">
        <div className="grid sm:grid-cols-4 grid-cols-1 w-[100%]">
          <div>
            <div className="company-header">
              <img
                src="https://www.mealsection.com/WhatsApp%20Image%202024-08-24%20at%2020.18.12_988ce6f9.jpg"
                alt=""
                width={150}
              />
            </div>
            <div className="about-company">
              MealSection ensures a delightful culinary experience with a
              diverse menu and a user-friendly platform for easy ordering.
            </div>
          </div>
          <div>
            <div className="footer-head">Navigation</div>
            <ul className="footer-link-list">
              <li>
                <Link className="Footer-Link">Home</Link>
              </li>
              <li>
                {" "}
                <Link className="Footer-Link">About</Link>
              </li>
              <li>
                <Link className="Footer-Link">Contact</Link>
              </li>
              <li>
                <Link className="Footer-Link">FAQ</Link>
              </li>
              <li>
                <Link className="Footer-Link">Stores</Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="footer-head">Company</div>
            <ul className="footer-link-list">
              <li>
                <Link className="Footer-Link">Terms & Condition</Link>
              </li>
              <li>
                {" "}
                <Link className="Footer-Link">checkout</Link>
              </li>
              <li>
                <Link className="Footer-Link">contact us</Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="footer-head">Contact</div>
            <ul className="footer-link-list">
              <li>
                <div className="flex items-center gap-1">
                  <div>
                    <MdOutlinePhone
                      size={20}
                      className="mb-1"
                      color="#a4161bc0"
                    />
                  </div>
                  <div className="contact">: +234 701 323 4960</div>
                </div>
              </li>
              <li>
                <div className="flex items-center gap-1">
                  <div>
                    <CiMail size={20} className="mb-1" color="#a4161bc0" />
                  </div>
                  <div className="contact">: mealsection@gmail.com</div>
                </div>
              </li>
              <li>
                <div className="flex gap-1">
                  <div>
                    <IoLocation size={20} className="mb-1" color="#a4161bc0" />
                  </div>
                  <div className="contact">
                    {" "}
                    : Faith City, Ketu Adie-Owe, Lusada – Igbesa, Ogun State,
                    Nigeria.
                  </div>
                </div>
              </li>
              <li>
                <div className="socials">
                  <div
                    onClick={() => {
                      window.location.replace(
                        "https://web.facebook.com/profile.php?id=61555818232401"
                      );
                    }}
                  >
                    <img
                      width="30"
                      height="30"
                      src="https://img.icons8.com/3d-fluency/94/facebook-circled.png"
                      alt="facebook-circled"
                    />
                  </div>
                  <div
                    onClick={() => {
                      window.location.replace(
                        "https://www.instagram.com/meal.section/"
                      );
                    }}
                  >
                    <img
                      width="30"
                      height="30"
                      src="https://img.icons8.com/3d-fluency/94/instagram-logo.png"
                      alt="instagram-logo"
                    />
                  </div>
                  <div
                    onClick={() => {
                      window.location.replace("https://wa.me/+2347013234960");
                    }}
                  >
                    <img
                      width="30"
                      height="30"
                      src="https://img.icons8.com/3d-fluency/94/whatsapp.png"
                      alt="whatsapp"
                    />
                  </div>
                  <div
                    onClick={() => {
                      window.location.replace("tel:+2347013234960");
                    }}
                  >
                    <img
                      width="30"
                      height="30"
                      src="https://img.icons8.com/3d-fluency/94/phone.png"
                      alt="phone"
                    />
                  </div>
                  <div
                    onClick={() =>
                      window.location.replace("mailto:mealsection@gmail.com")
                    }
                  >
                    <img
                      width="30"
                      height="30"
                      src="https://img.icons8.com/3d-fluency/94/gmail.png"
                      alt="gmail"
                    />
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="copywrite">
        {" "}
        © 2024 MealSection .All Rights Reserved. Powered by Horbah's tech
      </div>
    </div>
  );
};

export default Footer;
