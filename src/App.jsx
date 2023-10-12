import { Fragment } from 'react'; 


import Navigation  from './components/Navigation/Navigation.component';
import Header from './components/Header/Header.component';
import Sidebar from './components/Sidebar/Sidebar';
import ProjectList from './components/ProjectList/ProjectList.component';


import './App.scss'



function App() {
 


  return (
    <Fragment id='outer-container'>
      <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'}  />
      <div id='page-wrap'>
        <Navigation />
        <Header />  
        <ProjectList />
      </div>

    </Fragment>
  )
}

export default App
