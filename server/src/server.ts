import express from "express";
const app=express();
const PORT=5000;

app.listen(PORT,()=>{
    console.log(`Server chal raha hai: http://localhost:
      ${PORT}`);
})