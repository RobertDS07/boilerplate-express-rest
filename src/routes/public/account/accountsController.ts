import { Request, Response } from 'express'

import BaseController from '../../baseController'

import accountService from 'services/accountsService'
import tokenService from 'services/tokenService'
import handleError from 'utils/handleError'

class AccountsController extends BaseController {
    async post(req: Request, res: Response): Promise<void> {
        try {
            const { email, password, username } = req.body

            const user = await accountService.createAccount({
                email,
                password,
                username,
            })

            const token = tokenService.createToken(user)

            res.status(201).send({ user, token })
        } catch (e) {
            handleError(res, e)
        }
    }
}

export default new AccountsController()
