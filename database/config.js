

const mongoose = require('mongoose');

const dbConnection = async ()=> {

    try {
        await mongoose.connect(process.env.DB_CNN);
        
        console.log("DB connected");

    } catch (error) {
        console.log(error);
        throw new Error('Error conectando con la BD. Apaga y enciende a ver.')
    }

}

module.exports = {
    dbConnection
}