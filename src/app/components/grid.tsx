import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import axios from 'axios';


const columns: GridColDef[] = [
  { field: 'edit', headerName: 'Column 1', width: 150, headerAlign: 'center', align: 'center', editable: true },
  { field: 'period_of', headerName: 'PERÍODO DE', width: 150, headerAlign: 'center', align: 'center', editable: true },
  { field: 'period_until', headerName: 'PERÍODO ATÉ', width: 150, headerAlign: 'center', align: 'center', editable: true },
  { field: 'sku', headerName: 'SKUs', width: 150, headerAlign: 'center', align: 'center', editable: true },
  { field: 'total_plan', headerName: 'TOTAL PLAN (TONS)', width: 200, headerAlign: 'center', align: 'center', editable: true },
  { field: 'total_prod', headerName: 'TOTAL PROOD. (TONS)', width: 200, headerAlign: 'center', align: 'center', editable: true },
  { field: 'status', headerName: 'STATUS', width: 200, headerAlign: 'center', align: 'center', editable: true },
];

export default async function Grid() {
  const response = await getData();
  return (
    <DataGrid rows={response} columns={columns} />
  );
}

const getData = async () => {
  const response = await axios.get("http://localhost:3001/latinhas");
  return response.data;
}