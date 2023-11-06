import React, { Component } from 'react';
import PropTypes from "prop-types";
import { getLatestNotification } from '../utils/utils';
import NotificationItemShape from './NotificationItemShape';
import './Notifications.css';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import { StyleSheet, css } from "aphrodite";


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
        <div id='menuItem' className={css(styles.menuItem)}>
          <p>Your Notifications</p>
        </div>
        {displayDrawer && (
          <div id='Notifications' className={css(styles.notifications)}>
            <button
              style={{
                background: "transparent",
                border: 'none',
                position: 'absolute',
                right: 20,
              }}
              aria-label='close'
            >
              <img src={closeIcon} alt='close-icon'
                className={css(styles.notificationsButtonImage)}
              />
            </button>
            <p className={css(styles.notificationsP)}>
              Here is the list of notifications
            </p>
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

const cssVars = {
  mainColor: "#e01d3f",
};

const styles = StyleSheet.create({
  menuItem: {
    textAlign: "right",
  },

  notifications: {
    float: "right",
    border: `3px dashed ${cssVars.mainColor}`,
    padding: "10px",
    marginBottom: "20px",
  },

  notificationsButtonImage: {
    width: "10px",
  },

  notificationsP: {
    margin: 0,
    marginTop: "15px",
  },
});

export default Notifications;
