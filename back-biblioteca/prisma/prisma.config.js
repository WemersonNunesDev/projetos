import 'dotenv/config'
import { definePrismaConfig } from 'prisma/config'

export default definePrismaConfig({
    migrate: {
        datasourceUrl: process.env.DATABASE_URL,
    }
})