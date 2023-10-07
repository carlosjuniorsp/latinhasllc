'use client';
import { createContext } from 'react';
import Link from 'next/link';
import Grid from './components/grid';

createContext('light')
export default async function Home() {

  return (
    <div className="container">
      <h1 className='mb-10'><b>DEMANDAS DE PRODUÇÃO DE LATINHAS</b></h1>

      <Link href="/register/" className="btn-add hover:bg-add-hover text-white font-bold py-2 px-4 rounded">
        + Adicionar
      </Link>

      <div className="mt-10">
        <Grid />
      </div>
    </div>
  );
}