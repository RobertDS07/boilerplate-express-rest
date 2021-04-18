import { NextFunction, Request, Response } from 'express'
import { body, validationResult } from 'express-validator'

import BaseClassMiddlewares from '../baseClassMiddlewares'

class AccountMiddlewares extends BaseClassMiddlewares {
    async post(req: Request, res: Response, next: NextFunction) {
        await body('email', 'Invalid email').isEmail()(req, res, next)

        const errors = validationResult(req)

        if (!errors.isEmpty()) {
            res.status(400).send({ errors: errors.array() })
        }

        next()
    }
}

export default new AccountMiddlewares()
