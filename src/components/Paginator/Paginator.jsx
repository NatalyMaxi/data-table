import { useDispatch, useSelector } from 'react-redux';
import { PostsAction } from '../../store/post/posts-slice';
import styles from './Paginator.module.css';
import FlippingLink from '../UI/FlippingLink/FlippingLink';
import PageLink from '../UI/PageLink/PageLink';

function Paginator() {
  const dispatch = useDispatch();
  const { posts, postsPerPage, currentPage } = useSelector((state) => state.posts);
  const totalPages = Math.ceil(posts.length / postsPerPage);
  const pages = [...Array(totalPages + 1).keys()].slice(1);
  const navigatePrev = () => {
    if (currentPage !== 1) {
      dispatch(PostsAction.onNavigatePrev());
    }
  };

  const navigateNext = () => {
    if (currentPage !== totalPages) {
      dispatch(PostsAction.onNavigateNext());
    }
  };

  const handleCurrentPage = (page) => {
    dispatch(PostsAction.onClickCurrentPage(page));
  };

  return (
    <div className={styles.paginator}>
      <FlippingLink textLink='Назад' onClick={navigatePrev} />
      <div className={styles.pageContainer}>
        {
          pages.map((page) => {
            return <PageLink
              key={page}
              onClick={() => handleCurrentPage.call(null, page)}
              number={page}
            />
          })
        }
      </div>
      <FlippingLink textLink='Далее' onClick={navigateNext} />
    </div>
  );
}

export default Paginator;
