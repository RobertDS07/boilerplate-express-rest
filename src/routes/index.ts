import { Router } from 'express'

import accountRoutes from './public/accountRoutes'

class Routes {
    routes: Router

    constructor() {
        this.routes = Router()

        this.publicRoutes()
        // this.privateRoutes()
        this.notFoundRoute()
    }

    private publicRoutes() {
        this.routes.use(accountRoutes)
    }

    // private privateRoutes() {}

    private notFoundRoute() {
        this.routes.use('*', (req, res) => res.status(404).send('Not Found'))
    }
}

export default new Routes().routes
