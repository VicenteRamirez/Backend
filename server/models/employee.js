const mongoose = require('mongoose');
const { Schema } = mongoose;

const EmployeeeSchema = new Schema({
    nombre: {type:String, required:true},
    apellido: {type:String, required:true},
    telefono: {type:Number, required:true},
    direccion: {type:String, required:true}
});

module.exports =  mongoose.model('Employee',EmployeeeSchema);