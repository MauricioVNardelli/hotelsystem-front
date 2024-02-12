import '@/app/ui/global.scss';
import { inter } from '@/app/ui/fonts';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | Hotel System',
    default: 'Painel',
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
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}