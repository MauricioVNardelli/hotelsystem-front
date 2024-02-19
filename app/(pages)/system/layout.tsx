import MySidebar from "@/app/ui/components/sidebar/MySidebar";
import style from "@/app/ui/components/scss/system.module.scss"
import MySideapp from "@/app/ui/components/MySideapp";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (        
      <div className={style.conteiner}>
        <MySideapp />

        <div className={style.sidebar}>
          <MySidebar /> 
          
          <div style={{ width: '100%' }}>
            {children}
          </div>
        </div>
      </div>
    );
  }