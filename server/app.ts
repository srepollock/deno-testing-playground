import { Application } from 'https://deno.land/x/oak@v6.0.0/mod.ts'
import router from './router.ts'

const env = Deno.env.toObject()
const HOST = env.HOST || '127.0.0.1'
const PORT = env.PORT || 7700

const app = new Application()

app.use(router.routes())
app.use(router.allowedMethods())

console.log(`Listening on port http://${HOST}:${PORT} ...`)
await app.listen(`${HOST}:${PORT}`)
