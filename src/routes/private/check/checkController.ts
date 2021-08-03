import { Request, Response } from 'express'

import BaseController from '../../baseController'

class CheckController extends BaseController {
    async find(req: Request, res: Response): Promise<void> {
        res.status(200).send()
    }
}

export default new CheckController()
