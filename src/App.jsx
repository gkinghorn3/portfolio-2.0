import Navigation from "./components/Navigation/Navigation.component";
import Header from "./components/Header/HeaderComponent";
import Burger from "./components/Burger/Burger.Component";
import BurgerMenu from "./components/Burger/BurgerMenu.component";
import ProjectList from "./components/ProjectList/ProjectList.component";
import ContactForm from "./components/ContactForm/ContactForm.component";

import "./App.scss";

function App() {
  return (
    <div id="page-wrap">
       
        <Navigation />
        
        <BurgerMenu />
        <Burger />
        

        <Header />
        <ProjectList />
        <ContactForm />
    </div>
  );
}

export default App;
