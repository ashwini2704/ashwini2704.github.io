import styled from "styled-components";
import aboutImage from "../assets/about/aboutImage.png"
import cursorimage from "../assets/about/cursorIcon.png";
import serverImage from "../assets/about/serverIcon.png"

export const About = () => {
    return (
        <ABOUT id="about" class="about section">
            <h2 className="title">About</h2>
            <div className="content">
                {/* <img src={aboutImage} alt="about image" /> */}
                <ul className="aboutItems">
                <li className="aboutItem">
                    <img src={cursorimage} alt="Cursor icon" />
                    <div className="aboutItemText">
                    <h3>Frontend Developer</h3>
                    <p>
                        I'm a frontend developer with experience in building responsive
                        and optimized sites
                    </p>
                    </div>
                </li>
                <li className="aboutItem">
                    <img src={serverImage} alt="Server icon" />
                    <div className="aboutItemText">
                    <h3>Backend Developer</h3>
                    <p>
                        I have experience developing fast and optimised back-end systems
                        and APIs
                    </p>
                    </div>
                </li>
                <li className="aboutItem">
                    <img src={cursorimage} alt="UI icon" />
                    <div className="aboutItemText">
                    <h3>UI Designer</h3>
                    <p>
                        I have designed multiple landing pages and have created design
                        systems as well
                    </p>
                    </div>
                </li>
                </ul>
            </div>
        </ABOUT>
    )
}

const ABOUT = styled.div`
    position: relative;
  background-color: rgba(12, 12, 12, 0.6);
  border-radius: 15px;
  padding: 73px;
  margin-top: 129px;
  z-index: 1;
  margin-left: 10%;
  margin-right: 10%;

  .title {
  color: var(--color-text);
  font-size: 35px;
  font-weight: 700;
  letter-spacing: 1.75px;
  text-transform: uppercase;
}

.content {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.aboutImage {
  width: 35%;
}

.aboutItems {
  color: var(--color-text);
  display: flex;
  flex-direction: column;
  gap: 50px;
}

.aboutItem {
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 20px;
  list-style: none;
  padding: 25px;
  background-image: linear-gradient(
    90deg,
    rgba(165, 215, 232, 0.42) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  background-size: 0 100%;
  background-repeat: no-repeat;
  transition: 0.4s;
}

.aboutItem:hover {
  background-size: 100% 100%;
}

.aboutItem h3 {
  font-size: 25px;
  font-weight: 600;
}

.aboutItem p {
  font-size: 25px;
}

@media screen and (max-width: 1300px) {
  .container {
    background-color: transparent;
    padding-left: 0;
    padding-right: 0;
  }

  .content {
    flex-direction: column;
  }

  .aboutImage {
    display: none;
  }

  .aboutItems {
    margin-top: 29px;
  }

  .aboutItem {
    padding-left: 0;
    padding-right: 0;
  }
}
`