'use client'

import { MyDataTable, type GridColDef } from '@/app/ui/components/MyDataTable';
import { Suspense, useContext, useEffect } from 'react';
import { PageNameContext } from '../../layout';

export default function PersonPage() {
  const { setPageName } = useContext(PageNameContext);

  useEffect(() => {
    setPageName("Cadastro de pessoa");
  }, [])
  
  return (    
    <div>
      <Suspense fallback={<p>Carregando...</p>}>
        <MyDataTable columns={columnList} table='fi_person' />
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
    field: 'name',
    headerName: 'Nome',
    width: 200    
  },
  {
    field: 'typeName',
    headerName: 'Tipo',
    width: 100    
  },
  {
    field: 'cpf_cnpj',
    headerName: 'CPF/CNPJ',
    width: 150    
  },
  {
    field: 'email',
    headerName: 'E-mail',
    width: 250    
  }
]