import { useEffect, useState } from 'react';

import { DataGrid, GridColDef, GridRowParams } from '@mui/x-data-grid';
import { getList, getUrlForTable } from '@/app/lib/utils';
import { Button } from '@mui/material';
import MyForm from './MyForm';

import CancelIcon from '@mui/icons-material/Cancel'
import AddIcon from '@mui/icons-material/Add'

interface MyDataTableProps {
  columns: GridColDef[],
  table: string
}

let idSelected: string | number = 0;

export default function MyDataTable(props: MyDataTableProps) {
  const [listRecords, setListRecords] = useState([]);
  const [open, setOpen] = useState(false);

  const handleInclude = () => {
    idSelected = 0;

    setOpen(true);
  };

  function handleCloseForm() {
    console.log("handle close");
    
    setOpen(false);    
  };
  
  //----------------------------------------------------
  async function getListPerson() {

    const rote = await getUrlForTable(props.table);
    let listRecords = [];

    if (rote !== '')
      listRecords = await getList( rote );
    
    if (!listRecords) {
      return
    }

    setListRecords(listRecords);
  }
  
  useEffect(() => {    
    getListPerson();    
  }, []);
  //----------------------------------------------------
  
  function onDlbClick(params: GridRowParams) {
    setOpen(true);

    idSelected = params.id;
  }
  
  return (
    <div>
      
      <MyForm 
        open={open}
        table={props.table}
        id={idSelected}
        title='Cadastro de pessoa'
        onHandleClose={handleCloseForm}
      />

      <div>
        <Button 
          variant="contained" 
          color='success' 
          startIcon={<AddIcon />}
          onClick={handleInclude}
        >
          Incluir
        </Button>
        
        <Button 
          variant="contained" 
          startIcon={<CancelIcon />}
          color='error'
        >
          Cancelar
        </Button> 
      </div>

      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={listRecords}
          columns={props.columns}
          disableColumnMenu
          onRowDoubleClick={onDlbClick}          
          
          /*initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}*/
          //pageSizeOptions={[5, 10]}        
          //checkboxSelection
        />
      </div>
   </div>   
  );
}