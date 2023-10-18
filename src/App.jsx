import { useState } from "react";

import Navigation from "./components/Navigation/Navigation.component";
import Header from "./components/Header/HeaderComponent";
import Burger from "./components/Burger/Burger.Component";
import BurgerMenu from "./components/Burger/BurgerMenu.component";
import ProjectList from "./components/ProjectList/ProjectList.component";
import ContactForm from "./components/ContactForm/ContactForm.component";

import Carousel from "./components/Carousel/Carousel.component";
import Card from "./components/Carousel/CarouselCard.component";

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
      
        <Carousel>
          <Card title="Card 1" content="This is card 1" />
          <Card title="Card 2" content="This is card 2" />
          <Card title="Card 3" content="This is card 3" />
          <Card title="Card 4" content="This is card 4" />
        </Carousel>
      

      <ProjectList />
      <ContactForm />
    </div>
  );
}

export default App;
