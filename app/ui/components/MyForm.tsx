import style from '@/app/ui/components/scss/myForm.module.scss'

export function MyForm({ children }: { children: React.ReactNode }, {...props}) {
  
  return (
    <div className={style.conteiner}>
      <form className={style.form} {...props}>
        {children}
      </form>
    </div>
  )
}