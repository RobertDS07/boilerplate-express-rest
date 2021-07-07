import { Request, Response } from 'express'

import BaseController from '../../baseController'

import accountService from 'services/accountService'
import tokenService from 'services/tokenService'

class AccountController extends BaseController {
    async post(req: Request, res: Response): Promise<void> {
        try {
            const { email, password, username } = req.body

            const user = await accountService.createAccount({
                email,
                password,
                username,
            })

            const token = tokenService.createToken(user)
        } catch (e) {
            console.log(e)
        }
    }
}

export default new AccountController()
