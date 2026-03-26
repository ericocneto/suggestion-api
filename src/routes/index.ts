import { type FastifyInstance } from "fastify";
import { z } from "zod";
import { PrismaClient } from "../../generated/prisma/client.js";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";

const adapter = new PrismaBetterSqlite3({ url: "file:./dev.db" });
const prisma = new PrismaClient({ adapter });

export default async function routes(app: FastifyInstance) {
    app.get("/", async (req, reply) => {
        return { message: "hello world!" };
    });

    app.post("/create", async (req, reply) => {
        const bodySchema = z.object({
            title: z.string().min(2).max(200),
            message: z.string(),
        });

        const { title, message } = bodySchema.parse(req.body);

        const suggestion = await prisma.suggestion.create({
            data: {
                title,
                suggestionMessage: message,
            },
        });

        return reply.status(201).send(suggestion);
    });
}

