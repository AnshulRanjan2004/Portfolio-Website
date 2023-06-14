import Link from 'next/link';
import Illustration from '../components/Illustration';
import Image from "next/image";
import styles from '../styles/HomePage.module.css';

export default function HomePage() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.background}>
          <h1>Tech</h1>
          <h1>Coding</h1>
        </div>
        <div className={styles.foreground}>
          <div className={styles.content}>
            <h1 className={styles.name}>Anshul Ranjan</h1>
            <h6 className={styles.bio}>Computer Science Enthusiast</h6>
            <div className={styles.cardContainer}>
              <div className={styles.card}>
                <div className={styles.content}>
                  <h4>Skill Set</h4>
                  <div className={styles.tags}>
                    <span key='Research' className='Research'>
                      Python
                    </span>
                    <span key='PyTorch' className='PyTorch'>
                      PyTorch
                    </span>
                    <span key='Tensorflow' className='Tensorflow'>
                      Web-Development
                    </span>
                    <span key='Apache-Spark' className='Apache-Spark'>
                      Arduino
                    </span>
                    <span key='SQL' className='SQL'>
                      Kubernetes
                    </span>
                    <span key='Computer-Vision' className='Computer-Vision'>
                      NLP
                    </span>
                    <span key='Data-Pipelines' className='Data-Pipelines'>
                     Cloud-Computing
                    </span>
                    <span key='MLOps' className='MLOps'>
                      ML-Ops
                    </span>
                    <span key='Software-Design' className='Software-Design'>
                      Flask
                    </span>
                    <span key='Bots' className='Bots'>
                      MongoDB
                    </span>
                    <span key='APIs' className='APIs'>
                      APIs
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <Link href="/about">
              <button className={styles.button}>About Me</button>
            </Link>
            <Link href="/projects">
              <button className={styles.button}>View Projects</button>
            </Link>
            <Link href="/contact">
              <button className={styles.outlined}>Contact</button>
            </Link>
          </div>
          {/* <Illustration className={styles.illustration} /> */}
          <div className={styles.right}>
            <div className={styles.picture_boader}>
              <Image
                className={styles.picture}
                src="/me.jpg"
                width={300}
                height={290}
                alt="Anshul' Picture"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: { title: 'Home' },
  };
}
