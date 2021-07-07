import { ModelCtor } from 'sequelize/types'

import Users, { IUser } from 'models/Users'

import verifyEmail from 'utils/verifyEmail'
import CreateError from 'utils/createError'

export interface IPropsCreateUser {
    email: string
    password: string
    username: string
}

class UsersRepository {
    model: ModelCtor<IUser>

    constructor(model: ModelCtor<IUser>) {
        this.model = model
    }

    create = async ({
        email,
        password,
        username,
    }: IPropsCreateUser): Promise<IUser> => {
        const isEmail = verifyEmail(email)

        if (!isEmail) {
            //TODO: VERIFICAR SE ESSE TIPO DE ERRO ESTÁ FUNCIONANDO
            throw new CreateError('Email inválido').businessException()
        }

        const [newUser, isNew] = await this.model.findOrCreate({
            where: { email },
            defaults: {
                email,
                password,
                username,
            },
        })

        const userWithoutPassword = { ...newUser, password: undefined } as IUser

        return userWithoutPassword
    }
}

export default new UsersRepository(Users)
