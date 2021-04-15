import { Request, Response } from 'express'

import BaseController from '../baseController'

class TestController extends BaseController {
    find(req: Request, res: Response) {
        res.status(200).send('foi')
    }
}

export default new TestController()
