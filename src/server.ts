import fastify from "fastify"
import cors from "@fastify/cors"
import routes from "./routes/index.js"
const app = fastify()
const PORT = 3333

app.register(cors, { origin: true })
app.register(routes)

app.listen({
    port: PORT
}, ()=>console.log(`Server running on port ${PORT}`))