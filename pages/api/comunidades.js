import { SiteClient } from "datocms-client";

export default async function receberDadosDaRequests(request, response){
    const TOKEN = "b47fb99930fcbfe16aecca35834ee3";
    const client = new SiteClient(TOKEN);

   if(request.method === "POST"){
    
    const registroCriado = await client.items.create({
        itemType:"1859205",
        // title:"DatoCMS",
        // ImageUrl:"https://www.datocms-assets.com/205/1614353889-social.png?fit=max&fm=jpg&w=1000",
        // creatorSlug:"shabazzBr"
        ...request.body,
    })
  
     response.json({
        registroCriado:registroCriado
    });

    return;

  }




  response.status(404).json({
      message:"Ainda não temos nada no GET, mas no POST tem"
  })

}