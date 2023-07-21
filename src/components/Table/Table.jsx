import { useSelector } from 'react-redux';
import styles from './Table.module.css';
import Post from '../Post/Post';
import TableHeader from '../TableHeader/TableHeader';
import Preloader from '../Preloader/Preloader';

function Table({ visiblePosts }) {
  const { loading } = useSelector((state) => state.posts);

  return (
    <section className={styles.content}>
      <TableHeader />
      {
        loading ? (<Preloader />) : (
          <div className={styles.grid}>
            {
              visiblePosts.map((post) => {
                return <Post
                  key={post.id}
                  id={post.id}
                  body={post.body}
                  title={post.title}
                />
              })
            }
          </div>
        )
      }
    </section>
  );
}

export default Table;
