import React from "react";
import styled from "styled-components";
import githubIcon from "../assets/contact/githubIcon.png";
import linkedIn from "../assets/contact/linkedinIcon.png";
import emailIcon from "../assets/contact/emailIcon.png"
import phoneIcon from "../assets/contact/phoneIcon.png"

export const Contact = () => {
  return (
    <CONTACT  id="contact">
      <div className="text">
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className="links">
        <li className="link" >
          <img src={emailIcon} alt="Email icon" />
          <a href="mailto:ashwini.titarmare96@gmail.com"  id="contact-email">ashwini.titarmare96@gmail.com</a>
        </li>
        <li className="link">
          <img
            src={linkedIn}
            alt="LinkedIn icon"
          />
          <a id="contact-linkedin" href="https://www.linkedin.com/ashwinititarmare">linkedin.com/ashwini</a>
        </li>
        <li className="link">
          <img src={githubIcon} alt="Github icon" />
          <a href="https://www.github.com/ashwini2704" id="contact-github">github.com/ashwini</a>
        </li>
        <li className="link" >
          <img className="phones" src={phoneIcon} alt="Github icon" />
          <p id="contact-phone">+91 <span>8275014292</span></p>
        </li>
      </ul>
    </CONTACT>
  );
};

const CONTACT = styled.div`
  color: var(--color-text);
  margin-top: 120px;
  background-color: var(--color-secondary);
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100vw;
  padding: 58px 10%;
  gap: 10px;

.text h2 {
  font-size: 80px;
  font-weight: 700;
  letter-spacing: 4px;
}
.phones {
  height: 45px;
  color: white;
}
.text p {
  font-size: 30px;
  font-weight: 400;
  letter-spacing: 2px;
}

.links {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  list-style: none;
  gap: 20px;
}
#contact-phone{
  font-size: 21px;
}
.link {
  display: flex;
  align-items: center;
  gap: 25px;
}

.link a {
  color: var(--color-text);
  text-decoration: none;
  font-size: 25px;
  font-weight: 300;
  letter-spacing: 1px;
}

@media screen and (max-width: 830px) {
  
    flex-direction: column;
    gap: 23px;

  .text {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .links {
    align-items: center;
  }
}
`