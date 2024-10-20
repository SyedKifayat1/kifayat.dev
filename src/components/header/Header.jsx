import React, { useState, useEffect } from "react";
import "./header.css";
function Header() {
  // ==================  Change background header ====================//

  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    //when the scroll is higher then 200 viewport height, add the scroll-header class to a tag with the header tag
    if (this.scrollY >= 80) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
  });

  // // ================== Toggle Menu ====================//
  // const [Toggle, showMenu] = useState(false);
  // const [activeNav, setActiveNav] = useState("#home");

  // useEffect(() => {
  //   const themeBtn = document.querySelector(".theme-btn");
  //   const getCurrentTheme = () =>
  //     document.body.classList.contains("dark-theme") ? "dark" : "light";
  //   const getCurrentIcon = () =>
  //     themeBtn.classList.contains("sun") ? "sun" : "moon";
  //   const toggleTheme = () => {
  //     document.body.classList.toggle("dark-theme");  
  //   };
  //   themeBtn.addEventListener("click", toggleTheme);
  //   return () => {
  //     themeBtn.removeEventListener("click", toggleTheme);
  //   };
  // }, []);

  const [Toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");

  useEffect(() => {
    const themeBtn = document.querySelector(".theme-btn");

    // Set dark theme and moon icon by default
    if (!document.body.classList.contains("dark-theme")) {
      document.body.classList.add("dark-theme");
    }

    if (!themeBtn.classList.contains("moon")) {
      themeBtn.classList.add("moon"); // Set moon icon by default for dark theme
    }

    const toggleTheme = () => {
      // Toggle dark/light theme on body
      document.body.classList.toggle("dark-theme");

      // Toggle between moon and sun icons on the theme button
      if (themeBtn.classList.contains("moon")) {
        themeBtn.classList.replace("moon", "sun"); // Switch to sun icon for light mode
      } else {
        themeBtn.classList.replace("sun", "moon"); // Switch to moon icon for dark mode
      }
    };

    themeBtn.addEventListener("click", toggleTheme);

    return () => {
      themeBtn.removeEventListener("click", toggleTheme);
    };
  }, []);


  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          Syed Kifayat
        </a>
        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a
                href="#home"
                onClick={() => setActiveNav("#home")}
                className={
                  activeNav === "#home" ? "nav__link active-link" : "nav__link"
                }
              >
                <i className="uil uil-estate nav__icon"></i> Home
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#about"
                onClick={() => setActiveNav("#about")}
                className={
                  activeNav === "#about" ? "nav__link active-link" : "nav__link"
                }
              >
                <i className="uil uil-user nav__icon"></i> About
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#skills"
                onClick={() => setActiveNav("#skills")}
                className={
                  activeNav === "#skills"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-file-alt nav__icon"></i> Skills
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#services"
                onClick={() => setActiveNav("#services")}
                className={
                  activeNav === "#services"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-briefcase-alt nav__icon"></i> Services
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#portfolio"
                onClick={() => setActiveNav("#postfolio")}
                className={
                  activeNav === "#postfolio"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-scenery nav__icon"></i> Portfolio
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#contact"
                onClick={() => setActiveNav("#contact")}
                className={
                  activeNav === "#contact"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-message nav__icon"></i> Contact
              </a>
            </li>

          </ul>
          <i
            className="uil uil-times nav__close"
            onClick={() => showMenu(!Toggle)}
          ></i>
        </div>


        <div className="toggle-bottom">


          <input type="checkbox" id="darkmode-toggle" className="input" />
          <label for="darkmode-toggle" className={Toggle ? "display-none" : "theme-btn"}>
            <div className="theme-toggle"></div>
            <div className="icons">
              <i className="bx bxs-moon"></i>
              <i className="bx bx-sun"></i>
            </div>
          </label>

          <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
            <i className="uil uil-apps"></i>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
