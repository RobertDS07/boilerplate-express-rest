import { Request, Response } from 'express'

import BaseController from '../../baseController'

class AccountController extends BaseController {
    async post(req: Request, res: Response): Promise<void> {
        res.json(req.headers.oi).send()
    }
}

export default new AccountController()
