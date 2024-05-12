import style from '@/app/ui/scss/myDataTable.module.scss'

import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';

import { getList } from '@/app/lib/utils';
import { Button, Table } from '@mantine/core';

export type GridColDef = {
  field: string,
  headerName: string,
  align?: 'right' | 'left' | 'center',
  width?: number,
}

type MyDataTableProps = {
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

  function onDoubleClick(id: string) {    
    router.push(`${pathname}/view?id=${id}`)
  }
  
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
                    return <Table.Th key={value.headerName}>{value.headerName}</Table.Th>
                  })
                }
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody id='tbody'>
              {
                listRecords.map((valueList) => {
                  return (                    
                    <Table.Tr id='tr' key={valueList['id']} onDoubleClick={() => onDoubleClick(valueList['id'])}>
                      { 
                        props.columns.map((valueColumn, index) => {
                          return <Table.Td key={index}>{valueList[valueColumn.field]}</Table.Td>                    
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