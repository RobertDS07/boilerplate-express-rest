/* eslint-disable @typescript-eslint/no-var-requires */
import bcrypt from 'bcryptjs'

import { ModelCtor } from 'sequelize/types'

import Users, { IUser } from 'models/Users'

import verifyEmail from 'utils/verifyEmail'
import CustomError from 'utils/CustomError'

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
            throw new CustomError('Weak Password').businessException()

        if (!isEmail) throw new CustomError('Invalid Email').businessException()

        const hashedPassword = await bcrypt.hash(password, 10)

        const [newUser, isNew] = await this.model.findOrCreate({
            where: { email },
            defaults: {
                password: hashedPassword,
                username,
            },
        })

        if (!isNew) throw new CustomError('Email in use').businessException()

        //TODO: ENCONTRAR UM MODO DE NÃO PRECISAR UTILIZA O .toJSON()
        const userWithoutPassword = {
            ...newUser.toJSON(),
            password: undefined,
        } as IUser

        return userWithoutPassword
    }
}

export default new UsersRepository(Users)
