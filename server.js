const express =  require('express')
const mysql = require('mysql')
const ejs = require('ejs')
const {Sequelize, DataTypes}=require('sequelize');
const app = express()
const router_cliente =  express.Router();
const router_producto = express.Router();
const port = 3000;

//Configuramos la conexión a la bd
var connection = mysql.createConnection({
	host : 'localhost',
	user : 'root',
	password: 'root'
});

connection.connect();

//Extensiones

app.use(express.urlencoded({
	extended: true
}))


//Routers
app.use('/cliente',router_cliente)
app.use('/producto',router_producto)


//Mostrar
router_cliente.get('/:id', (req,res) => {

	connection.query("SELECT * FROM cliente WHERE id='"+id+"'", function(err,rows,fields){
		if (err) throw err;
		//console.log('The solution is: ', rows[0].solution);
		res.status(201).send('Usuario ' + rows)
	});
})

//Editar
router_cliente.get('/editar/:id', (req,res) => {
	
})

//Borrar
router_cliente.get('/borrar/:id', (req,res) => {

})

//Crear
router_cliente.get('/nuevo', (req,res) => {

})

app.get('/usuario', (req,res) => {
	let usuario = {
		nombre: 'Messi',
		telefono: 555111222,
	}
	res.render('usuario.ejs' , usuario);
})

app.get('/formulario', (req,res) => {
	res.render('index.ejs');
})

//Recibe el formulario
app.post('/formulario',(req,res) => {
	let user = req.body.user;
	let pw = req.body.pw
	res.set('Content-Type' - 'text/plain')
	if(user == 'carlos' && pw == 'hola'){
		let jsonResponse = {
			username: user,
			activo: true,
			pais:'ES',
		}
		res.status(201).json(jsonResponse);
	}
	res.status(401).send('Error en credenciales...')
})

//BBDD

const sequelize = new Sequelize(
	'hola',
	'root',
	'root',
	{
	 host:'localhost',
	 dialect:'mysql'
	}
);

sequelize.authenticate().then(() => {
	console.log('La conexión se ha establecido');
}).catch((error) => {
	console.log('No se puede conectar BBDD',error);
});



app.listen(port, () => {})

