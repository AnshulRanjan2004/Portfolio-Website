import { pdfjs, Document, Page, PDFDownloadLink } from 'react-pdf'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`
const myResume = './Resume.pdf';
import AboutLanguages from '../components/AboutLanguages';
import AboutFrameworks from '../components/AboutFrameworks';
import styles from '../styles/AboutPage.module.css';
import { getAbout } from './api/about';
import { normalize } from '../utils/common.ts';

const AboutPage = ({ data }) => {
  return (
    <>
      <h3>A Little Bit About Me</h3><br/>
      <ul>
        <li><span role="img" aria-label="book">📖</span> Pursuing Bachelor of Technology Computer Science Engineering @ <a href='https://cs.pes.edu/'>PES University </a>.</li>
        <li><span role="img" aria-label="graduate-hat">🎓</span> Conducting research on <b>AI</b> and <b>Natural Language Processing</b> @ <a href='https://research.pes.edu/cloud-computing-big-data/'>CCBD PESU</a>.</li>
        <li><span role="img" aria-label="light-bulb">💡</span> Open to collaborating on projects and innovative ideas. </li>
        <li><span role="img" aria-label="laptop">💻</span> Currently working on Neural Networks, Augmented Reality, and Reinforcement Learning. </li>
      </ul>
      <br/>
      <div className={styles.container}>
        <AboutLanguages data={data.Languages} />
        <AboutFrameworks data={data.Softwares} />
      </div>
      <center>
        <h3>Resume (<a href={myResume} download="Resume-AnshulRanjan.pdf">Download</a>)</h3>
        <br />
        <Document file={myResume}>
          <Page pageIndex={0} />
          <Page pageIndex={1} />
          <Page pageIndex={2} />
        </Document>
      </center>
    </>
  );
};

export async function getStaticProps() {

  const data = getAbout();
  return {
    props: { title: 'About', data: normalize(data, 'title') },
  };
}

export default AboutPage;
