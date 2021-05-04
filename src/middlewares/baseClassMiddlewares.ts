/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from 'express'

class BaseClassMiddlewares {
    all(req: Request, res: Response): void {
        return
    }

    get(req: Request, res: Response, next: NextFunction): void {
        this.all(req, res)
        next()
    }

    find(req: Request, res: Response, next: NextFunction): void {
        this.all(req, res)
        next()
    }

    post(req: Request, res: Response, next: NextFunction): void {
        this.all(req, res)
        next()
    }

    patch(req: Request, res: Response, next: NextFunction): void {
        this.all(req, res)
        next()
    }

    delete(req: Request, res: Response, next: NextFunction): void {
        this.all(req, res)
        next()
    }
}

export default BaseClassMiddlewares
