import styled from "styled-components";
import menuImg from "../assets/nav/menuIcon.png";
import closeImg from "../assets/nav/closeIcon.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate()
    return (
        <Nav id="nav-menu">
            <a className="title" href="/">
        Portfolio
      </a>
      <div className="menu">
        <img
           className="menu-btn"
          src={
            menuOpen
              ? closeImg
              : menuImg
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`menu-items ${menuOpen && "menuOpen"}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a className="nav-link home" href="#home">Home</a>
          </li>
          <li>
            <a className="nav-link about"  href="#about">About</a>
          </li>
          <li>
            <a className="nav-link skills" href="#skills">Skills</a>
          </li>
          <li>
            <a className="nav-link projects" href="#project">Projects</a>
          </li>
          <li>
            <a className="nav-link resume" href="/resume">Resume</a>
          </li>
          <li>
            <a className="nav-link contact" href="#contact">Contact</a>
          </li>
        </ul>
      </div>
        </Nav>
    );
};
            // <div  onClick={navigate('/')}>Portfolio</div>
            // <div className="menu">
            //     <img
            //        
            //         
            //         alt=""
            //         onClick={() => setMenuOpen(!menuOpen)}
            //     />
            //     <div
            //         }
            //         onClick={() => setMenuOpen(false)}
            //     >
            //         <a  href="/">
            //             Home
            //         </a>
            //         <ahref="#aboutt">
            //             About
            //         </a>
            //         <a>
            //             Skills
            //         </a>
            //         <a >
            //             Projects
            //         </a>
            //         <a >
            //             Resume
            //         </a>
            //         <a >
            //             Contact
            //         </a>
            //     </div>
            // </div>

const Nav = styled.div`

/* box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px; */
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 15px;
    padding-bottom: 15px;
    z-index: 2;
    margin: 0 10%;
    .title {
        font-size: 30px;
        font-weight: 600;
        text-decoration: none;
        cursor: pointer;
        color: var(--color-text);
    }

    .menu {
        display: flex;
    }

    .menu-items {
        display: flex;
        gap: 47px;
        list-style: none;
    }

    .nav-link {
        font-size: 25px;
        color: var(--color-text);
        text-decoration: none;
    }

    @media screen and (max-width: 830px) {
        flex-direction: column;
        align-items: flex-start;

        .menu {
            position: absolute;
            right: 0;
            margin-right: 10%;
            flex-direction: column;
            align-items: flex-end;
            gap: 11px;
            z-index: 3;
        }

        .menu-btn {
            display: block;
            cursor: pointer;
        }

        .menu-items {
            display: none;
            flex-direction: column;
            align-items: center;
            gap: 13px;
            border-radius: 10px;
            background: rgb(25, 55, 109);
            background: linear-gradient(
                0deg,
                rgba(25, 55, 109, 0.2) 0%,
                rgba(25, 55, 109, 1) 100%
            );
            padding: 24px 33px;
            box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.25);
        }

        .menuOpen {
            display: flex;
            z-index: 1;
        }
    }
`;

export default Navbar;
