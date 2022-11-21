const mongoose = require("mongoose");
const connectDatabase = () =>{
    mongoose.connect('mongodb+srv://khani:khani@cluster0.wkkr1sm.mongodb.net/water',{
        useNewUrlParser :true,
        useUnifiedTopology:true,
    }).then((data) =>{
        console.log(`DATABASE CONNECTION SUCCESSFUL WITH SERVER: ${data.connection.host}`);
    })
}
module.exports = connectDatabase;