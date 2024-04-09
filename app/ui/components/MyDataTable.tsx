import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import style from '@/app/ui/components/scss/myDataTable.module.scss'

import { DataGrid, GridColDef, GridRowParams, ptBR } from '@mui/x-data-grid';
import { Button } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel'
import AddIcon from '@mui/icons-material/Add'

import { getList } from '@/app/lib/utils';

interface MyDataTableProps {
  columns: GridColDef[],
  table: string
}

export function MyDataTable(props: MyDataTableProps) {
  const [listRecords, setListRecords] = useState([]);
  const pathname = usePathname();
  const router = useRouter()

  function handleInclude() {    
    router.push(`${pathname}/view`)
  };

  function onGridRowDblClick(params: GridRowParams) {
    router.push(`${pathname}/view?id=${params.id}`)
  }
  
  //----------------------------------------------------
  async function getRecordForDataGrid() {
    const listRecord = await getList( props.table );
    
    if (!listRecord) {
      return {}
    }

    setListRecords(listRecord);
  }
  
  useEffect(() => {    
    getRecordForDataGrid();    
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