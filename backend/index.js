const express= require("express");
const mongoose= require("mongoose");
const app = express();
const cors= require("cors");

const router=require ("./routes/users.route");
const services=require("./routes/services")


const port = 4000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());





async function connect (){
  try {
  await mongoose.connect(
    "mongodb+srv://muzammil:Khan1763@cluster0.o0lk2um.mongodb.net/data"
  );
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
  
} catch (error) {
  console.log(error);
}
}

connect();


app.use("/",router);
app.get("/services",(req,res)=>{
  res.json(services);
})









































































// app.get("/api/services", (req, res) => {
//  
//   res.send(service);
// });