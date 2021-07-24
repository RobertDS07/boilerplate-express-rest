import { IUser } from 'models/Users'

import UsersRepository, { TPropsCreateUser } from 'repositories/UsersRepository'

class AccountsService {
    createAccount = async ({
        email,
        password,
        username,
    }: TPropsCreateUser): Promise<IUser> => {
        const user = await UsersRepository.create({ email, password, username })

        return user
    }
}

export default new AccountsService()
