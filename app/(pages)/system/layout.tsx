import Sidebar from "@/app/ui/components/sidebar/Sidebar";
import style from "@/app/ui/system/system.module.scss"

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
      <div className={style.conteiner}>        
        <div>
          <Sidebar />
        </div>
        <div className={style.conteinerChield}>
          {children}
        </div>
      </div>
    );
  }