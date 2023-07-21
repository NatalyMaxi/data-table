import PropTypes from 'prop-types';
import Arrow from '../UI/Arrow/Arrow';
import styles from './TableHeader.module.css';

function TableHeader({ setFilter, filter }) {

  const handleClick = (e) => {
    if (e.target.textContent === 'ID') {
      setFilter({ ...filter, sort: 'id' });
    }
    if (e.target.textContent === 'Заголовок') {
      setFilter({ ...filter, sort: 'title' });
    }
    if (e.target.textContent === 'Описание') {
      setFilter({ ...filter, sort: 'body' });
    }
  };

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

TableHeader.propTypes = {
  setFilter: PropTypes.func,
  filter: PropTypes.object,
};

export default TableHeader;
