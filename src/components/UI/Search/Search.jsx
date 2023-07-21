import styles from './Search.module.css';
import magnifier from '../../../images/magnifier.png';

function Search({ value, onChange }) {
  return (
    <div className={styles.search}>
      <input
        type='text'
        className={styles.input}
        value={value}
        onChange={onChange}
        placeholder='Поиск'
      />
      <img className={styles.img} src={magnifier} alt='Лупа' />
    </div>
  );
}

export default Search;
