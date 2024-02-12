import { GridColDef } from "@mui/x-data-grid";

export const personColumnListTable: GridColDef[] = [
  {
    field: 'id',
    headerName: 'Cód',
    align: "right",
    width: 20,
  },
  {
    field: 'name',
    headerName: 'Nome',
    width: 250    
  },
  {
    field: 'email',
    headerName: 'E-mail',
    width: 250    
  }
]