

import Navigation from "./components/Navigation/Navigation.component";
import Header from "./components/Header/HeaderComponent";
import Sidebar from "./components/Sidebar/Sidebar"
import ProjectList from "./components/ProjectList/ProjectList.component";
import ContactForm from "./components/ContactForm/ContactForm.component";

import "./App.scss";

function App() {
  return (
    <div id="outer-container">
      <Sidebar pageWrapId={"page-wrap"} outerContainerId={"outer-container"} />
      <div id="page-wrap">
        <Navigation />
        <Header />
        <ProjectList id="projects" />
        <ContactForm />
      </div>
    </div>
  );
}

export default App;
