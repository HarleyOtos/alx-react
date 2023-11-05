import React, { Component } from 'react';
import PropTypes from "prop-types";
import { getLatestNotification } from '../utils/utils';
import NotificationItemShape from './NotificationItemShape';
import './Notifications.css';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';


class Notifications extends Component {
  constructor(props) {
    super(props)
    this.markAsRead = this.markAsRead.bind(this);
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  shouldComponentUpdate(nextProps) {
    return (
      nextProps.listNotifications.length > this.props.listNotifications.length
    );
  }

  render() {
    const { displayDrawer, listNotifications } = this.props;

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
                  id={notification.id}
                  type={notification.type}
                  value={notification.value}
                  html={notification.html}
                  markAsRead={this.markAsRead}
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
}

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

export default Notifications;
