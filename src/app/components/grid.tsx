import {
  DataGrid,
  GridActionsCellItem,
  GridColDef,
} from '@mui/x-data-grid';
import axios from 'axios';
import { FaEdit } from 'react-icons/fa';

const columns: GridColDef[] = [
  {
    field: 'edit', headerName: 'EDITAR', width: 170, headerAlign: 'center', align: 'center', editable: true, type: 'actions',
    getActions: (params) => [<GridActionsCellItem icon={<FaEdit />} label="Delete" onClick={() => editData(params.id)} />]

  },
  { field: 'period_of', headerName: 'PERÍODO DE', width: 170, headerAlign: 'center', align: 'center', editable: true },
  { field: 'period_until', headerName: 'PERÍODO ATÉ', width: 170, headerAlign: 'center', align: 'center', editable: true },
  { field: 'sku', headerName: 'SKUs', width: 170, headerAlign: 'center', align: 'center', editable: true },
  { field: 'total_plan', headerName: 'TOTAL PLAN (TONS)', width: 205, headerAlign: 'center', align: 'center', editable: true },
  { field: 'total_prod', headerName: 'TOTAL PROOD. (TONS)', width: 205, headerAlign: 'center', align: 'center', editable: true },
  { field: 'status', headerName: 'STATUS', width: 205, headerAlign: 'center', align: 'center', editable: true },
];

function editData(id) {
  console.log(id)
}
export default async function Grid() {
  const response = await getData();
  return (
    <DataGrid rows={response} columns={columns} initialState={{
      pagination: { paginationModel: { pageSize: 1 } },
    }}
      pageSizeOptions={[2, 3, 4]} />
  );
}

const getData = async () => {
  const response = await axios.get("http://localhost:3001/latinhas");
  return response.data;
}