import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { PostsAction } from '../../store/post/posts-slice';
import Paginator from '../Paginator/Paginator';
import Table from '../Table/Table';
import Search from '../UI/Search/Search';
import styles from './HomePage.module.css';
import { usePosts } from '../../hooks/usePosts';

function HomePage() {
  const [filter, setFilter] = useState({ sort: '', query: '' });
  const dispatch = useDispatch();
  const { page } = useParams();
  const { posts, postsPerPage, currentPage } = useSelector((state) => state.posts);
  const indexOfLastPage = currentPage * postsPerPage;
  const indexofFirstPage = indexOfLastPage - postsPerPage;
  const sortedAndFilteredPosts = usePosts(posts, filter.sort, filter.query);
  const visiblePosts = sortedAndFilteredPosts.slice(indexofFirstPage, indexOfLastPage);

  const onChange = (evt) => {
    setFilter({ ...filter, query: evt.target.value });
  };

  useEffect(() => {
    dispatch(PostsAction.onClickCurrentPage(page));
  }, [page, dispatch])

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
        sortedAndFilteredPosts={sortedAndFilteredPosts}
      />
    </div>
  );
}

export default HomePage;
