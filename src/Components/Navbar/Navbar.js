import React, { useState } from "react";
import "../Navbar/styles/navbar.css";
import { CustomButton } from "../../theme";
import { styled } from "@mui/material";
import logo from "../../Assets/NavBar/tem-s-logo 1.png";
import { Link } from "react-router-dom";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown"; // Import arrow drop down icon
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp"; // Import arrow drop up icon
const DropdownIcon = styled("i")({
  marginLeft: "5px",
  verticalAlign: "middle",
  transition: "transform 0.3s",
});
const DropdownContainer = styled("div")({
  position: "relative",
  zIndex: 1,
});
const DropdownContent = styled("div")({
  position: "absolute",
  top: "-100%",
});
const CenteredContainer = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: "0 40px",
});
const Navbar = ({ isComponentDark }) => {
  const [dropdownOpen, setDropdownOpen] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [industriesDropdownOpen, setIndustriesDropdownOpen] = useState(false);
  const toggleSolutionsDropdown = () => {
    setSolutionsDropdownOpen(!solutionsDropdownOpen);
  };
  const toggleServicesDropdown = () => {
    setServicesDropdownOpen(!servicesDropdownOpen);
  };
  const toggleIndustriesDropdown = () => {
    setIndustriesDropdownOpen(!industriesDropdownOpen);
  };
  const toggleDropdown = (index) => {
    const newDropdownOpen = [...dropdownOpen];
    newDropdownOpen[index] = !newDropdownOpen[index];
    setDropdownOpen(newDropdownOpen);
  };
  const navbarClass = isComponentDark ? "navbar dark" : "navbar";
  return (
    <CenteredContainer>
      <div style={{ width: "100%", paddingLeft: "50px" }}>
        <nav className={navbarClass}>
          <img
            style={{
              marginTop: "3.5%",
              pointerEvents: "none",
              zIndex: 1,
            }}
            src={logo}
            alt="Logo"
          />
          <ul className="navbar-links">
            {[
              { text: "Platform", path: "/platform" },
              { text: "Solutions", onClick: toggleSolutionsDropdown },
              { text: "Services", onClick: toggleServicesDropdown },
              { text: "Industries", onClick: toggleIndustriesDropdown },
              { text: "Customer Success", onClick: null },
              { text: "Shodat AI", onClick: null },
              { text: "About", onClick: null },
              {
                element: (
                  <CustomButton
                    style={{
                      marginTop: "-10%",
                      pointerEvents: "none",
                    }}
                  >
                    Request Demo
                  </CustomButton>
                ),
              },
            ].map(({ text, onClick, path, button, element }, index) => (
              <li
                className="navbar-dropdown"
                key={index}
                onMouseEnter={onClick}
                onMouseLeave={onClick}
              >
                <DropdownContainer>
                  <Link to={path} onClick={onClick}>
                    {element} {/* Render the image */}
                    {text} {onClick}
                    {button}
                  </Link>
                  {onClick &&
                    ((text === "Solutions" && solutionsDropdownOpen) ||
                      (text === "Services" && servicesDropdownOpen) ||
                      (text === "Industries" && industriesDropdownOpen)) && (
                      <DropdownContent className={`dropdown open`}>
                        {text === "Solutions" && (
                          <>
                            <a href="#">Data Engineering</a>
                            <a href="#">AI Innovation</a>
                            <a href="#">ERP System & Analytics</a>
                            <a href="#">Vision AI</a>
                            <a href="#">Edge Analytics</a>
                            <a href="#">Intelligent Enterprise</a>
                            <a href="#">Cloud Transformation</a>
                          </>
                        )}
                        {text === "Services" && (
                          <>
                            <a href="#">Innovate</a>
                            <a href="#">Manage</a>
                            <a href="#">Modernize</a>
                            <a href="#">Security</a>
                          </>
                        )}
                        {text === "Industries" && (
                          <>
                            <a href="#">Automative</a>
                            <a href="#">Manufacturing</a>
                            <a href="#">Oil & Gas</a>
                            <a href="#">Transportation</a>
                          </>
                        )}
                      </DropdownContent>
                    )}
                </DropdownContainer>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </CenteredContainer>
  );
};
export default Navbar;
