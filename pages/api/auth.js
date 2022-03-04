import jwt from "jsonwebtoken";

export default async function Auth(request, response){
    console.log(request.body)
    const { githubUser } = request.body;

    if(request.method === "POST"){
        const token = jwt.sign({ githubUser },'e8d95a51f3af4a3b134bf6bb680a213a', {
            expiresIn: 300999
        })

     response.json({
            isAuthenticated:true,
            token,
            roles: [
                "user"
              ]
        })
    }
   response.json({
        isAuthenticated:false
    })

  
}