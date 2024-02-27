'use client'

import style from '@/app/ui/components/scss/myForm.module.scss'
import { MyInput } from "@/app/ui/components/MyInput"
import { useSearchParams } from "next/navigation";
import { getRegister } from "@/app/lib/utils";
import { useState } from "react";
import { Person } from '@/app/lib/definitions'
import { useForm, SubmitHandler } from "react-hook-form"
import { MyButton } from '@/app/ui/components/MyButton';

export default function PersonViewPage() {
  const searchParams = useSearchParams();
  const [person, setPerson] = useState<Person>();
  
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Person>({ 
    defaultValues: async () => {
      
        const paramId = await searchParams.get("id") || "";
    
        return getRegister('fi_person', paramId);
      
    }
  })  

  const onSubmit: SubmitHandler<Person> = function(data) {
    console.log("teste");
    console.log(data)
  };

  return(
    <div className={style.conteiner}>
      <form className={style.form} onSubmit={handleSubmit(onSubmit)} >
      
        <MyInput {...register("name")} id="name" label="Nome" />
        <MyInput {...register("email", { required: true })} label="E-mail" />
      
        <MyButton type='submit'>Salvar</MyButton>
      </form>
    </div>
  )
}