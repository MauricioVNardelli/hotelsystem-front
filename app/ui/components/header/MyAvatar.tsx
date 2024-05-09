import { Group, Avatar, Text } from '@mantine/core';
import style from '@/app/ui/scss/avatar.module.scss';

const urlAvatar = 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-9.png';

export default function MyAvatar() {
  return (
    <div className={style.container}>
      <Group>
        <Avatar
          src={urlAvatar}
          radius="xl"
        />

        <div style={{ flex: 1 }}>
          <Text size="sm" fw={500}>
            Seu nome aqui
          </Text>

          <Text c="dimmed" size="xs">
            email@outlook.com
          </Text>
        </div>

      </Group>
    </div>
  );
}