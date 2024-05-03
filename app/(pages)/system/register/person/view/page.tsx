'use client'

import style from '@/app/ui/scss/myForm.module.scss'

import { useContext, useEffect } from 'react';
import { useForm, SubmitHandler, FormProvider } from "react-hook-form"
import { useSearchParams, useRouter } from "next/navigation";

import { type Person } from '@/app/lib/definitions'

import Grid from '@mui/material/Unstable_Grid2';
import { MyInputForm } from "@/app/ui/components/MyInputForm"
import { MyButton } from '@/app/ui/components/MyButton';
import { MySelect } from '@/app/ui/components/MySelect';
//import { Tabs } from '@mantine/core';
import { createRegister, getRegister, updateRegister } from "@/app/lib/utils";
import { PageNameContext } from '../../../layout';

const table = 'fi_person';

export default function PersonViewPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { setPageName } = useContext(PageNameContext);
  
  const paramId = searchParams.get("id") || "";  

  const form = useForm<Person>({ 
    defaultValues: 
      async () => {           
        if (paramId) {
          return await getRegister(table, paramId);
      }
    }
  });  
  
  //Força renderizar ao alterar
  form.watch(['typeId'])[0];

  const typePersonIsCPF = form.getValues().typeId == 1;

  const onSubmit: SubmitHandler<Person> = async function(data) {    

    if (paramId)
      await updateRegister(table, paramId, data)
    else
      await createRegister(table, data);

    router.push('/system/register/person');
  };

  useEffect(() => {
    setPageName("Pessoa");
  }, [])

  return (
    <FormProvider {...form}>
      <div className={style.conteiner}>      
        <form className={style.form} onSubmit={form.handleSubmit(onSubmit)} >
        
          <Grid container spacing={1}>
            <Grid xs={7}>
              <MyInputForm field="name" id="name" label="Nome" isRequired />
            </Grid>
              
            <Grid xs={5}>
              <MyInputForm field="surname" id="surname" label="Apelido" />
            </Grid>
            
            {/*-------LINE 2------------*/}          
            <Grid xs={3}>
              <MySelect 
                field="typeId" 
                id="typeId" 
                table='fi_typeperson' 
                label="Tipo"
              />
            </Grid>

            <Grid xs={4}>              
              <MyInputForm
                field="cpf_cnpj"
                id="cpfcnpj" 
                label="CPF/CNPJ"
                isRequired
                mask={typePersonIsCPF ? "cpf" : "cnpj"}
              />
            </Grid>            
                
            <Grid xs={5}>            
              <MyInputForm field="email" id="email" label="E-mail" />                
            </Grid>  

          </Grid>

          { 
            typePersonIsCPF ? getGridFisica() : getGridJuridica() 
          }

          {/*<Tabs defaultValue='endereco' variant='outline' style={{marginTop: "10px"}}>
            <Tabs.List>              
              <Tabs.Tab value="endereco">Endereço</Tabs.Tab>
            </Tabs.List>            
        </Tabs>*/}

          <MyButton type='submit'>Salvar</MyButton>
        </form>      
      </div>
    </FormProvider>
  )
}

function getGridFisica(): React.ReactNode {
  return (
    <Grid container spacing={1}>
      
      <Grid xs={4}>
        <MyInputForm field="telephone" id="telephone" label="Telefone" mask={'tel'} />
      </Grid>     

      <Grid xs={8}>
        <MyInputForm field="rg" id="rg" label="RG" />
      </Grid>

    </Grid>
  )
}

function getGridJuridica(): React.ReactNode {
  return (
    <Grid container spacing={1}>
      
      <Grid xs={4}>
        <MyInputForm field="ie" id="ie" label="I.E" />
      </Grid>

      <Grid xs={4}>
        <MySelect 
          field="typeCompanyId" 
          id="typeCompanyId" 
          table='fi_typecompany' 
          label='Tipo de empresa' 
        />
      </Grid>

      <Grid xs={4}>
        <MyInputForm 
          field="telephone" 
          id="telephone" 
          label="Telefone" 
          mask={'tel'} 
        />
      </Grid>         

    </Grid>
  )
}