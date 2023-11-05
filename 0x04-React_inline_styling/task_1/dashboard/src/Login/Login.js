import React from 'react'
import { StyleSheet, css } from "aphrodite";

function Login() {
  return (
    <>
      <div className={css(styles.login)}>
        <p>Login to access the full dashboard</p>
        <label>Email
          <input type="email" id='email' className={css(styles.loginInput)} />
        </label>
        <label >Password
          <input type="password" id='password' className={css(styles.loginInput)}/>
        </label>
        <button type="button">OK</button>
      </div>
    </>
  );
}

const styles = StyleSheet.create({
  login: {
    margin: "50px",
    flexGrow: 1,
  },

  loginInput: {
    marginLeft: "10px",
    marginRight: "20px",
  },
});

export default Login;