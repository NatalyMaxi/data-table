import { useSelector } from 'react-redux';
import Paginator from '../Paginator/Paginator';
import Table from '../Table/Table';
import Search from '../UI/Search/Search';
import styles from './HomePage.module.css';

function HomePage() {
  const { posts, postsPerPage, currentPage} = useSelector((state) => state.posts);

  const indexOfLastPage = currentPage * postsPerPage;
  const indexofFirstPage = indexOfLastPage - postsPerPage;

  const visiblePosts = posts.slice(indexofFirstPage, indexOfLastPage);

  return (
    <div className={styles.content}>
      <Search />
      <Table visiblePosts={visiblePosts} />
      <Paginator
      />
    </div>
  );
}

export default HomePage;
