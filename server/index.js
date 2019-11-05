const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();


const { mongoose } = require('./database'); 

//Configuración
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({origin: 'http://localhost:4200'}));



//Routes
app.use('/api/clientes',require('./routes/employee.routes'));

//Start server
app.listen(app.get('port'), () =>{
    console.log('Server en el puerto',app.get('port'));
}); 