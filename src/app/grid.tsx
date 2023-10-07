import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';

const rows: GridRowsProp = [
  { id: 1, col1: 'Hello', col2: 'World' },
  { id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
  { id: 3, col1: 'MUI', col2: 'is Amazing' },
];

const columns: GridColDef[] = [
  { field: 'col1', headerName: 'Column 1', width: 150 },
  { field: 'col2', headerName: 'Column 2', width: 150 },
];
export default function Grid() {
  return (
    <div className="container w-auto">
      <h1><b>DEMANDAS DE PRODUÇÃO DE LATINHAS</b></h1>
      <button className="btn-add hover:bg-add-hover text-white font-bold py-2 px-4 rounded">
        + Adicionar
      </button>
      <div style={{ height: 300, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} />
    </div>
    </div>
  );
}