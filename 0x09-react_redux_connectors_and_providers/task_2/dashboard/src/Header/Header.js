import React, { Component } from "react";
import logo from '../assets/holberton-logo.jpg';
import AppContext from "../App/AppContext";
import { StyleSheet, css } from "aphrodite";

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { user, logOut } = this.context;

    return (
      <div className={css(styles.header)}>
        <img src={logo} alt="logo" className={css(styles.headerImg)} />
        <h1>School dashboard</h1>

        {user.isLoggedIn && (
          <p id="logoutSection" className={css(styles.logoutSection)}>
            Welcome <b>{`${user.email} `}</b>
            <span onClick={logOut} className={css(styles.logoutSectionSpan)}>
              (logout)
            </span>
          </p>
        )}
      </div>
    );
  }
}

const cssVars = {
  mainColor: "#e01d3f",
};

const styles = StyleSheet.create({
  header: {
    display: "flex",
    alignItems: "center",
    color: cssVars.mainColor,
    fontSize: "20px",
  },

  headerImg: {
    width: "200px",
  },

  logoutSection: {
    color: "black",
    position: "absolute",
    right: 0,
    paddingRight: "20px",
    alignSelf: "flex-end",
  },

  logoutSectionSpan: {
    fontStyle: "italic",
    cursor: "pointer",
  },
});

Header.contextType = AppContext;

export default Header;
