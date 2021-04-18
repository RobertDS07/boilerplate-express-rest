import { DataTypes, Model } from 'sequelize/types'
import bcrypt from 'bcryptjs'

import ITimestamps from '../interfaces/timestamps'

import sequelize from '../sequelize'

interface IUsers extends Model, ITimestamps {
    id: number
    email: string
    username: string
    password: string
}

const Users = sequelize.define<IUsers>(
    'users',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        email: {
            type: DataTypes.TEXT,
            unique: true,
            allowNull: false,
            validate: {
                isEmail: {
                    msg: 'Invalid email',
                },
            },
        },
        username: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        password: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                len: {
                    msg: 'Weak password',
                    args: [4, 100],
                },
            },
        },
    },
    {
        hooks: {
            beforeSave: async (user: IUsers) => {
                if (user.password) {
                    user.password = await bcrypt.hash(user.password, 10)
                }
            },
        },
    },
)

export default Users
