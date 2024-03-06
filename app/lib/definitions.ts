export type User = {
  id: string
  name?: string | null
  email?: string | null
  token?: string | null
};

enum TypeCompany {
  MEI,
  SA,
  SS,
  ME,
  LTDA
}

export enum TypePerson {
  FISICA = "Física",
  JURIDICA = "Jurídica",
}

export interface IPerson {
  id: string
  name: string
  email: string | null
  CPF_CNPJ: string | null
  IE: string | null
  RG: string | null
  Telephone: string | null
  responsiblePersonId: number | null
  surname: string | null
  type: TypePerson
  typeCompany: TypeCompany
  create_at: string
  update_at: string
};