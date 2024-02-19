import { useEffect, useState } from 'react';

import { DataGrid, GridColDef, GridRowParams, ptBR } from '@mui/x-data-grid';
import { getList, getUrlForTable } from '@/app/lib/utils';
import { Button } from '@mui/material';

import style from '@/app/ui/components/scss/myDataTable.module.scss'

import CancelIcon from '@mui/icons-material/Cancel'
import AddIcon from '@mui/icons-material/Add'
import { usePathname, useRouter } from 'next/navigation';

interface MyDataTableProps {
  columns: GridColDef[],
  table: string
}

export default function MyDataTable(props: MyDataTableProps) {
  const [listRecords, setListRecords] = useState([]);
  const pathname = usePathname();
  const router = useRouter()

  async function handleInclude() {    
    
    router.push(`${pathname}/view`)
  };

  async function onGridRowDblClick(params: GridRowParams) {
    router.push(`${pathname}/view/${params.id}`)
  }
  
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

  return (
    <>
      <div className={style.ButtonPallet}>
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
          disabled
        >
          Cancelar
        </Button> 
      </div>
      
      <div className={style.ContainerDataGrid}>
        <DataGrid
          rows={listRecords}
          columns={props.columns}
          disableColumnMenu
          onRowDoubleClick={onGridRowDblClick}
          rowHeight={30}
          columnHeaderHeight={40}
          localeText={ptBR.components.MuiDataGrid.defaultProps.localeText}
          
          /*initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}*/
          //pageSizeOptions={[5, 10]}        
          //checkboxSelection
        />
      </div>
   </>   
  );
}