const app = require("./app");
const dotenv = require('dotenv');
const mongoose = require('mongoose');
dotenv.config()

const db = process.env.DB
mongoose.connect(db,{
    // useCreateIndex: true,
    // useFindAndModify: false,
    useNewUrlParser: true, 
    useUnifiedTopology: true
}).then(()=>{
    console.log('Database Connected Successfully')
})
.catch((err) => {
    console.log(`Database not Connected: ${err.message}`)
})


const port = 5000
app.listen(port,()=>{
    console.log(`Server is running on port number ${port}...`);
}) 


