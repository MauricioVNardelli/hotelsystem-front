'use client'

import { personColumnListTable } from '@/app/lib/tableColumnDefinition';
import MyDataTable from '@/app/ui/components/MyDataTable';

export default function PersonPage() {  
  return (    
    <div>
      <h1>Cadastro de pessoa</h1>      
      
      <MyDataTable columns={personColumnListTable} table='fi_person' />
    </div>
  )
}