


import logo from "~/assets/images/logo/logo.png"
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import React, { useState } from 'react';

function Header() {
  const [isLoggedIn] = useState(!!localStorage.getItem('token'));
  const navigate = useNavigate();
  const handleLogout = ()=> {
    localStorage.removeItem("token");
    navigate("/");
    toast.success("Logout succsess!");
    console.log("Log out succsess!");                                     
   
  
  }
    return (
      <header className="header-section">
      <div className="container">
        <div className="header-wrapper">
          <div className="logo">
            <a href="/">
              <img src={logo} alt="logo" />
            </a>
          </div>
          <ul className="menu">
            <li>
              <a href="#0" className="active">
                Home
              </a>
              <ul className="submenu">
                <li>
                  <a href="/" className="active">
                    Home One
                  </a>
                </li>
                <li>
                  <a href="/">Home Two</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#0">movies</a>
              <ul className="submenu">
                <li>
                  <a href="/moviegird">Movie Grid</a>
                </li>
                <li>
                  <a href="/movielist">Movie List</a>
                </li>
                <li>
                  <a href="/moviedetail">Movie Details</a>
                </li>
                <li>
                  <a href="/moviedetail">Movie Details 2</a>
                </li>
                <li>
                  <a href="/movieticket">Movie Ticket Plan</a>
                </li>
                <li>
                  <a href="/movieseat">Movie Seat Plan</a>
                </li>
                <li>
                  <a href="/moviecheckout">Movie Checkout</a>
                </li>
                <li>
                  <a href="/moviefood">Movie Food</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#0">events</a>
              <ul className="submenu">
                <li>
                  <a href="events.html">Events</a>
                </li>
                <li>
                  <a href="event-details.html">Event Details</a>
                </li>
                <li>
                  <a href="event-speaker.html">Event Speaker</a>
                </li>
                <li>
                  <a href="event-ticket.html">Event Ticket</a>
                </li>
                <li>
                  <a href="event-checkout.html">Event Checkout</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#0">sports</a>
              <ul className="submenu">
                <li>
                  <a href="sports.html">Sports</a>
                </li>
                <li>
                  <a href="sport-details.html">Sport Details</a>
                </li>
                <li>
                  <a href="sports-ticket.html">Sport Ticket</a>
                </li>
                <li>
                  <a href="sports-checkout.html">Sport Checkout</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#0">pages</a>
              <ul className="submenu">
                <li>
                  <a href="about.html">About Us</a>
                </li>
                <li>
                  <a href="apps-download.html">Apps Download</a>
                </li>
                <li>
                  <a href="sign-in.html">Sign In</a>
                </li>
                <li>
                  <a href="sign-up.html">Sign Up</a>
                </li>
                <li>
                  <a href="404.html">404</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#0">blog</a>
              <ul className="submenu">
                <li>
                  <a href="blog.html">Blog</a>
                </li>
                <li>
                  <a href="blog-details.html">Blog Single</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="contact.html">contact</a>
            </li>
            <li className="header-button pr-0">
              <a href="#0">join us</a>
              <ul className="submenu">
              {/* Check if user is logged in, if yes, display logout option */}
              {isLoggedIn ? (
                <li>
                  <a href="#0" onClick={() => handleLogout()}>
                    Log Out
                  </a>
                </li>
              ) : (
                // If user is not logged in, display login option
                <li>
                  <a href="/signin">Log In</a>
                </li>
              )}
            </ul>
            </li>
          </ul>
          <div className="header-bar d-lg-none">
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>
    </header>
    
      
    );
}

export default Header;
