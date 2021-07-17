import { check } from 'express-validator'

import { RequestHandler } from 'express'

import BaseClassMiddlewares from '../../baseClassMiddlewares'

class AccountsMiddlewares extends BaseClassMiddlewares {
    post: RequestHandler[] = [
        check('email').normalizeEmail().isEmail().withMessage('Invalid Email'),
        check('password')
            .exists({ checkNull: true })
            .withMessage('Insert password field'),
        check('username')
            .trim()
            .exists({ checkNull: true })
            .withMessage('Insert username field'),
    ]
}

export default new AccountsMiddlewares()
