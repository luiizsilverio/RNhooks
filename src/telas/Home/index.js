import React from 'react';
import Header from '../../componentes/Header';
import Produtores from '../../componentes/Produtores';

export default function Home() {
    return (
      <>
        <Produtores topo={Header} />
      </>
    )
}
