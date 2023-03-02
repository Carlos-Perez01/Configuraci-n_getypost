const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(
   'hola',
   'root',
   'root',
    {
      host: 'localhost',
      dialect: 'mysql'
    }
  );

sequelize.authenticate().then(() => {
   console.log('Connection has been established successfully.');
}).catch((error) => {
   console.error('Unable to connect to the database: ', error);
});

const User = sequelize.define("user", {
   username: {
       type: DataTypes.STRING,
       allowNull: false,
   },
   password: {
       type: DataTypes.STRING,
       allowNull: false
   }
});

sequelize.sync().then(() => {
           User.findAll().then(result => {
               console.log(result)
           }).catch((error) => {
               console.error('Failed to retrieve data : ', error);
           });
}).catch((error) => {
   console.error('Unable to create the table : ', error);
});
