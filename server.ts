import Fastify from 'fastify'
import { settingRoutes } from './routes/settingRoutes'

const app = Fastify()

app.register(settingRoutes)

app.listen({ port: 3000 }, () => {
  console.log('Server running on http://localhost:3000')
})
