'use client'

import { personColumnListTable } from '@/app/lib/tableColumnDefinition';
import { MyDataTable } from '@/app/ui/components/MyDataTable';
import { Suspense, useEffect } from 'react';

export default function PersonPage() {  

  useEffect(() => {
    const element = document.getElementById('screenName');
  
    if (element)
      element.innerHTML = "Cadastro de pessoa";
  })  
  
  return (    
    <div>
      <Suspense fallback={<p>Carregando...</p>}>
        <MyDataTable columns={personColumnListTable} table='fi_person' />
      </Suspense>
    </div>
  )
}