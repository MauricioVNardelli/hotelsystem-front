import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Hotel System2</h1>

      <Link href="/login">
        <span>Entrar</span>
      </Link>
    </div>
  )
}