'use client';
import { createContext } from 'react'
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
createContext('defaultValue');

const rows: GridRowsProp = [
  { id: 1, edit: 'EDITAR', period: '23/05/2022 - 29/05/2022', sku: 'World', total_plan: "5000", total_prod: 0 , status: 'PLANEJAMENTO'},
  { id: 2, edit: 'EDITAR', period: '23/05/2022 - 29/05/2022', sku: 'is Awesome', total_plan: "5000", total_prod: 2600 , status: 'EM ANDAMENTO'},
  { id: 3, edit: 'EDITAR', period: '23/05/2022 - 29/05/2022', sku: 'is Amazing', total_plan: "5000", total_prod: 5000 , status: 'CONCLUÍDO'},
];

const columns: GridColDef[] = [
  { field: 'edit', headerName: 'Column 1', width: 150, headerAlign: 'center', align: 'center', editable: true },
  { field: 'period', headerName: 'PERÍODO', width: 150, headerAlign: 'center', align: 'center', editable: true },
  { field: 'sku', headerName: 'SKUs', width: 150, headerAlign: 'center', align: 'center', editable: true },
  { field: 'total_plan', headerName: 'TOTAL PLAN (TONS)', width: 200, headerAlign: 'center', align: 'center', editable: true },
  { field: 'total_prod', headerName: 'TOTAL PROOD. (TONS)', width: 200, headerAlign: 'center', align: 'center', editable: true },
  { field: 'status', headerName: 'STATUS', width: 200, headerAlign: 'center', align: 'center', editable: true },
];
export default function Home() {
  return (
    <div className="container">
      <h1><b>DEMANDAS DE PRODUÇÃO DE LATINHAS</b></h1>
      <button className="btn-add hover:bg-add-hover text-white font-bold py-2 px-4 rounded">
        + Adicionar
      </button>
      <div className="mt-10">
        <DataGrid rows={rows} columns={columns} initialState={{
          pagination: { paginationModel: { pageSize: 2 } },
        }}
          pageSizeOptions={[2, 4, 6]}
        />
        <button className="btn-cancel float-right mt-10 bg-green-600  hover:bg-green-500 ml-2 text-white font-bold py-2 px-4 rounded">Salvar</button>
        <button className="btn-save float-right mt-10 bg-red-600 hover:bg-red-500 text-white font-bold py-2 px-4 rounded">Cancelar</button>
      </div>
    </div>
  );
}