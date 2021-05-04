import { Request, Response } from 'express'

import BaseController from '../baseController'

class AccountController extends BaseController {
    async post(req: Request, res: Response): Promise<void> {
        res.send('test')
    }
}

export default new AccountController()
