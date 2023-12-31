require("dotenv").config();
import express from "express";
import configViewEngine from "./config/viewEngine";
import initWebRoutes from "./route/web";
import bodyParser from "body-parser";

let app = express();

//use body-parser to post data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//config view engine
configViewEngine(app);
initWebRoutes(app);

let port = process.env.PORT || 8080;

app.listen(port, ()=>{
    console.log('App is running at the port ${port}')
});