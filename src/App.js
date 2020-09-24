import React from 'react';
import './App.css'
import Profile from "./Components/Profile/Profile";
import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";

const App = (props) => {
  return (
      <BrowserRouter>
          <div className="app">
              <Header />
              <Navbar />
              <div className="app-wrapper-content">
                  <Route path='/profile'
                         render={ () => <Profile/> }
                  />
                  <Route exact path='/dialogs'
                         render={ () => <DialogsContainer/> }
                  />
                 {/* <Route path='/news' component={News} />
                  <Route path='/Music' component={Music} />
                  <Route path='/Settings' component={Settings} />*/}
              </div>
              <Footer />
          </div>
      </BrowserRouter>
  );
}

export default App;
