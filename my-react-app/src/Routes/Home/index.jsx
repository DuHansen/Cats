import React from 'react';
import Head from '../../Components/Head';
import Feed from '../Feed';
import './style.css';

function Home() {
  return (
    <section className="StyledHome container main-container">
      <Head title="Fotos" description="Home da rede social cats, com o feed de fotos." />
      <Feed />
    </section>
  );
}

export default Home;
