import { Router } from 'express'

import accountRoutes from './public/accounts/accountsRoutes'
import authenticationRoutes from './public/authentication/authenticationRoutes'

class Routes {
    private routes: Router

    constructor() {
        this.routes = Router()
    }

    get getRoutes() {
        this.init()

        return this.routes
    }

    private init() {
        this.publicRoutes()
        // this.privateRoutes()
        this.notFoundRoute()
    }

    private publicRoutes() {
        this.routes.use(accountRoutes)
        this.routes.use(authenticationRoutes)
    }

    // private privateRoutes() {}

    private notFoundRoute() {
        this.routes.use(`*`, (req, res) => res.status(404).send(`Not Found`))
    }
}

export default new Routes().getRoutes
