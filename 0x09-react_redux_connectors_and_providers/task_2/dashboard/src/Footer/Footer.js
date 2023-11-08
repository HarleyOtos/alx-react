import React from 'react'
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getFullYear, getFooterCopy } from '../utils/utils';

export function Footer({ user }) {
  return (
    <div className="footer">
      <p>
        Copyright {getFullYear()} - {getFooterCopy(true)}
      </p>
      {user && <a href="#">Contact us</a>}
    </div>
  );
}

Footer.defaultProps = {
  user: null,
};

Footer.propTypes = {
  user: PropTypes.object,
};

const mapStateToProps = (state) => {
  return {
    user: state.get("user"),
  };
};

export default connect(mapStateToProps, null)(Footer);
