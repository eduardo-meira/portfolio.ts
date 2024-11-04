import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'
import {
  BotaoEstilizado,
  SideBarContainer,
  SideBar as SideBarEstilo
} from './styles'

type Props = {
  trocaTema: () => void
}

const SideBar = (props: Props) => (
  <SideBarEstilo>
    <SideBarContainer>
      <Avatar />
      <Titulo fontSize={20}> Eduardo Meira</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        eduardo-meira
      </Paragrafo>
      <Paragrafo tipo="principal" fontSize={12}>
        Engenheiro Front-End
      </Paragrafo>
      <BotaoEstilizado onClick={props.trocaTema}>Trocar tema</BotaoEstilizado>
    </SideBarContainer>
  </SideBarEstilo>
)

export default SideBar
