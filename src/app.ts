import express, { Express } from 'express'

import cors from 'cors'
import dotenv from 'dotenv'

import routes from './routes'

if (process.env.NODE_ENV !== 'production')
    dotenv.config({
        path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env',
    })

class App {
    express: Express

    constructor() {
        this.express = express()

        this.middlewares()
        this.routes()
    }

    private middlewares() {
        this.express.use(express.json)
        this.express.use(cors)
    }

    private routes() {
        this.express.use(routes)
    }

    start() {
        this.express.listen(process.env.PORT || 8081, () =>
            console.log('listening on: http://localhost:8081'),
        )
    }
}

export default new App()
