import { Link } from 'react-router-dom';
import styles from './PageNotFound.module.css';

function PageNotFound() {
  return (
    <div className={styles.pageNotFound}>
      <div className={styles.pageNotFoundContainer}>
        <h2 className={styles.pageNotFoundTitle}>404</h2>
        <p className={styles.pageNotFoundText}>Страница не найдена</p>
        <Link className={styles.pageNotFoundLink} to={-1}>
          Назад
        </Link>
      </div>
    </div>
  );
}

export default PageNotFound;
