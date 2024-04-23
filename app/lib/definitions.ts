export type SignInData = {
  email: string;
  password: string;
}

export type User = {
  id: string
  name: string
  email: string
  token: string
};

export type Person = {
  id: number
  name: string
  email: string | null
  cpf_cnpj: string | null
  ie: string | null
  rg: string | null
  telephone: string | null
  responsiblePersonId: number | null
  surname: string | null
  typeId: number | null
  typeCompanyId: number
  create_at: string
  update_at: string
};

export type typeMask = "cep" | "cpf" | "cnpj" | "date" | "tel" | "cel" | undefined;