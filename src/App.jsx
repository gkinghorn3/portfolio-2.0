import { useState } from "react";

import Navigation from "./components/Navigation/Navigation.component";
import Header from "./components/Header/HeaderComponent";
import Burger from "./components/Burger/Burger.Component";
import BurgerMenu from "./components/Burger/BurgerMenu.component";
import ProjectList from "./components/ProjectList/ProjectList.component";
import ContactForm from "./components/ContactForm/ContactForm.component";

import "./App.scss";

const CARDS = 10;

function App() {
  const [open, setOpen] = useState(false);
  return (
    <div id="page-wrap">
      <Navigation />
      <div className="side-drawer">
        <BurgerMenu open={open} setOpen={setOpen} />
        <Burger open={open} setOpen={setOpen} />
      </div>

      <Header />
    
      

      <ProjectList />
      <ContactForm />
      <a href='https://github.com/gkinghorn3/portfolio-2.0' style={{ textDecoration: 'none'}} target="blank"> 
        <p style={{ color: "#03e9f4", opacity: "0.6"}}>See source code on Github</p>
      </a>
      
    </div>
  );
}

export default App;
