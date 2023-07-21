import { useState } from 'react';
import { useSelector } from 'react-redux';
import Paginator from '../Paginator/Paginator';
import Table from '../Table/Table';
import Search from '../UI/Search/Search';
import styles from './HomePage.module.css';
import { usePosts } from '../../hooks/usePosts';

function HomePage() {
  const [filter, setFilter] = useState({ sort: '', query: '' })
  const { posts, postsPerPage, currentPage} = useSelector((state) => state.posts);
  const indexOfLastPage = currentPage * postsPerPage;
  const indexofFirstPage = indexOfLastPage - postsPerPage;

  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

  const visiblePosts = sortedAndSearchedPosts.slice(indexofFirstPage, indexOfLastPage);
  const onChange = (evt) => {
    setFilter({ ...filter, query: evt.target.value })
  }
  return (
    <div className={styles.content}>
      <Search
        onChange={onChange}
        value={filter.query}
      />
      <Table
        setFilter={setFilter}
        visiblePosts={visiblePosts}
        filter={filter}
      />
      <Paginator
      />
    </div>
  );
}

export default HomePage;
