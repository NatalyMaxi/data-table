import Arrow from '../UI/Arrow/Arrow';
import styles from './TableHeader.module.css';

function TableHeader({ setFilter }) {
  const handleClick = (e) => {
    if (e.target.textContent === 'ID') {
      setFilter('id')
    }
    if (e.target.textContent === 'Заголовок') {
      console.log(e.target.textContent)
      setFilter('title')
    }
    if (e.target.textContent === 'Описание') {
      console.log(e.target.textContent)
      setFilter('body')
    }
  }

  return (
    <div className={styles.tableHeader}>
      <div className={styles.item}>
        <span className={styles.title} onClick={handleClick}>ID</span>
        <Arrow />
      </div>
      <div className={styles.item}>
        <span className={styles.title} onClick={handleClick} value='title'>Заголовок</span>
        <Arrow />
      </div>
      <div className={styles.item}>
        <span className={styles.title} onClick={handleClick} value='body'>Описание</span>
        <Arrow />
      </div>
    </div>
  );
}

export default TableHeader;
