import '@/app/ui/global.scss';
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';

import { inter } from '@/app/ui/fonts';
import { Metadata } from 'next';
import { AuthProvider } from './contexts/AuthContext';

export const metadata: Metadata = {
  title: {
    template: '%s | Hotel System',
    default: 'Hotel System',
  },
  description: 'Hotel System - Sistema de gestão para hotéis',
  metadataBase: new URL('http://hotelsystem.com.br/'),  
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} antialiased`}>
        <MantineProvider>
          <AuthProvider>
            {children}
          </AuthProvider>
        </MantineProvider>
      </body>      
    </html>
  );
}