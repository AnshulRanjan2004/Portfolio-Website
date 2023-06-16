import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="google-site-verification" content="pTJsl0MDIMCt88iuhlc7xVgD_UwZwUho4jbVN5O2bkI" />
      <meta
        name="description"
        content="Anshul Ranjan's Portfolio."
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
      <meta property="og:image" content="https://i.imgur.com/FgYju8s.png" />
      <meta property="og:url" content="https://anshulranjan.vercel.app/" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Anshul Ranjan',
};
