import React from "react";
import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";



function Header() {
  const ref = useRef(null);
  

  useEffect(() => {
    const handleClick = (event) => {
      let nav = document.querySelector(".nav-ul");
      nav.classList.toggle("active");

    };

    const element = ref.current;

    element.addEventListener("click", handleClick);

    return () => {
      element.removeEventListener("click", handleClick);
    };
  }, []);

 



  
  return (
    <>
      <header>
        <div className="navbar">
          <div className="nav-logo">
            <img className="logo-img" src="./images/logo.png" alt="" />
          </div>
          <div className="fa">
            <i
              className="fa-solid fa-bars"
              id="hamberger"
              style={{ color: "white" }}
              ref={ref}
            ></i>
          </div>
          <div className="nav-mbl">

          </div>
          <div className="nav-menu">
            <ul className="nav-ul">
              <Link to={"/"}>
                <li>Home</li>
              </Link>
              <Link to={"/about"}>
                <li>About</li>
              </Link>
              <Link to={"/services"}>
                <li>Services</li>
              </Link>
              <Link to={"/contact"}>
                <li>Contact</li>
              </Link>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}
export default Header;
