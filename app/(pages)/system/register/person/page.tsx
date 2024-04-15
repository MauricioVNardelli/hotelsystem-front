'use client'

import { MyDataTable } from '@/app/ui/components/MyDataTable';
import { Suspense, useContext, useEffect } from 'react';
import { PageNameContext } from '../../layout';
import { GridColDef } from '@mui/x-data-grid';

export default function PersonPage() {
  const { setPageName } = useContext(PageNameContext);

  useEffect(() => {
    setPageName("Cadastro de pessoa");
  }, [])
  
  return (    
    <div>
      <Suspense fallback={<p>Carregando...</p>}>
        <MyDataTable columns={personColumnListTable} table='fi_person' />
      </Suspense>
    </div>
  )
}

const personColumnListTable: GridColDef[] = [
  {
    field: 'id',
    headerName: 'Cód',
    align: "right",
    width: 20,
  },
  {
    field: 'name',
    headerName: 'Nome',
    width: 500    
  },
  {
    field: 'typeId',
    headerName: 'Tipo',
    width: 100    
  },
  {
    field: 'CPF_CNPJ',
    headerName: 'CPF/CNPJ',
    width: 150    
  },
  {
    field: 'email',
    headerName: 'E-mail',
    width: 250    
  }
]