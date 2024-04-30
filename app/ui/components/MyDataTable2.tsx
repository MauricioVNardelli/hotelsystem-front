import style from '@/app/ui/scss/myDataTable.module.scss'

import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';

import { DataGrid, GridColDef, GridRowParams } from '@mui/x-data-grid';
import { getList } from '@/app/lib/utils';
import { Button, Table } from '@mantine/core';

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
        <Button onClick={handleInclude}>
          Incluir
        </Button>
        
        <Button disabled>
          Cancelar
        </Button> 
      </div>
      
      <div className={style.ContainerDataGrid}>
        <Table.ScrollContainer minWidth={500}>
          <Table striped>
            <Table.Thead>
              <Table.Tr>
                {
                  props.columns.map((value) => {
                    return <Table.Th>{value.headerName}</Table.Th>
                  })
                }
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {
                listRecords.map((valueList) => {
                  return (
                    <Table.Tr key={valueList['id']}>
                      { 
                        props.columns.map((valueColumn) => {
                          return <Table.Td>{valueList[valueColumn.field]}</Table.Td>                    
                        })
                      }
                    </Table.Tr>
                  )
                })
              }
            </Table.Tbody>
          </Table>
        </Table.ScrollContainer>
      </div>
   </>   
  );
}