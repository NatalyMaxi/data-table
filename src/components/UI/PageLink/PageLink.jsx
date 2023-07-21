import { NavLink } from 'react-router-dom';
import styles from './PageLink.module.css';

function PageLink({ number }) {
  return (
    <NavLink className={`${styles.link} ${styles.linkActive}`}>
      {number}
    </NavLink>
  );
}

export default PageLink;
