import Arrow from '../UI/Arrow/Arrow';
import styles from './TableHeader.module.css';

function TableHeader() {
  return (
    <div className={styles.tableHeader}>
      <div className={styles.item}>
        <span className={styles.title}>ID</span>
        <Arrow />
      </div>
      <div className={styles.item}>
        <span className={styles.title}>Заголовок</span>
        <Arrow />
      </div>
      <div className={styles.item}>
        <span className={styles.title}>Описание</span>
        <Arrow />
      </div>
    </div>
  );
}

export default TableHeader;
