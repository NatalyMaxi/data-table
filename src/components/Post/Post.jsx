import PropTypes from 'prop-types';
import styles from './Post.module.css';

function Post({ num, title, body }) {
  return (
    <>
      <div className={`${styles.cell} ${styles.cellFirstColumn}`}>{num}</div>
      <div className={styles.cell}>{title}</div>
      <div className={styles.cell}>{body}</div>
    </>
  );
}

Post.propTypes = {
  num: PropTypes.number,
  title: PropTypes.string,
  body: PropTypes.string,
};

export default Post;
