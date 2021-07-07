/* eslint-disable @typescript-eslint/no-var-requires */
import jwt from 'jsonwebtoken'

import { IUser } from 'models/Users'

const { secret, expiresIn } = require('../../configs/token.js')

class TokenService {
    createToken = (user: IUser): string => {
        const token = jwt.sign(user, secret, {
            expiresIn,
        })

        return token
    }
}

export default new TokenService()
