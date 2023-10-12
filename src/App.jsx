import { Fragment } from 'react'; 


import Navigation  from './components/Navigation/Navigation.component';
import Header from './components/Header/Header.component';
import Sidebar from './components/Sidebar/Sidebar';


import './App.scss'

function App() {
 


  return (
    <Fragment id='outer-container'>
      <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'}  />
      <div id='page-wrap'>
        <Navigation />
        <Header />  
        
      </div>

    </Fragment>
  )
}

export default App
