import styled from "styled-components";
import htmlImg from "../assets/skills/html.png"
import cssImg from "../assets/skills/css.png";
import figma from "../assets/skills/figma.png";
import reactImg from "../assets/skills/react.png";
import mongoImg from "../assets/skills/mongodb.png";
import nodeImg from "../assets/skills/node.png"

export const Skills = () => {
    return (
        <SKILL className="container" id="skills">
            <h2 className="title">SKILLS</h2>
            <div className="content">
                <div className="skills">
                    <div className="skill skills-card">
                        <div className="skillImageContainer">
                        <img src={htmlImg} alt={"HTML"} />
                        </div>
                        <p className="skills-card-name">HTML</p>
                    </div>
                    <div className="skill">
                        <div className="skillImageContainer skills-card-img">
                        <img src={cssImg} alt={"CSS"} />
                        </div>
                        <p>CSS</p>
                    </div>
                    <div className="skill">
                        <div className="skillImageContainer">
                        <img src={reactImg} alt={"REACT"} />
                        </div>
                        <p>REACT</p>
                    </div>
                    <div className="skill">
                        <div className="skillImageContainer">
                        <img src={mongoImg} alt={"mongoDB"} />
                        </div>
                        <p>mongoDB</p>
                    </div>
                    <div className="skill">
                        <div className="skillImageContainer">
                        <img src={nodeImg} alt={"NODE"} />
                        </div>
                        <p>NODE</p>
                    </div>
                    <div className="skill">
                        <div className="skillImageContainer">
                        <img src={figma} alt={"FIGMA"} />
                        </div>
                        <p>FIGMA</p>
                    </div>
                </div>
                </div>
        </SKILL>
    )
}

const SKILL = styled.div`
     color: var(--color-text);
  margin-top: 79px;
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
  justify-content: space-evenly;
  margin-top: 14px;
}

.skills {
  width: 70%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 37px;
}

.skill {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 11px;
}

.skillImageContainer {
  background-color: var(--color-secondary);
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 120px;
}

.skillImageContainer img {
  width: 75px;
}

.skill p {
  font-size: 25px;
  font-family: var(--primary-font);
  font-weight: 500;
}

@media screen and (max-width: 830px) {
  .content {
    flex-direction: column;
    align-items: center;
    gap: 34px;
  }

  .skills {
    width: 100%;
    flex-direction: row;
    justify-content: center;
  }
}
`