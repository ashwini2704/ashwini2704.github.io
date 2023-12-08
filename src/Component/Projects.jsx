import styled from "styled-components";
import projectImg from "../assets/projects/project.png"
import htmlImg from "../assets/skills/html.png"
import cssImg from "../assets/skills/css.png";
import reactImg from "../assets/skills/react.png";

export const Project = () => {
    return (
        <PROJECT id="projects">
            <h2 className="title">Projects</h2>
            <div className="projects">
            
                <div className="container project-card" >
                        <div className="image images"> 
                        {/* <img src={projectImg} alt={"Project"} className="image"/> */}
                        </div>
                    <h3 className="titles project-title">Every Sunday</h3>
                    <p className="description project-description">Every Sunday is a service for booking hotels and other travel services for professionals. It allows user to sort destination according to price, also user can search for the city, and also can filter products accorting to cities and rating. Is was a collabrative project and built by team of 5 members.</p>
                    <div className="skills project-tech-stack">
                        <div className="skill">
                            <div className="skillImageContainer">
                            <img src={htmlImg} alt={"HTML"} />
                            </div>
                        </div>
                        <div className="skill">
                            <div className="skillImageContainer">
                            <img src={cssImg} alt={"CSS"} />
                            </div>
                        </div>
                        <div className="skill">
                            <div className="skillImageContainer">
                            <img src={reactImg} alt={"REACT"} />
                            </div>
                        </div>
                    </div>
                    <div className="links">
                        <a href="https://github.com/ashwini2704/EveryDaySunday" className="link project-github-link">Github </a>
                        <a href="https://sparkly-salamander-87a5f4.netlify.app/" className="link project-deployed-link">Deployed</a>
                    </div>
                </div>
                <div className="container">
                    <div className="image imagem">

                    {/* <img src={projectImg} alt={"Project"} className="image"/> */}
                    </div>
                    <h3 className="titles">Medion</h3>
                    <p className="description">Medion is an online medicine store that provides a wide range of pharmaceutical products. It is one-stop destination for all your medical needs. It allows us to sort products by price and filter them according to the category</p>
                    <div className="skills">
                        <div className="skill">
                            <div className="skillImageContainer">
                            <img src={htmlImg} alt={"HTML"} />
                            </div>
                        </div>
                        <div className="skill">
                            <div className="skillImageContainer">
                            <img src={htmlImg} alt={"HTML"} />
                            </div>
                        </div>
                        <div className="skill">
                            <div className="skillImageContainer">
                            <img src={cssImg} alt={"CSS"} />
                            </div>
                        </div>
                        <div className="skill">
                            <div className="skillImageContainer">
                            <img src={reactImg} alt={"REACT"} />
                            </div>
                        </div>
                    </div>
                    <div className="links">
                        <a href="https://github.com/ashwini2704/exotic-minute-882/tree/main/exotic-minute" className="link">Github </a>
                        <a href="https://medion-f1xrixym3-ashwinis-projects-20cd0e82.vercel.app/" className="link">Deployed</a>
                    </div>
                </div>
                <div className="container">
                    <div className="image imagep">

                    {/* <img src={projectImg} alt={"Project"}/> */}
                    </div>
                    <h3 className="titles">Swiftpay</h3>
                    <p className="description">Swiftpay is a dynamic and user-friendly finance website that revolutionizes the way you manage your financial transactions. With Swiftpay, you can seamlessly handle subscriptions, send and receive money from your contacts, and witness real-time transaction updates right on your user interface.</p>
                    <div className="skills">
                        <div className="skill">
                            <div className="skillImageContainer">
                            <img src={htmlImg} alt={"HTML"} />
                            </div>
                        </div>
                        <div className="skill">
                            <div className="skillImageContainer">
                            <img src={cssImg} alt={"CSS"} />
                            </div>
                        </div>
                        <div className="skill">
                            <div className="skillImageContainer">
                            <img src={reactImg} alt={"REACT"} />
                            </div>
                        </div>
                    </div>
                    <div className="links">
                        <a href="https://github.com/ashwini2704/swiftPay" className="link">Github </a>
                        <a href="https://warlike-current-5989-gamma.vercel.app/" className="link">Deployed</a>
                    </div>
                </div>
                <div className="container">
                <div className="image imaget">

                {/* <img src={projectImg} alt={"Project"}/> */}
                </div>
                    {/* <img src={projectImg} alt={"Project"} className="image"/> */}
                    <h3 className="titles">Travel World</h3>
                    <p className="description">Travel Seekers is a destination booking website that allows users to explore various destinations, sort them according to their preferences, and book their dream vacations.</p>
                    <div className="skills">
                        <div className="skill">
                            <div className="skillImageContainer">
                            <img src={htmlImg} alt={"HTML"} />
                            </div>
                        </div>
                        <div className="skill">
                            <div className="skillImageContainer">
                            <img src={cssImg} alt={"CSS"} />
                            </div>
                        </div>
                        <div className="skill">
                            <div className="skillImageContainer">
                            <img src={reactImg} alt={"REACT"} />
                            </div>
                        </div>
                        <div className="skill">
                            <div className="skillImageContainer">
                            <img src={reactImg} alt={"REACT"} />
                            </div>
                        </div>
                        <div className="skill">
                            <div className="skillImageContainer">
                            <img src={reactImg} alt={"REACT"} />
                            </div>
                        </div>
                        <div className="skill">
                            <div className="skillImageContainer">
                            <img src={reactImg} alt={"REACT"} />
                            </div>
                        </div>
                    </div>
                    <div className="links">
                        <a href="https://github.com/ashwini2704/quixotic-snail-9802" className="link">Github </a>
                        <a href="https://my-app-six-coral.vercel.app/home" className="link">Deployed</a>
                    </div>
                </div>
            </div>
        </PROJECT>
    )
} 

