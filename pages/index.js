import MainGrid from "../src/components/MainGrid"
import Box from "../src/components/Box";

import { AlurakutMenu, OrkutNostalgicIconSet } from "../src/lib/AluraCommons";
import { ProfileRelationsBoxWrapper } from "../src/components/ProfileRelations";
function ProfileSidebar(props) {

  return (
    <Box>
      <img src={`http://github.com/${props.githubUser}.png`} style={{ borderRadius: '8px' }} />
      <hr />
      <a className="boxLink" href={`https://github.com/${props.githubUser}`}>
        @{props.githubUser}
      </a>

    </Box>
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
            <OrkutNostalgicIconSet />
          </Box>

          <Box>
            <h2 className="subTitle">Oque você deseja fazer ?</h2>
            <form onSubmit={(e) =>{
              e.preventDefault();
            }}>
              <input
                  placeholder="Qual vai ser o nome da sua comunidade ?"
                  name="title"
                  aria-label="Qual vai ser o nome da sua comunidade ?" 
                />


                <input
                  placeholder="Qual URL vamos usar de capa nessa comunidade ?"
                  name="image"
                  aria-label="Qual URL vamos usar de capa nessa comunidade ?" 
                />
                <button>Criar comunidade</button>
            </form>
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
