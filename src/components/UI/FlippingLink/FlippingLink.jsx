import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styles from './FlippingLink.module.css';

function FlippingLink({ onClick, textLink, path, disabled }) {
  return (
    <NavLink to={disabled ? null : `/${path}`}
      className={disabled ? `${styles.link} ${styles.linkDisabled}` : styles.link}
      onClick={onClick}
    >
      {textLink}
    </NavLink>
  );
}

FlippingLink.propTypes = {
  onClick: PropTypes.func,
  textLink: PropTypes.string,
  path: PropTypes.number,
  disabled: PropTypes.bool,
};

export default FlippingLink;
