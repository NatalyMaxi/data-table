import Paginator from '../Paginator/Paginator';
import Table from '../Table/Table';
import Search from '../UI/Search/Search';
import styles from './HomePage.module.css';

function HomePage() {
  return (
    <div className={styles.content}>
      <Search />
      <Table />
      <Paginator />
    </div>
  );
}

export default HomePage;
