import styles from './Post.module.css';

function Post({ title, id, body }) {
  return (
    <>
      <div className={`${styles.cell} ${styles.cellFirstColumn}`}>{id}</div>
      <div className={styles.cell}>{title}</div>
      <div className={styles.cell}>{body}</div>
    </>
  );
}

export default Post;
