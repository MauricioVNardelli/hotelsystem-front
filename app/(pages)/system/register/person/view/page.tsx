'use client'

import style from '@/app/ui/components/scss/myForm.module.scss'
import { MyInput } from "@/app/ui/components/MyInput"
import { useSearchParams, useRouter } from "next/navigation";
import { createRegister, getRegister, updateRegister } from "@/app/lib/utils";
import { IPerson, TypePerson } from '@/app/lib/definitions'
import { useForm, SubmitHandler } from "react-hook-form"
import { MyButton } from '@/app/ui/components/MyButton';
import { MySelect } from '@/app/ui/components/MySelect';

const table = 'fi_person';

export default function PersonViewPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  const paramId = searchParams.get("id") || "";

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IPerson>({ 
    defaultValues: async () => {     
      
    if (paramId)           
      return await getRegister(table, paramId);
    }
  })

  const onSubmit: SubmitHandler<IPerson> = async function(data) {    

    if (paramId)
      await updateRegister(table, paramId, data)
    else
      await createRegister(table, data);

    router.push('/system/register/person');
  };

  console.log(watch("name"));
  
  return(
    <div className={style.conteiner}>
      <form className={style.form} onSubmit={handleSubmit(onSubmit)} >

        <MySelect list={TypePerson} {...register("type")} id="type" label="Tipo" />                      
        
        <MyInput {...register("name")} id="name" label="Nome" />
        <MyInput {...register("surname")} id="surname" label="Apelido" />
        <MyInput {...register("email", { required: true })} id="email" label="E-mail" />
      
        <MyButton type='submit'>Salvar</MyButton>
      </form>
    </div>
  )
}