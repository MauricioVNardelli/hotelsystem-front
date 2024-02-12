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

export async function getUrlForTable(prTable: string): Promise<string> {
  switch (prTable) {
    case 'fi_person': return '/person'
    default: return ''
  }    
}