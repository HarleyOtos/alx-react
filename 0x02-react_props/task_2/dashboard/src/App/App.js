import React from 'react';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import "./App.css";

function App() {
  return (
    <>
      <Notifications />
      <div className='App'>
        <Header />
      </div>
      <div className='App-body'>
        <Login />
      </div>
      <div className='App-footer'>
        <Footer />
      </div>
    </>
  );
}

export default App;
