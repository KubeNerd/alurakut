import MainGrid from "../src/components/MainGrid"
import Box from "../src/components/Box";

import { AlurakutMenu } from "../src/lib/AluraCommons";
function ProfileSidebar(props){
  

  return(
    <Box>
      <img src={`http://github.com/${props.githubUser}.png`} style={{ borderRadius:'8px'}} />
    </Box>
  )
}

export default function Home() {
  const githubUser = 'shabazzBr';
  return (
    <div>
    <AlurakutMenu/>
    <MainGrid>
      <div className="profileArea" style={{ gridArea: "profileArea" }}>
          <ProfileSidebar githubUser={githubUser}/>
      </div>

      <div className="welcomeArea" style={{ gridArea: "welcomeArea" }}>
        <Box>
          Bem vindo
        </Box>
      </div>

      <div className="profileRelationsArea" style={{ gridArea: "profileRelationsArea" }} >
        <Box >
          Pessoas da Comunidades
        </Box>
        <Box>
          Comunidades
        </Box>
      </div>

    </MainGrid>
    </div>
  )
}
