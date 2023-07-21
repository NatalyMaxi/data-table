import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styles from './FlippingLink.module.css';

function FlippingLink({ onClick, textLink }) {
  return (
    <NavLink
      className={styles.link}
      onClick={onClick}
    >
      {textLink}
    </NavLink>
  );
}

FlippingLink.propTypes = {
  onClick: PropTypes.func,
  textLink: PropTypes.string,
};

export default FlippingLink;
