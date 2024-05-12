'use client'

import style from '@/app/ui/scss/myForm.module.scss'

import { useContext, useEffect } from "react";
import { PageNameContext } from "../../../layout";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { Roomitem } from "@/app/lib/definitions";
import { useRouter, useSearchParams } from "next/navigation";
import { createRegister, getRegister, updateRegister } from "@/app/lib/utils";
import { Grid } from "@mantine/core";
import { MyInputForm } from "@/app/ui/components/MyInputForm";
import { MyButton } from "@/app/ui/components/MyButton";
import { MyTextarea } from '@/app/ui/components/MyTextarea';

const table = 'fi_roomitem';

export default function RoomitemViewPage(){
  const { setPageName } = useContext(PageNameContext);
  const searchParams = useSearchParams();
  const router = useRouter();

  const paramId = searchParams.get("id") || "";

  useEffect(() => {
    setPageName('Item do quarto');
  });

  const form = useForm<Roomitem>({ 
    defaultValues: 
      async () => {           
        if (paramId) {
          return await getRegister(table, paramId);
      }
    }
  });

  const onSubmit: SubmitHandler<Roomitem> = async function(data) {    

    if (paramId)
      await updateRegister(table, paramId, data)
    else
      await createRegister(table, data);

    router.push('/system/register/roomitem');
  };

  return (
    <FormProvider {...form}>
      <div className={style.conteiner}>      
        <form className={style.form} onSubmit={form.handleSubmit(onSubmit)} >
        
          <Grid>
            <Grid.Col span={12}>
              <MyInputForm field="description" id="description" label="Descrição" isRequired />
            </Grid.Col>

            <Grid.Col span={12}>
              <MyTextarea field="detail" id="detail" label="Detalhes" heigth={100} />
            </Grid.Col>
          </Grid>
          
          <MyButton type='submit'>Salvar</MyButton>
        </form>      
      </div>
    </FormProvider>
  )
}