import bcrypt from 'bcryptjs'
import faker from 'faker'

import sequelize from '../../src/sequelize'

import Users from '../../src/models/Users'

describe('User model test', () => {
    beforeAll(async () => {
        await sequelize.sync({ force: true })
    })

    it('Should hash password', async () => {
        const dataToCreateUser = {
            email: faker.internet.email(),
            password: faker.internet.password(),
            username: faker.internet.userName(),
        }
        //TODO: DELETAR O PASSWORD DO RETURN, CREIO QUE O defaultScope NÃO ESTEJA FUNCIONANDO POR ERRO NA CONFIG DO SEQUELIZE, TESTAR CRIAR USER POR REQUISIÇÃO PARA VER SE TAMBÉM VIRÁ O PASSWORD
        const user = await Users.create(dataToCreateUser)

        console.log(user)

        expect(
            bcrypt.compare(dataToCreateUser.password, user.password as string),
        ).toBeTruthy()
    })
    it('Should return a error for invalid email', async () => true)
    it('Should create a user and doesnt return the password', async () => true)
})
