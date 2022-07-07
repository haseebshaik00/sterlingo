const { db, Sequelize } = require('./connection');

const COL_ID_DEF = {
    type: Sequelize.DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
};

const COL_NAME_DEF = {
    type: Sequelize.DataTypes.STRING(50),
    allowNull: false
}

const COL_USERNAME_DEF = {
    type: Sequelize.DataTypes.STRING(30),
    unique: true,
    allowNull: false
}

const COL_TITLE_DEF = {
    type: Sequelize.DataTypes.STRING(100),
    allowNull: false
}

const COL_DESCRIPTION_DEF = {
    type: Sequelize.DataTypes.STRING(200),
    allowNull: false
}

const Users = db.define('user', {
    id: COL_ID_DEF,
    name: COL_NAME_DEF,
    username: COL_USERNAME_DEF,
    phone: {
        type: Sequelize.DataTypes.BIGINT,
        unique: true,
        allowNull: false
    },
    age: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false
    },
    occupation: {
        type: Sequelize.DataTypes.STRING(20),
        allowNull: false
    }
});

const Transactions = db.define('transaction', {
    id: COL_ID_DEF,
    title: COL_TITLE_DEF,
    names: {
        type: Sequelize.DataTypes.JSON,
        allowNull: false
    },
    amount: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false
    },
    category: {
        type: Sequelize.DataTypes.STRING(20),
        allowNull: false
    },
    desription: COL_DESCRIPTION_DEF
});

// relationship definition

Users.hasMany(Transactions);
Transactions.belongsTo(Users);

module.exports = {
    db, Users, Transactions
};