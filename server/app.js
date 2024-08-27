import express from "express"
import { connection } from "./database/utils/connection.js";
import userauthroute from "./database/routes/userauthroute.js";
import cors from "cors";
const app=express();

app.use(express.urlencoded({extended:true})); //middleware to extract body content
app.use(express.json());
app.use(cors({
    origin:"http://localhost:5173",
    methods:["GET","PUT","POST","DELETE"],
    credentials:true,//to make cookie accessible on frontend also bcz this allows cokkie accessible on diff domains.
}))
app.use(userauthroute)
app.listen(5000,()=>{
    connection();
    console.log("server running on port 5000 :)");
})