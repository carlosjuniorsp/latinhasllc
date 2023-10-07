'use client';
import { createContext } from 'react'
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
createContext('defaultValue');

const rows: GridRowsProp = [
  { id: 1, col1: 'Hello', period: '23/05/2022 - 29/05/2022', sku: 'World', total_plan: "5000", total_prod: 0 },
  { id: 2, col1: 'DataGridPro', period: '23/05/2022 - 29/05/2022', sku: 'is Awesome', total_plan: "5000", total_prod: 2600 },
  { id: 3, col1: 'MUI', period: '23/05/2022 - 29/05/2022', sku: 'is Amazing', total_plan: "5000", total_prod: 5000 },
];

const columns: GridColDef[] = [
  { field: 'col1', headerName: 'Column 1', width: 150, headerAlign: 'center', align: 'center' },
  { field: 'period', headerName: 'PERÍODO', width: 150, headerAlign: 'center', align: 'center' },
  { field: 'sku', headerName: 'SKUs', width: 150, headerAlign: 'center', align: 'center' },
  { field: 'total_plan', headerName: 'TOTAL PLAN (TONS)', width: 200, headerAlign: 'center', align: 'center' },
  { field: 'total_prod', headerName: 'TOTAL PROOD. (TONS)', width: 200, headerAlign: 'center', align: 'center' },
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
      </div>
    </div>
  );
}