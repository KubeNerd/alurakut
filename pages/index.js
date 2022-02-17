import MainGrid from "../src/components/MainGrid"
import Box from "../src/components/Box";

import { AlurakutMenu, OrkutNostalgicIconSet } from "../src/lib/AluraCommons";
import { ProfileRelationsBoxWrapper } from "../src/components/ProfileRelations";
function ProfileSidebar(props) {

  return (
    <ProfileRelationsBoxWrapper>
      <img src={`http://github.com/${props.githubUser}.png`} style={{ borderRadius: '8px' }} />
    </ProfileRelationsBoxWrapper>
  )
}

export default function Home() {

  const pessoasFavoritas = [
    'omariosouto', 'peas', 'marcus', 'ana', 'catia'
  ]



  const githubUser = 'shabazzBr';
  return (
    <div>
      <AlurakutMenu />
      <MainGrid>
        <div className="profileArea" style={{ gridArea: "profileArea" }}>
          <ProfileSidebar githubUser={githubUser} />
        </div>

        <div className="welcomeArea" style={{ gridArea: "welcomeArea" }}>
          <Box>
            <h1 className="title">Bem vindo(a)</h1>
            <OrkutNostalgicIconSet/>
          </Box>
        </div>

        <div className="profileRelationsArea" style={{ gridArea: "profileRelationsArea" }} >
          <ProfileRelationsBoxWrapper >
            <h2 className="smallTitle">
              Pessoas da Comunidades ({pessoasFavoritas.length})
            </h2>
            <ul>
              
              {pessoasFavoritas.map((itemAtual) => {
              return (
                <li>
                  <a href={`/users/${itemAtual}`} key={itemAtual}>
                      <img src={`https://github.com/${itemAtual}.png`} />
                      <span>{itemAtual}</span>
                  </a>

                </li>
                )
                })}

              
            </ul>


          </ProfileRelationsBoxWrapper>
          <ProfileRelationsBoxWrapper>
            Comunidades
          </ProfileRelationsBoxWrapper>
        </div>

      </MainGrid>
    </div>
  )
}
