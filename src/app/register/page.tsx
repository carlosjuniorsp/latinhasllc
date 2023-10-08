'use client';
import Link from 'next/link';
import api from '../services/api';
import Swal from 'sweetalert2'
import moment from 'moment'
import { useForm } from "react-hook-form"
import 'moment/locale/pt';
moment.locale('pt-br');

export default function Dashboard() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    api.post('latinhas', data)
      .then(res => {
        Swal.fire({
          title: res.data.title,
          text: res.data.message,
          icon: res.data.success ? 'success' : 'error',
          confirmButtonText: 'Ok',
        }).then((response) => {
          if (response.isConfirmed) {
            location.href = "/"
          }
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
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="relative z-0 w-full mb-6 group">
          <input type="number" {...register("sku", { required: true })} id="sku" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="" />
          <label htmlFor="sku" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Sku</label>
          {errors.sku && <i className="error_input text-red-600 ">Este campo é obrigatório</i>}
        </div>

        <div className="relative z-0 w-full mb-6 group">
          <input type="number" {...register("total_plan", { required: true })} id="total_plan" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="" />
          <label htmlFor="total_plan" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Total Plan (Tons)</label>
          {errors.total_plan && <i className="error_input text-red-600 ">Este campo é obrigatório</i>}
        </div>

        <div className="relative z-0 w-full mb-6 group">
          <input type="number" {...register("total_prod", { required: true })} id="total_prod" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
          <label htmlFor="total_prod" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Total Prod (Tons)</label>
          {errors.total_prod && <i className="error_input text-red-600 ">Este campo é obrigatório</i>}
        </div>

        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-6 group">
            <input type="date" {...register("period_of", { required: true })} id="period_of" min={moment(new Date()).locale('pt').format('YYYY-MM-DD')} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
            <label htmlFor="period_of" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Período de</label>
            {errors.period_of && <i className="error_input text-red-600 ">Este campo é obrigatório</i>}
          </div>

          <div className="relative z-0 w-full mb-6 group">
            <input type="date" {...register("period_until", { required: true })} min={moment(new Date()).locale('pt').format('YYYY-MM-DD')} id="period_until" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
            <label htmlFor="period_until" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Período até</label>
            {errors.sku && <i className="period_until text-red-600 ">Este campo é obrigatório</i>}
          </div>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-6 group">
            <select {...register("status", { required: true })} id="status" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " >
              <option value="" defaultValue="1">Selecione o status</option>
              <option value="PLANEJAMENTO">Planejamento</option>
              <option value="EM ANDAMENTO">Em Andamento</option>
              <option value="CONCLUÍDO">Concluído</option>
            </select>
            <label htmlFor="status" className="peer-focus:sfont-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Status</label>
            {errors.status && <i className="error_input text-red-600 ">Este campo é obrigatório</i>}
          </div>
        </div>
        <button className="btn-cancel float-right mt-10 bg-green-600  hover:bg-green-500 ml-2 text-white font-bold py-2 px-4 rounded">Salvar</button>
        <Link href="/" className="btn-save float-right mt-10 bg-red-600 hover:bg-red-500 text-white font-bold py-2 px-4 rounded">Cancelar</Link>
      </form>
    </div>
  );
}