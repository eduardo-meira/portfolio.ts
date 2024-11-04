import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GitHubSection } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre</Titulo>
    <Paragrafo tipo={'principal'}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, amet
      labore voluptas voluptatem sit sequi modi, corporis alias eaque, qui
      numquam! Eos velit aliquid vitae quae facilis numquam! Obcaecati, soluta?
    </Paragrafo>
    <GitHubSection>
      <img src="https://github-readme-stats.vercel.app/api?username=eduardo-meira&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=eduardo-meira&layout=compact&langs_count=7&theme=dracula" />
    </GitHubSection>
  </section>
)

export default Sobre
