import PropTypes from 'prop-types';
import styles from './Post.module.css';

function Post({ id, title, body }) {
  return (
    <>
      <div className={`${styles.cell} ${styles.cellFirstColumn}`}>{id}</div>
      <div className={styles.cell}>{title}</div>
      <div className={styles.cell}>{body}</div>
    </>
  );
}

Post.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  body: PropTypes.string,
};

export default Post;
