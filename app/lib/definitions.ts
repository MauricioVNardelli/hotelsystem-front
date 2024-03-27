export type User = {
  id: string
  name?: string | null
  email?: string | null
  token?: string | null
};

export interface IPerson {
  id: number
  name: string
  email: string | null
  CPF_CNPJ: string | null
  IE: string | null
  RG: string | null
  telephone: string | null
  responsiblePersonId: number | null
  surname: string | null
  typeId: number | null
  typeCompanyId: number
  create_at: string
  update_at: string
};