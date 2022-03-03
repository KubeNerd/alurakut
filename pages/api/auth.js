import jwt from "jsonwebtoken";

export default async function Auth(request, response){
    const { githubUser } = request.body;
    if(request.method === "POST"){
        const token = jwt.sign({ githubUser }, { secret:'sdkaskdasdasdasdasdasds'}, {
            expiresIn: 300999
        });

        return response.json({
            isAuthenticated:true,
            token,
            roles: [
                "user"
              ]
        })
    }
    return response.json({
        isAuthenticated:false
    })

  
}