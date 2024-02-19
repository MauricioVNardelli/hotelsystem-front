import MyForm from "@/app/ui/components/MyForm"
import { Input } from "@mui/material"

interface paramProps {
  params: {
    id: string
  }  
}

export default function PersonViewPage( { params }: paramProps) {
  
  return(
    <MyForm>
      <Input />
    </MyForm>
  )
}