import { Request, Response } from 'express'

import BaseController from '../baseController'

class AccountController extends BaseController {
    post(req: Request, res: Response): void {
        res.send('test')
    }
}

export default new AccountController()
