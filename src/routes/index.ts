import { type FastifyInstance } from "fastify";
import {email, uuid, z} from "zod"
 export default async function routes(app:FastifyInstance) {
    app.get("/", async(req, reply)=>{ 
        return {mesasge:"hello world!"}
    })
    app.post("/create", async(req, reply)=>{
        const data = req.body
        const Suggestion = z.object({
            email: z.email(),
            message: z.string()
         })
        Suggestion.parse(data)
        return {message: "created"}
    })
}

