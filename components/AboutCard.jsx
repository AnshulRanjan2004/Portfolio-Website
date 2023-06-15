import styles from '../styles/AboutCard.module.css';

const AboutCard = ({ title, children }) => {
  return (
    <div className={styles.card}>
      <div>
        <h3 className={styles.title}>{title}</h3>
        {children}
      </div>
    </div>
  );
};

export default AboutCard;