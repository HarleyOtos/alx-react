import React from 'react';
import PropTypes from "prop-types";
import './Notifications.css';
import closeIcon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';

const Notifications = ({ displayDrawer }) => {
  
  Notifications.defaultProps = {
    displayDrawer: false,
  };

  Notifications.propTypes = {
    displayDrawer: PropTypes.bool,
  };

  return (
    <>
      <div className='menuItem'>
        <p>Your Notifications</p>
      </div>
      {displayDrawer && (
      <div className='Notifications'>
        <button
          style={{
            background: "transparent",
            border: 'none',
            position: 'absolute',
            right: 20,
          }}
          aria-label='close'
        >
          <img src={closeIcon} alt='close-icon' />
        </button>
        <p>Here is the list of notifications</p>
        <ul>
          <NotificationItem type="default" value="New course available" />
          <NotificationItem type="urgent" value="New resume available" />
          <NotificationItem
            type="urgent"
            html={{ __html: getLatestNotification() }}
          />
        </ul>
      </div>
      )}
    </>
  );
};

export default Notifications;
