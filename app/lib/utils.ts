import { api } from "../services/api";

export async function getList(prUrl: string) {
  try {
    const res = await api.get(prUrl);
    
    return res.data;
  } 
  catch(error) {
    console.log('Ocorreu seguinte erro: ' + error)
  }
}

export async function getRegister(prtable: string, prId: string): Promise<any> {
  const url = await getUrlForTable(prtable);
  const res = await api.get(url + '?id=' + prId);
  
  console.log(res.data);
  return res.data;
}

export async function updateRegister(prtable: string, prId: string, data: object) {
  const url = await getUrlForTable(prtable);
  const res = await api.put(url + '?id=' + prId, data);
  
  console.log('update', data);
  return res.data;
}

export async function createRegister(prtable: string, data: object) {
  const url = await getUrlForTable(prtable);
  const res = await api.post(url, data);
  
  return res.data;
}

export async function getUrlForTable(prTable: string): Promise<string> {
  switch (prTable) {
    case 'fi_person': return '/person'
    default: return ''
  }    
}