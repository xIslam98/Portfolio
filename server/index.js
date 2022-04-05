const express = require('express');
const app = express ();
const mongoose = require('mongoose');
const UserModel = require('./models/Users');
const UserModelMenu = require('./models/Menu');
const cors = require("cors");
const UserModelMain = require('./models/mainhome');
const UserModelSlider = require('./models/Slider');
const UserModelProduct = require('./models/Product');
const dotenv = require('dotenv');
app.use(cors());

app.use(express.json());
// import Routes
const authRoute = require('./routes/auth');
const postRoute = require('./routes/post')

//Route Middlewares
app.use('/api/posts', postRoute);
app.use('/api/user', authRoute);

dotenv.config();
//Middleware



mongoose.connect(process.env.DB_CONNECT, {useNewUrlParser: true}, () => console.log('connected to db'))

app.get('/', (req, res) => {
    res.render('something', { layout: false });
})

app.get("/getMenu", (req,res)=> {
    UserModelMenu.find({}, (err,result) => {
        if(err){
            res.json(err);
        }else{
            res.json(result);
        }
    }) 
})
app.get("/getProduct", (req,res)=> {
    UserModelProduct.find({}, (err,result) => {
        if(err){
            res.json(err);
        }else{
            res.json(result);
        }
    }) 
})


app.get("/getMain", (req,res)=> {
    UserModelMain.find({}, (err,result) => {
        if(err){
            res.json(err);
        }else{
            res.json(result);
        }
    }) 
})
app.get("/getSlider", (req,res)=> {
    UserModelSlider.find({}, (err,result) => {
        if(err){
            res.json(err);
        }else{
            res.json(result);
        }
    }) 
})




app.get("/getUsers", (req,res)=> {
    UserModel.find({}, (err,result) => {
        if(err){
            res.json(err);
        }else{
            res.json(result);
        }
    }) 
})



// app.post("/createUser", async (req,res)=> {
//     const user = req.body
//     const newUser = new UserModel(user);
//     await newUser.save();
    
//     res.json(user);
// })





//Route Middlewares
app.use('/api/user', authRoute);



app.listen(3001, () =>{
    console.log("il server è partito perfectley");
});

