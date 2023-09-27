import React from 'react';
import PropTypes from "prop-types";
import { getLatestNotification } from '../utils/utils';
import NotificationItemShape from './NotificationItemShape';
import './Notifications.css';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';

const Notifications = ({ displayDrawer, listNotifications }) => {

  Notifications.defaultProps = {
    displayDrawer: false,
    listNotifications: [],
  };

  Notifications.propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.arrayOf(NotificationItemShape),
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
            {listNotifications.length === 0 && (
              <NotificationItem value="No new notification for now" />
            )}

            {listNotifications.map((notification) => (
              <NotificationItem
                key={notification.id}
                type={notification.type}
                value={notification.value}
                html={notification.html}
              />

            ))}
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
