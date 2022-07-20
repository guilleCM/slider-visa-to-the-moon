import Head from 'next/head';
import dynamic from 'next/dynamic';
import { shape, string, arrayOf } from 'prop-types';

import { sliderApi } from '../utils/apiRoutes';

import styles from '../styles/Home.module.css';

const Slider = dynamic(
  () => import('../components/slider'),
  { ssr: false },
);

export default function Home({ data }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Visa to the moon</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Slider data={data} />
      </main>
    </div>

  );
}

Home.propTypes = {
  data: arrayOf(shape({
    bgImage: string,
    iconTrip: string,
    logo: string,
    imageRocket: string,
    title: string,
    subtitle: string,
    hash: string,
    linkprev: string,
    linknext: string,
    easeView: string,
  })),
};

Home.defaultProps = {
  data: [],
};

export async function getStaticProps() {
  const sliderRs = await fetch(sliderApi);
  const sliderData = await sliderRs.json();
  return {
    props: {
      data: sliderData.dataImages || [],
    },
  };
}
