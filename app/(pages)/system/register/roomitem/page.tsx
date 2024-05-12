'use client'

import { MyDataTable, type GridColDef } from '@/app/ui/components/MyDataTable';
import { Suspense, useContext, useEffect } from 'react';
import { PageNameContext } from '../../layout';

export default function RoomItemPage() {
  const { setPageName } = useContext(PageNameContext);

  useEffect(() => {
    setPageName("Itens do quarto");
  }, [])
  
  return (    
    <div>
      <Suspense fallback={<p>Carregando...</p>}>
        <MyDataTable columns={columnList} table='fi_roomitem' />
      </Suspense>
    </div>
  )
}

const columnList: GridColDef[] = [
  {
    field: 'id',
    headerName: 'Cód',
    align: "right",
    width: 20,
  },
  {
    field: 'description',
    headerName: 'Descrição',
  }
]