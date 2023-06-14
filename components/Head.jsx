import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Anshul Ranjan's Profolio."
      />
      <meta
        name="keywords"
        content="Anshul Ranjan, Anshul, Ranjan, machine learning engineer, anshul ranjan portfolio, vscode-portfolio"
      />
      <meta property="og:title" content="Anshul Ranjan's Portfolio" />
      <meta
        property="og:description"
        content="Anshul Ranjan's Profolio."
      />
      <meta property="og:image" content="" />
      <meta property="og:url" content="" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Anshul Ranjan',
};
