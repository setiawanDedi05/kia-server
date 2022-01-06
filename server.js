const app = require('./app')
const port = 4001




app.listen(port, () => {
    console.log("server is listening to port"+ port);
})