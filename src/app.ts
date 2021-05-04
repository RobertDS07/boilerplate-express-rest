import express, { Express } from 'express'

import cors from 'cors'

import routes from './routes'

class App {
    express: Express

    constructor() {
        this.express = express()

        this.middlewares()
        this.routes()
    }

    private middlewares() {
        this.express.use(express.json())
        this.express.use(cors())
    }

    private routes() {
        this.express.use(routes)
    }
}

export default new App().express
