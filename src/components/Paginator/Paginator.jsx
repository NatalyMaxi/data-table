import styles from './Paginator.module.css';
import FlippingLink from '../UI/FlippingLink/FlippingLink';
import PageLink from '../UI/PageLink/PageLink';

function Paginator() {
  return (
    <div className={styles.paginator}>
      <FlippingLink textLink='Назад' />
      <div className={styles.pageContainer}>
        <PageLink number={1} />
        <PageLink number={2} />
        <PageLink number={3} />
        <PageLink number={4} />
        <PageLink number={5} />
      </div>
      <FlippingLink textLink='Далее' />
    </div>
  );
}

export default Paginator;
