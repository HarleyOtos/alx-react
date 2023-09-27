import React from 'react';
import PropTypes from 'prop-types';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import "./App.css";

function App({ isLoggedIn }) {

  App.defaultProps = {
    isLoggedIn: false,
  };

  App.propTypes = {
    isLoggedIn: PropTypes.bool,
  };

  return (
    <>
      <Notifications />
      <div className='App'>
        <Header />
      </div>
      <div className='App-body'>
        {!isLoggedIn ?
          <Login /> : <CourseList />
        }
      </div>
      <div className='App-footer'>
        <Footer />
      </div>
    </>
  );
}

export default App;
