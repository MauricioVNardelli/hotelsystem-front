'use client'

import style from '@/app/ui/components/scss/myForm.module.scss'
import Grid from '@mui/material/Unstable_Grid2';
import { MyInputForm } from "@/app/ui/components/MyInputForm"
import { useSearchParams, useRouter } from "next/navigation";
import { createRegister, getRegister, updateRegister } from "@/app/lib/utils";
import { IPerson } from '@/app/lib/definitions'
import { useForm, SubmitHandler, FormProvider } from "react-hook-form"
import { MyButton } from '@/app/ui/components/MyButton';
import { MySelect } from '@/app/ui/components/MySelect';
import { useContext, useEffect } from 'react';
import { PageNameContext } from '../../../layout';

const table = 'fi_person';

export default function PersonViewPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { setPageName } = useContext(PageNameContext);
  
  const paramId = searchParams.get("id") || "";

  useEffect(() => {
    setPageName("Pessoa");
  }, [])

  const form = useForm<IPerson>({ 
    defaultValues: 
      async () => {           
        if (paramId) {
          return await getRegister(table, paramId);
      }
    }
  })

  const onSubmit: SubmitHandler<IPerson> = async function(data) {    

    if (paramId)
      await updateRegister(table, paramId, data)
    else
      await createRegister(table, data);

    router.push('/system/register/person');
  };

  return(
    <FormProvider {...form}>
      <div className={style.conteiner}>      
        <form className={style.form} onSubmit={form.handleSubmit(onSubmit)} >
          <Grid container spacing={2}>

            {/*-------LINE 1------------*/}          

            <Grid xs={7}>
              <MyInputForm field="name" id="name" label="Nome" />
            </Grid>
              
            <Grid xs={5}>
              <MyInputForm field="surname" id="surname" label="Apelido" />
            </Grid>
            
            {/*-------LINE 2------------*/}          
            <Grid xs={3}>
              <MySelect field="typeId" id="typeId" table='fi_typeperson' label="Tipo" />
            </Grid>
                
            <Grid xs={6}>            
              <MyInputForm field="email" id="email" label="E-mail" />                
            </Grid> 

            <Grid xs={3}>            
              <MyInputForm field="RG" id="rg" label="RG" />
            </Grid>  

            {/*-------LINE 3------------*/}

            <Grid xs={3}>              
              <MyInputForm
                field="CPF_CNPJ" 
                id="cpfcnpj" 
                label="CPF/CNPJ" 
                mask={ form.getValues().typeId == 1 ? "cpf" : "cnpj" }
              />
            </Grid>

            <Grid xs={3}>
              <MyInputForm field="IE" id="ie" label="I.E" />
            </Grid>

            <Grid xs={3}>
              <MySelect field="typeCompanyId" id="typeCompanyId" table='fi_typecompany' label='Tipo de empresa' />
            </Grid>

            <Grid xs={3}>
              <MyInputForm field="telephone" id="telephone" label="Telefone" mask={'tel'} />
            </Grid>
          
          </Grid>

          <MyButton type='submit'>Salvar</MyButton>
        </form>      
      </div>
    </FormProvider>
  )
}