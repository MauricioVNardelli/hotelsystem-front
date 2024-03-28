'use client'

import { personColumnListTable } from '@/app/lib/tableColumnDefinition';
import { MyDataTable } from '@/app/ui/components/MyDataTable';
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
        <MyDataTable columns={personColumnListTable} table='fi_person' />
      </Suspense>
    </div>
  )
}