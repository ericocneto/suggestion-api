import { type FastifyInstance } from "fastify";
 export default async function routes(app:FastifyInstance) {
    app.get("/", async(req, reply)=>{ 
        return {mesasge:"hello world!"}
    })
    app.post("/create", async(req, reply)=>{
        reply.statusCode = 201
        return {message: "created"}
    })
}

