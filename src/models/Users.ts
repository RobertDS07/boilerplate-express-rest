import { DataTypes, Model } from 'sequelize'

import ITimestamps from '../interfaces/timestamps'

import sequelize from '../sequelize'

export interface IUser extends Model, ITimestamps {
    id: number
    email: string
    username: string
    password?: string
}

const Users = sequelize.define<IUser>(`users`, {
    email: {
        type: DataTypes.TEXT,
        unique: true,
        allowNull: false,
    },
    username: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    password: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
})

export default Users
