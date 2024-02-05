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