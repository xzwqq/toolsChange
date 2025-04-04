import { Container } from "../../features/container/index.ts"
import { Header } from "../../widgets/Header/index.ts"

const MyProfile = () => {
    const zalupa = 'my'  

  return (
    <div className="root__my">
        <Header/>
        <Container type={zalupa}/>
    </div>
  )
}

export default MyProfile