const PROJECT = styled.div`
    margin-top: 76px;
  color: var(--color-text);
  margin-left: 10%;
  margin-right: 10%;

.title {
  font-size: 35px;
  font-weight: 700;
  letter-spacing: 1.75px;
  text-transform: uppercase;
}

.projects {
  margin-top: 37px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 55px;
  width: 100%;
}
.container {
  display: flex;
  flex-direction: column;
  background: linear-gradient(180deg, #576cbc 0%, #132a53 100%);
  border-radius: 10px;
  box-shadow: 0 16px 14px 0 #04152d;
  padding: 18px 24px;
  width: 400px;
  height: 1020px;
  position: relative;
}

.image {
  margin-bottom: 26px;
  border-radius: 10px;
  width:352px;
  height: 400px;
 
}
.images{
    background-image: url("https://firebasestorage.googleapis.com/v0/b/portfolio-67d8f.appspot.com/o/screencapture-sparkly-salamander-87a5f4-netlify-app-2023-11-29-21_56_51.png?alt=media&token=72cbf176-467c-4717-a7bc-5d7085d59b39");
    background-size: cover;
  background-position: top;
  transition: all 1.5s ease-in-out;
}
.imagem {
  background-image: url("https://firebasestorage.googleapis.com/v0/b/portfolio-67d8f.appspot.com/o/screencapture-localhost-3001-2023-12-05-22_28_40.png?alt=media&token=110e80e3-a333-4565-bacc-2e3e2e5eae1f");
  background-size: cover;
  background-position: top;
  transition: all 1.5s ease-in-out;
}
.imagep {
  background-image: url("https://firebasestorage.googleapis.com/v0/b/portfolio-67d8f.appspot.com/o/screencapture-localhost-3001-2023-12-05-22_57_27.png?alt=media&token=fe261f2b-2cf8-4da3-9c85-d154c7b0039c");
  background-size: cover;
  background-position: top;
  transition: all 1.5s ease-in-out;
}
.imaget{
  background-image: url("https://firebasestorage.googleapis.com/v0/b/portfolio-67d8f.appspot.com/o/screencapture-localhost-3001-home-2023-12-05-23_06_27.png?alt=media&token=3e032b8e-eb78-4ebe-b3ed-40709958491b");
  background-size: cover;
  background-position: top;
  transition: all 1.5s ease-in-out;
}

.image:hover {
    background-position: bottom;
}
.titles {
  font-size: 25px;
  font-weight: 700;
}

.description {
  margin-top: 6px;
  font-size: 25px;
  font-weight: 300;
}

.skills {
  width: 100%;
  margin-top: 14px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 5px;
  list-style: none;
}

.skill {
  font-size: 20px;
  font-weight: 300;
  border-radius: 15px;
  background: var(--color-dark);
  padding: 15px 10px ;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
}
.skillImageContainer {
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;

}
.links {
  width: 82%;
  margin: auto;
  margin-top: 26px;
  position: absolute;
  bottom: 25px;
  display: flex;
  /* gap: 15px; */
  justify-content: space-between;
}

.link {
  text-decoration: none;
  color: var(--color-text);
  font-size: 25px;
  font-weight: 500;
  border-radius: 100px;
  background: var(--color-primary);
  padding: 2px 22px 3px 22px;
  /* margin-right: 5px; */
}
`