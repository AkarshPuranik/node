const app = require('./app');
const db = require('./db')
const UserModel = require('./user.model')
const port = 2000;

app.get('/',(req,res)=>{
    res.send("Hello Akarsh")
});

app.listen(port, () => {
    console.log(`Server Listening on Port http://localhost:${port}`);
  });