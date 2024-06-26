import Sequelize from 'sequelize';

function getConnexion() {
    return new Sequelize('postgres://weatherapp:weatherapp@postgres:5432/weatherapp', {
        define: {
            underscored: true,
        },

        logging: false,
    });
};

export { getConnexion };
