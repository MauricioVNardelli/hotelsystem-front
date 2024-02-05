export type User = {
  id: string
  name?: string | null
  email?: string | null
  token?: string | null
};

export type Person = {
  id: string
  name: string | null
  email: string | null
  create_at: string
  update_at: string
};