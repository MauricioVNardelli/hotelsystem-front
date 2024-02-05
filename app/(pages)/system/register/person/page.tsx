'use client'

import { Person } from '@/app/lib/definitions';
import { getList } from '@/app/lib/utils';
import { useEffect, useState } from 'react';

export default function RegisterPerson() {
  const [listPerson, setListPerson] = useState<Person[]>([]);
  
  useEffect(() => {
    const getListPerson = async () => {
      const person = await getList('/person') as Person[];
      
      setListPerson(person);
    }
    
    getListPerson();    
  }, []);

  useEffect(() => {
    console.log(listPerson)
  }, [listPerson])
  
  return (    
    <div>
      <h1>Cadastro de pessoa</h1>
      <p>{listPerson.length}</p>
      {
        (listPerson.length > 0) && 
        listPerson.map((person) => (
          <p key={person.email}>{person.name}</p>
        ))
      }
    </div>
  )
}