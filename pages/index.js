import React, { useState } from "react";
import MainGrid from "../src/components/MainGrid";
import Box from "../src/components/Box";
import { AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet } from "../src/lib/AluraCommons";
import { ProfileRelationsBoxWrapper } from "../src/components/ProfileRelations";


function ProfileSidebar(props) {
  //`https://place-hold.it/300x250`
  //// image:"https://alurakut.vercel.app/capa-comunidade-01.jpg
  return (
    <Box as="aside">
      <img src={`http://github.com/${props.githubUser}.png`} style={{ borderRadius: '8px' }} />
      <hr />
      <p>
        <a className="boxLink" href={`https://github.com/${props.githubUser}`}>
          @{props.githubUser}
        </a>
      </p>

      <AlurakutProfileSidebarMenuDefault />
    </Box>
  )
}

function ProfileRelationsBox(props){
  return(
    <ProfileRelationsBoxWrapper >
    <h2 className="smallTitle">
      {props.title} ({ props.items.length })
    </h2>
    {/* <ul>
      {pessoasFavoritas.map((itemAtual) => {
        return (
          <li>
            <a href={`/users/${itemAtual}`} key={itemAtual}>
              <img src={`https://github.com/${itemAtual}.png`} />
              //<span>{itemAtual}</span>
            </a>

          </li>
        )
      })}
    </ul> */}
   </ProfileRelationsBoxWrapper>
  )
}

export default function Home() {

  const [comunidades, setComunidades] = useState([]);

  
  const githubUser = 'shabazzBr';

  const pessoasFavoritas = [
    'omariosouto', 'peas', 'marcus', 'ana', 'catia'
  ];



// 0 - Pegar o array de dados do github

const [seguidores, setSeguidores] = useState([]);

React.useEffect(() =>{
  fetch(`https://api.github.com/users/shabazzBr`)
    .then((respostaDoServidor) =>{
      return respostaDoServidor.json();
    })
    .then((respostaCompleta) =>{
      setSeguidores(respostaCompleta)
    })
    .catch((error) =>{
      console.log(error.message); 
    })
}, []);

 fetch(`https://graphql.datocms.com`, {
   method:'POST',
   headers:{
     'Authorization':`21b498e2542638e70e58fda9917314`,
     'Content-Type':'application/json'
   },
   body:JSON.stringify({ "query":`query {
    allCommunities {
      id,
      title,
      imageUrl,
      creatorslug
    }

   }`})
   })
   .then((response => response.json()))
   .then((respostaCompleta) =>{
     const comunidadesQuery = respostaCompleta.data.allCommunities;
     setComunidades(comunidadesQuery);
   })
   .catch((error) =>{
     console.log(error.message);
   })
  return (
    <div>
      <AlurakutMenu githubUser={githubUser} />
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
            <form onSubmit={function handleCriarComunidade(e) {
              e.preventDefault();
              const dadosDoForm = new FormData(e.target);

              const comunidade = {
                id:new Date().toISOString(),
                title: dadosDoForm.get('title'),
                imageUrl: dadosDoForm.get('image'),
                paginaUrl: dadosDoForm.get('url')
              }
              const comunidadesAtualizadas = [...comunidades, comunidade];
              setComunidades(comunidadesAtualizadas);
  
    
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
          <ProfileRelationsBox title="seguidores" items={seguidores}/>
          <ProfileRelationsBoxWrapper>
            <ul>
              {comunidades.map((itemAtual) => {
                return (
                  <li key={itemAtual.id}>
                    <a href={`/users/${itemAtual.id}`}>
                      <img src={itemAtual.imageUrl} />
                      <span>{itemAtual.title}</span>
                    </a>  
 
                  </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>


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



        </div>

      </MainGrid>
    </div>
  )
}
