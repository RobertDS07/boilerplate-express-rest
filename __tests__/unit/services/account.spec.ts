import faker from 'faker'

import sequelize from '../../../src/sequelize'

import UsersRepository from '../../../src/repositories/UsersRepository'

describe('accountService tests', () => {
    beforeAll(async () => {
        await sequelize.sync({ force: true })
    })

    it('Should create a User and return it', async () => {
        const dataToCreateUser = {
            email: faker.internet.email(),
            password: faker.internet.password(),
            username: faker.internet.userName(),
        }

        const user = await UsersRepository.create(dataToCreateUser)

        expect(user).toHaveProperty('id')
    })
})
