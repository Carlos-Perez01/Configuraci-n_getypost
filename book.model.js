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
	console.log('Conexión establecida correctamente');
}).catch((error) => {
	console.error('No se puede conectar a la base de datos',error);
});

const Book = sequelize.define("books", {
   title: {
     type: DataTypes.STRING,
     allowNull: false
   },
   author: {
     type: DataTypes.STRING,
     allowNull: false
   },
   release_date: {
     type: DataTypes.DATEONLY,
   },
   subject: {
     type: DataTypes.INTEGER,
   }
});

sequelize.sync().then(() => {
   console.log('Book table created successfully!');
}).catch((error) => {
   console.error('Unable to create table : ', error);
});
