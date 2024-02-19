export default function MyForm({ children }: { children: React.ReactNode }) {
  return (
    <div> 
      <form>
        {children}
      </form>
    </div>
  )
}