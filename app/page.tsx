import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Hotel System</h1>

      <Link href="/login">
        <span>Entrar</span>
      </Link>
    </div>
  )
}