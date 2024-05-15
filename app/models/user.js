import { Model, DataTypes } from 'sequelize';
import { getConnexion } from './sequelizeClient.js'

class User extends Model{}

User.init(
    {
        email: {
            type: DataTypes.TEXT,
            allowNull: false,
            unique: true, 
        },

        password: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    },
    {
        sequelize: getConnexion(),
        tableName: 'user',
    }
);

export { User };