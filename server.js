const { default: mongoose } = require("mongoose");
const app = require("./app");
const { MONGODB_URI_Link, PORT } = require("./utils/config");

// Connect Database
mongoose.connect(MONGODB_URI_Link)
.then(()=>{
    console.log("database connected successfully");      
    // add listner
    app.listen(PORT , ()=>{
        console.log(`Server is running on http://localhost:${PORT}`);
    })

}).catch(()=>{
    console.log("database is not connected")
})
