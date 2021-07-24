import { Request, Response } from 'express'

class BaseController {
    get(req: Request, res: Response): void {
        res.status(405).send(`Method Not Allowed`)
    }
    find(req: Request, res: Response): void {
        res.status(405).send(`Method Not Allowed`)
    }
    post(req: Request, res: Response): void {
        res.status(405).send(`Method Not Allowed`)
    }
    patch(req: Request, res: Response): void {
        res.status(405).send(`Method Not Allowed`)
    }
    delete(req: Request, res: Response): void {
        res.status(405).send(`Method Not Allowed`)
    }
}

export default BaseController
