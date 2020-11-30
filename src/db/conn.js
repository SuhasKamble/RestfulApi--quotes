const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/quotes",{useNewUrlParser: true,useUnifiedTopology:true,useFindAndModify:false})
.then(()=>{
    console.log("Database connected sucessfully...")
}).catch((e)=>{
    console.log("Database is not connected...")
})