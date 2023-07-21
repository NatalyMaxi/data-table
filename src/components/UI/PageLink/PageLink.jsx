import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styles from './PageLink.module.css';

function PageLink({ number, onClick }) {
  return (
    <NavLink
      to={`/${number}`}
      className={navData => navData.isActive ? `${styles.link} ${styles.linkActive}` : styles.link}
      onClick={onClick}
    >
      {number}
    </NavLink>
  );
}

PageLink.propTypes = {
  number: PropTypes.number,
  onClick: PropTypes.func,
};

export default PageLink;
