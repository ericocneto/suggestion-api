import fastify from "fastify"
import routes from "./routes/index.js"
const app = fastify()
const PORT = 3333

app.register(routes)

app.listen({
    port: PORT
}, ()=>console.log(`Server running on port ${PORT}`))