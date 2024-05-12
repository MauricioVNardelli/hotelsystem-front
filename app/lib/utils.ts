import { MaskitoMask } from "@maskito/core";
import { api } from "../services/api";
import { typeMask } from "./definitions";

//-- PUBLIC

export async function getList(prTable: string, prUrl?: string) {
  try {
    let url = prUrl;

    if (!url) {
      url = await getUrlForTable(prTable);
    }

    if (url) {
      const res = await api.get(url);
      
      return res.data;
    }

    return {};
  } 
  catch(error) {
    console.log('Ocorreu seguinte erro: ' + error)
  }
}

export async function getRegister(prtable: string, prId: string) {
  const url = await getUrlForTable(prtable);
  const res = await api.get(url + '?id=' + prId);
  
  return res.data;
}

export async function updateRegister(prtable: string, prId: string, data: object) {
  const url = await getUrlForTable(prtable);
  const res = await api.put(url + '?id=' + prId, data);
  
  //console.log('update', data);
  return res.data;
}

export async function createRegister(prtable: string, data: object) {
  const url = await getUrlForTable(prtable);
  const res = await api.post(url, data);
  
  return res.data;
}

export function getMask(prValueType: typeMask): MaskitoMask {
  let maskArr: MaskitoMask = [];

  switch(prValueType) {
    case "cep":
      maskArr = [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/]
      break;
    case "cpf":
      maskArr = [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/]
      break;
    case "cnpj":
      maskArr = [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/]
      break;
    case "cel":
      maskArr = ['(', /\d/, /\d/, ')', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]
      break;
    case "tel":
      maskArr = ['(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]
      break;
  }

  return maskArr;
}

//-- PRIVATE
async function getUrlForTable(prTable: string): Promise<string> {
  switch (prTable) {
    case 'fi_person': return '/person'; break;
    case 'fi_roomitem': return '/roomitem'; break;
    default: return ''
  }
}