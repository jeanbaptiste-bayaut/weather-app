import Sequelize from 'sequelize';

function getConnexion() {
    return new Sequelize(process.env.PG_URL, {
        define: {
            underscored: true,
        },

        logging: false,
    });
};

export { getConnexion };
