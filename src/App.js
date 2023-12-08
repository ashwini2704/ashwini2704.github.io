import styled from "styled-components";
import { Navbar } from "./Component/Navbar";
import { About } from "./Component/About";
import { Skills } from "./Component/Skills";
import { Project } from "./Component/Projects";
import { Contact } from "./Component/Contact";
import { Home } from "./Component/Home";

function App() {
  return (
    <DIV className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Skills />
      <Project />
      <Contact/>
    </DIV>
  );
}

export default App;

const DIV = styled.div`
   background-color: var(--color-bg);
   width: 100%;
   height: 100%;
`

