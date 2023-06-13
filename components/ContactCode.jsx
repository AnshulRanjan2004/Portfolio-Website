import styles from '../styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'website',
    link: 'anshulranjan.tech',
    href: '',
  },
  {
    social: 'email',
    link: 'itsanshulranjan@gmail.com',
    href: 'mailto:itsanshulranjan@gmail.com',
  },
  {
    social: 'github',
    link: 'AnshulRanjan2004',
    href: 'https://github.com/AnshulRanjan2004',
  },
  {
    social: 'linkedin',
    link: 'anshul-ranjan',
    href: 'https://www.linkedin.com/in/anshul-ranjan/',
  },
  {
    social: 'twitter',
    link: 'ItsAnshulRanjan',
    href: 'https://twitter.com/ItsAnshulRanjan',
  },
  {
    social: 'instagram',
    link: 'anshul_ranjan_',
    href: 'https://www.instagram.com/anshul_ranjan_/',
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;