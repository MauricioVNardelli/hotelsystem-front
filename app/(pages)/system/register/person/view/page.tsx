'use client'

import { MyForm } from "@/app/ui/components/MyForm"
import { MyInput } from "@/app/ui/components/MyInput"
import { useSearchParams } from "next/navigation";
import { api } from "@/app/services/api";
import { getUrlForTable } from "@/app/lib/utils";
import { useState } from "react";

export default function PersonViewPage() {
  const searchParams = useSearchParams();
  //const [person, setPerson] = useState({}:Person)

  const paramId = searchParams.get("id");

  async function searchPerson() {
    try {
      const url = await getUrlForTable('fi_person');

      const res = await api.get(url);
      
      return res.data;
    } catch (err) {
      console.log(err);
    }
  }
  
  return(
    <MyForm>
      <MyInput placeholder="Nome" />
      <MyInput placeholder="Email" />
    </MyForm>
  )
}