import { NextFunction, Request, Response, Router } from 'express'

import BaseController from '../../controllers/baseController'

class PrivateBaseRoute {
    routes: Router

    path: string
    controller: BaseController

    constructor(path: string, controller: BaseController) {
        this.routes = Router()

        this.controller = controller
        this.path = path
    }

    middleware(req: Request, res: Response, next: NextFunction): void {
        if (!req.headers.authorization) res.status(401).send('Unauthorized')

        //validar token

        next()
    }

    get(): void {
        this.routes.get(
            `${this.path}/:id`,
            this.middleware,
            this.controller.get,
        )
    }

    find(): void {
        this.routes.get(`${this.path}`, this.middleware, this.controller.find)
    }

    post(): void {
        this.routes.post(`${this.path}`, this.middleware, this.controller.post)
    }

    patch(): void {
        this.routes.patch(
            `${this.path}/:id`,
            this.middleware,
            this.controller.get,
        )
    }

    delete(): void {
        this.routes.delete(
            `${this.path}/:id`,
            this.middleware,
            this.controller.delete,
        )
    }

    createRoutes(): Router {
        this.get()
        this.find()
        this.post()
        this.patch()
        this.delete()

        return this.routes
    }
}

export default PrivateBaseRoute
