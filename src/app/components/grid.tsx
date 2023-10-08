import {
  DataGrid,
  GridActionsCellItem,
  GridColDef,
  GridCellParams
} from '@mui/x-data-grid';
import { FaEdit, FaTrash } from 'react-icons/fa';
import api from '../services/api'
import Box from '@mui/material/Box';
import clsx from 'clsx';
import Swal from 'sweetalert2'

const columns: GridColDef[] = [
  {
    field: 'edit', headerName: 'EDITAR', width: 170, headerAlign: 'center', align: 'center', editable: false, type: 'actions',
    getActions: (params) => [<GridActionsCellItem icon={<FaEdit />} label="Edit" onClick={() => editData(params.id)} />]

  },
  { field: 'period_of', headerName: 'PERÍODO DE', width: 170, headerAlign: 'center', align: 'center', editable: true },
  { field: 'period_until', headerName: 'PERÍODO ATÉ', width: 170, headerAlign: 'center', align: 'center', editable: true },
  { field: 'sku', headerName: 'SKUs', width: 100, headerAlign: 'center', align: 'center', editable: true },
  { field: 'total_plan', headerName: 'TOTAL PLAN (TONS)', width: 205, headerAlign: 'center', align: 'center', editable: true },
  { field: 'total_prod', headerName: 'TOTAL PROOD. (TONS)', width: 205, headerAlign: 'center', align: 'center', editable: true },
  {
    field: 'status', headerName: 'STATUS', width: 205, headerAlign: 'center', align: 'center', editable: true, type: 'string', cellClassName: (params: GridCellParams<any, string>) => {
      if (params.value == null) {
        return '';
      }

      return clsx('super-app', {
        andamento: params.value == 'EM ANDAMENTO',
        concluido: params.value == 'CONCLUÍDO',
        planejamento: params.value == 'PLANEJAMENTO',
      });
    }
  },
  {
    field: 'remove', headerName: 'REMOVER', width: 170, headerAlign: 'center', align: 'center', editable: false, type: 'actions',
    getActions: (params) => [<GridActionsCellItem icon={<FaTrash />} label="Delete" onClick={() => removeData(params.id)} />]

  },
];

export default async function Grid() {
  const response = await getData();
  return (
    <Box
      sx={{
        width: '100%',
        '& .super-app-theme--cell': {
          backgroundColor: 'rgba(224, 183, 60, 0.55)',
          color: '#1a3e72',
          fontWeight: '300',
        },
        '& .super-app.andamento': {
          backgroundColor: '#d2efff',
          color: '#1a3e72',
          fontWeight: '300',
        },
        '& .super-app.planejamento': {
          backgroundColor: '#ffcccc',
          color: '#000',
          fontWeight: '300',
        }
        ,
        '& .super-app.concluido': {
          backgroundColor: '#e3fede',
          color: '#1a3e72',
          fontWeight: '600',
        }

      }}
    >
      <DataGrid rows={response} columns={columns} initialState={{
        pagination: { paginationModel: { pageSize: 15 } },
      }}
        pageSizeOptions={[30, 60, 90]}
      />
    </Box>
  );
}

const getData = async () => {
  const response = await api.get("latinhas");
  return response.data;
}

function editData(id) {
  console.log(id)
}

const removeData = async (id) => {
  Swal.fire({
    title: 'Deseja mesmo deletar?',
    text: "Está ação não poderá ser desfeita",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Sim, deletar!'
  }).then((result) => {
    if (result.isConfirmed) {
      api.delete("latinhas/" + id)
        .then((res) => {
          Swal.fire({
            title: res.data.title,
            text: res.data.message,
            icon: res.data.title,
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
  })
}