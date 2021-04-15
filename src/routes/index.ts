import { Router } from 'express'

import test from './private/testRoutes'

class Routes {
    routes: Router

    constructor() {
        this.routes = Router()

        this.publicRoutes()
        this.privateRoutes()
        this.notFoundRoute()
    }

    private publicRoutes() {
        this.routes.use('/pub', (req, res) => res.send('oiii'))
    }

    private privateRoutes() {
        this.routes.use(test)
    }

    private notFoundRoute() {
        this.routes.use('*', (req, res) => res.status(404).send('Not Found'))
    }
}

export default new Routes().routes
