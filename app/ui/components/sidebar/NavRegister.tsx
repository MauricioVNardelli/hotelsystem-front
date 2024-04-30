import { NavLink } from '@mantine/core';
import { IconReservedLine, IconUser, IconFriends } from '@tabler/icons-react';

export default function NavRegister() {
  
  return (
    <NavLink
      label="Cadastro"
      leftSection={<IconReservedLine size="1rem" stroke={1.5} />}
    >
      <NavLink
        href="/system/register/person"
        label="Pessoa"
        leftSection={<IconFriends size="1rem" stroke={1.5} />}
      />
      
      <NavLink
        href="/system/register/user"
        label="Usuário"
        leftSection={<IconUser size="1rem" stroke={1.5} />}
      />
    </NavLink>
  )
}