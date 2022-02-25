import { responseSymbol } from "next/dist/server/web/spec-compliant/fetch-event";

export default async function receberDadosDaRequest(request, response)
{
    response.json({
        dados:'Algum dado qualquer mannn'
    })
}