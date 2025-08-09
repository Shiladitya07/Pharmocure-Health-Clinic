const mongoose = require('mongoose');

const Connection = async () =>{
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Database connected successfully");
    }catch(error){
        console.log("Error while connecting to database", error);
    }
}

module.exports = Connection;