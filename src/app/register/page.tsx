'use client';
import Link from 'next/link';
import api from '../services/api';
import { useState } from 'react';
import Swal from 'sweetalert2'
import moment from 'moment'
import 'moment/locale/pt';
moment.locale('pt-br');

export default function Dashboard() {
  const [data, setData] = useState({});
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [event.target.name]: event.target.value })
  }

  function submit(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
    api.post('latinhas', data)
      .then(res => {
        Swal.fire({
          title: res.data.title,
          text: res.data.message,
          icon: res.data.title,
          confirmButtonText: 'Ok',
        })
      })
      .catch(error => {
        Swal.fire({
          title: 'Erro!',
          text: error,
          icon: 'error',
          confirmButtonText: 'Ok'
        })
      })

  }
  return (
    <div className="container">
      <h1 className='mb-10'><b>CADASTRO DE DEMANDAS</b></h1>
      <form onSubmit={submit}>
        <div className="relative z-0 w-full mb-6 group">
          <input onChange={handleChange} type="sku" name="sku" id="sku" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="" required />
          <label htmlFor="sku" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Sku</label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input onChange={handleChange} type="number" name="total_plan" id="total_plan" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="" required />
          <label htmlFor="total_plan" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Total Plan (Tons)</label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input onChange={handleChange} type="number" name="total_prod" id="total_prod" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
          <label htmlFor="total_prod" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Total Prod (Tons)</label>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-6 group">
            <input onChange={handleChange} type="date" name="period_of" id="period_of" min={moment(new Date()).locale('pt').format('YYYY-MM-DD')} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
            <label htmlFor="period_of" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Período de</label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input onChange={handleChange} type="date" name="period_until" min={moment(new Date()).locale('pt').format('YYYY-MM-DD')} id="period_until" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
            <label htmlFor="period_until" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Período até</label>
          </div>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-6 group">
            <select name="status" id="status" onChange={handleChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required>

              <option value="" defaultValue="1">Selecione o status</option>
              <option value="PLANEJAMENTO">Planejamento</option>
              <option value="EM ANDAMENTO">Em Andamento</option>
              <option value="CONCLUÍDO">Concluído</option>
            </select>
            <label htmlFor="status" className="peer-focus:sfont-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Status</label>
          </div>
        </div>
        <button className="btn-cancel float-right mt-10 bg-green-600  hover:bg-green-500 ml-2 text-white font-bold py-2 px-4 rounded">Salvar</button>
        <Link href="/" className="btn-save float-right mt-10 bg-red-600 hover:bg-red-500 text-white font-bold py-2 px-4 rounded">Cancelar</Link>
      </form>
    </div>
  );
}