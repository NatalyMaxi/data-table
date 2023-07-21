import PropTypes from 'prop-types';
import styles from './FlippingLink.module.css';

function FlippingLink({ onClick, textLink }) {
  return (
    <div
      className={styles.link}
      onClick={onClick}
    >
      {textLink}
    </div>
  );
}

FlippingLink.propTypes = {
  onClick: PropTypes.func,
  textLink: PropTypes.string,
};

export default FlippingLink;
