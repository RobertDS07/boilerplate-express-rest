import { check } from 'express-validator'

import { RequestHandler } from 'express'

import BaseClassMiddlewares from '../../baseClassMiddlewares'

import verifyErrorsExpressValidator from 'middlewares/verifyErrorsExpressValidator'

class AuthenticationMiddlewares extends BaseClassMiddlewares {
    post: RequestHandler[] = [
        check(`email`)
            .trim()
            .isEmail()
            .withMessage(`Invalid Email`)
            .exists({ checkFalsy: true }),
        check(`password`)
            .trim()
            .exists({ checkFalsy: true })
            .withMessage(`Required password`),
        verifyErrorsExpressValidator,
    ]
}

export default new AuthenticationMiddlewares()
