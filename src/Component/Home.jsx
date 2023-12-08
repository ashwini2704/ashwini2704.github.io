import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export const Home = () => {
  const navigate = useNavigate()
    return (
        <HOME id="home">
         <div  className="content">
            <h1 className="title" id="user-detail-name">Hi, I'm Ashwini</h1>
            <p className="description"  id="user-detail-intro">Highly skilled and motivated Full-Stack web developer proficient in MERN stack. Possesses strong technical expertise in front-end and back-end development, coupled with excellent problem-solving and communication skills.</p>
            <a className="contact-btn" href="ashwini.titarmare96@gmail.com">Contact Me</a>
         </div>
         <div className="image home-img">
          {/* <img src={photo} alt="Hero image" className="heroImg" /> */}
         </div>
          <div className="top"></div>
          <div className="bottom"></div>
          <button id="resume-button-2" onClick={()=> {
            navigate("/resume")
          }}>Resume</button>
          
        </HOME>
    )
}

const HOME = styled.div`
    position: relative;
    display: flex;
    align-items: c;
    justify-content: space-between;
    margin-top: 40px;
    z-index: 1;
    margin-left:10% ;
    margin-right:10% ;

    .content {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        color: var(--color-text);
        z-index: 1;
    }
    .title {
        font-size:72px ;
        font-weight: 900;
        margin-bottom: 33px;
        font-family: var(--primary-font);
        background: linear-gradient(
            900deg,
            rgba(255,255,255,1) 70%,
             rgba(255,255,255,0) 120%
        );
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
    }
    .description {
        font-size: 30px;
        font-family: var(--primary-font);
        margin-bottom: 52px;
    }
    .contact-btn {
  text-decoration: none;
  background-color: var(--color-primary);
  color: var(--color-text);
  border-radius: 100px;
  font-size: 30px;
  font-weight: 600;
  padding: 17px 26px;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.25);
}
.image {
  width: 500px;
  height: 600px;
  border-radius: 50%;
  background-image: url("https://firebasestorage.googleapis.com/v0/b/portfolio-67d8f.appspot.com/o/photo%20(2).jpeg?alt=media&token=2a8665c4-b5f0-487e-b10f-efb6e0f30709");
  background-position: center;
  background-size:cover;
  animation-name: floating;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
}

@keyframes floating {
  0% {
    transform: translate(0, 0px);
  }
  50% {
    transform: translate(0, 10px);
  }
  100% {
    transform: translate(0, -0px);
  }
}

.topBlur {
  position: absolute;
  width: 50vw;
  height: 50vw;
  min-width: 350px;
  min-width: 350px;
  top: -128px;
  left: -10vw;
  border-radius: 764px;
  background: rgba(25, 55, 109, 0.7);
  filter: blur(100px);
  z-index: 0;
}

.bottomBlur {
  position: absolute;
  width: 70vw;
  height: 50vw;
  min-width: 350px;
  min-width: 250px;
  top: 246px;
  right: -25vw;
  border-radius: 764px;
  background: rgba(25, 55, 109, 0.7);
  filter: blur(100px);
  z-index: 0;
}

@media screen and (max-width: 830px) {
  
    flex-direction: column-reverse;
  

  .content {
    align-items: center;
  }
}
`