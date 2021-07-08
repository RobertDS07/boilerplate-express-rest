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
        const weakPassword = password.length < 4

        if (weakPassword)
            throw new CreateError('Weak Password').businessException()

        if (!isEmail) throw new CreateError('Invalid Email').businessException()

        const [newUser, isNew] = await this.model.findOrCreate({
            where: { email },
            defaults: {
                password,
                username,
            },
        })

        if (!isNew) throw new CreateError('Email in use').businessException()

        //TODO: ENCONTRAR UM MODO DE NÃO PRECISAR UTILIZA O .toJSON()
        const userWithoutPassword = {
            ...newUser.toJSON(),
            password: undefined,
        } as IUser

        return userWithoutPassword
    }
}

export default new UsersRepository(Users)
